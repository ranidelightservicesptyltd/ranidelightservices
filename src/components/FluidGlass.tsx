import * as THREE from 'three';
import React, { useRef, useState, useEffect, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import { useFBO, MeshTransmissionMaterial } from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ videoRef, modeProps = {} }: { videoRef: React.RefObject<HTMLVideoElement | null>; modeProps?: any }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
        <ModeWrapper modeProps={modeProps}>
          {videoRef?.current && <VideoBackground videoElement={videoRef.current} />}
        </ModeWrapper>
      </Canvas>
    </div>
  );
}

function VideoBackground({ videoElement }: { videoElement: HTMLVideoElement }) {
  const { viewport } = useThree();
  const [texture] = useState(() => new THREE.VideoTexture(videoElement));

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    
    const handleResize = () => {
      const vidWidth = videoElement.videoWidth || 1920;
      const vidHeight = videoElement.videoHeight || 1080;
      const vidAspect = vidWidth / vidHeight;
      const vpAspect = viewport.width / viewport.height;
      
      if (vidAspect > vpAspect) { // video is wider
        texture.repeat.set(vpAspect / vidAspect, 1);
        texture.offset.set((1 - vpAspect / vidAspect) / 2, 0);
      } else { // vp is wider
        texture.repeat.set(1, vidAspect / vpAspect);
        texture.offset.set(0, (1 - vidAspect / vpAspect) / 2);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    videoElement.addEventListener('loadedmetadata', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      videoElement.removeEventListener('loadedmetadata', handleResize);
    };
  }, [viewport.width, viewport.height, videoElement, texture]);

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  modeProps = {},
}: { children: React.ReactNode; modeProps?: any }) {
  const ref = useRef<THREE.Mesh>(null);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = (pointer.x * v.width) / 2;
    const destY = (pointer.y * v.height) / 2;
    
    if (ref.current) {
      easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
      // Give it a slow continuous rotation to feel organic
      ref.current.rotation.z += delta * 0.2;
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Keep transparent to match the HTML video around the lens
    gl.setClearColor(0x000000, 0);
  });

  const { scale = 2.5, ior = 1.15, thickness = 2, anisotropy = 0.01, chromaticAberration = 0.05, ...extraMat } = modeProps;

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      {createPortal(children, scene)}
      
      {/* Background Plane Rendering FBO Texture */}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent toneMapped={false} />
      </mesh>
      
      {/* The Lens (using a squashed sphere to create a convex lens effect) */}
      <mesh ref={ref} scale={[scale, scale, scale * 0.2]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior}
          thickness={thickness}
          anisotropy={anisotropy}
          chromaticAberration={chromaticAberration}
          transmission={1}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0.1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});
