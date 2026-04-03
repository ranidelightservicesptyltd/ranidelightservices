"use client";

import React from 'react';
import './StarBorder.css';

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
  [key: string]: any; // Allow dynamic props like href, target, etc.
}

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = '#00d4aa',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps) => {
  const El = Component as any;
  return (
    <El
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content w-full h-full">{children}</div>
    </El>
  );
};

export default StarBorder;
