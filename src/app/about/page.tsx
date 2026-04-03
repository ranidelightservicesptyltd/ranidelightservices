import AboutHeroV2 from "@/components/AboutHeroV2";
import AboutStoryV2 from "@/components/AboutStoryV2";
import AboutValuePropV2 from "@/components/AboutValuePropV2";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHeroV2 />
      <AboutStoryV2 />
      <AboutValuePropV2 />

      {/* Final Commitment Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Ready for a Transformation?</h2>
          <p className="text-slate-500 text-lg md:text-xl font-light mb-10 leading-relaxed">
            I am committed to delivering high-quality results and making your home look its absolute best. I look forward to helping you maintain a clean, comfortable, and welcoming space.
          </p>
          <a
            href="/booknow"
            className="inline-block px-12 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 text-lg"
          >
            Book Your Specialist Session
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
