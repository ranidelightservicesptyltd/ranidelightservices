"use client";

import { useState, useCallback } from "react";

/* ─── FAQ Data ─── */
const categories = ["Services", "Booking & Pricing", "Equipment", "Safety & Trust"] as const;
type Category = (typeof categories)[number];

interface FAQ {
  question: string;
  answer: string;
}

const faqData: Record<Category, FAQ[]> = {
  Services: [
    {
      question: "What types of cleaning services do you offer?",
      answer:
        "We offer a comprehensive range of premium cleaning services including end-of-lease bond cleans, regular domestic cleaning, deep cleaning, upholstery & carpet steam cleaning, and specialised office cleaning. Each service is tailored to your specific needs.",
    },
    {
      question: "Do you offer one-time or recurring services?",
      answer:
        "Both. Whether you need a single deep clean before moving out or a regular weekly or fortnightly schedule, we accommodate your preferences with complete flexibility and no lock-in contracts.",
    },
    {
      question: "What areas in Sydney do you service?",
      answer:
        "We cover Parramatta and the greater Sydney metropolitan area, including the Inner West, North Shore, Eastern Suburbs, and Western Sydney. Contact us if you're unsure — we'll do our best to accommodate you.",
    },
  ],
  "Booking & Pricing": [
    {
      question: "How do I book a cleaning?",
      answer:
        "You can book directly through our website by clicking 'Book Now', which takes you to our scheduling system. Alternatively, call us on +61 478 815 629 or send a WhatsApp message for personalised assistance.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is transparent and based on the size of your space, the type of service required, and frequency. We provide a detailed quote before any work begins — no hidden fees, no surprises.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand plans change. We request at least 24 hours' notice for cancellations or rescheduling. This helps us optimise our schedule and serve all clients effectively.",
    },
  ],
  Equipment: [
    {
      question: "Do I need to provide any equipment or supplies?",
      answer:
        "No. We arrive fully equipped with professional-grade tools, high-suction vacuums, deep-steam cleaners, and premium eco-friendly cleaning products. If you have specific preferences for certain surfaces, we're happy to accommodate.",
    },
    {
      question: "What cleaning products do you use?",
      answer:
        "We use premium, eco-friendly, and non-toxic cleaning products that are safe for children, pets, and sensitive surfaces. Our supplies are carefully selected to deliver exceptional results without compromising health or the environment.",
    },
    {
      question: "Can you handle delicate or high-value surfaces?",
      answer:
        "Absolutely. Our team is trained in specialised techniques for marble, stone, timber, silk upholstery, and other premium materials. We treat every surface with the precision it deserves.",
    },
  ],
  "Safety & Trust": [
    {
      question: "Are your cleaning professionals vetted?",
      answer:
        "Yes. Every team member undergoes thorough background checks and reference verification. They follow strict safety and discretion protocols to ensure your privacy and security are never compromised.",
    },
    {
      question: "Are you fully insured?",
      answer:
        "Yes. Rani Delight Services is fully insured, providing you with complete peace of mind. In the unlikely event of any issue, you are fully covered.",
    },
    {
      question: "What if I'm not satisfied with the clean?",
      answer:
        "Your satisfaction is our priority. If any aspect doesn't meet your expectations, contact us within 24 hours and we will return to address it at no additional cost.",
    },
  ],
};

/* ─── Trust Indicators ─── */
const trustItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Fully Equipped",
    desc: "Professional-grade tools & supplies",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: "Vetted Professionals",
    desc: "Background-checked & insured",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864a4.5 4.5 0 010 6.635.897.897 0 00-.405.864v.568M8.25 10.5a4.502 4.502 0 00-.646 2.086c-.058.551.414 1.013.967 1.013h6.858c.553 0 1.025-.462.967-1.013a4.502 4.502 0 00-.646-2.086m-7.5 0h9m-9 0a4.5 4.5 0 01-.324-1.5M17.25 10.5a4.5 4.5 0 00.324-1.5M12 21v-7.5" />
      </svg>
    ),
    label: "Eco-Friendly Supplies",
    desc: "Safe for family, pets & planet",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    label: "100% Satisfaction",
    desc: "Guaranteed or we come back free",
  },
];

/* ─── Accordion Item ─── */
function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${isOpen
          ? "bg-slate-50 border-slate-200 shadow-sm"
          : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-md"
        }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
      >
        <span
          className={`text-base md:text-lg font-medium tracking-tight transition-colors duration-300 ${isOpen ? "text-slate-900" : "text-slate-600"
            }`}
        >
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-blue-100 text-blue-600 rotate-180" : "bg-slate-100 text-slate-400"
            }`}
        >
          <svg
            className="w-4 h-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-slate-500 font-light leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main FAQs Component ─── */
export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState<Category>("Services");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleCategoryChange = useCallback((cat: Category) => {
    setActiveCategory(cat);
    setOpenIndex(0); // Open first item when switching category
  }, []);

  const activeFaqs = faqData[activeCategory];

  return (
    <>
      <section id="faqs" className="py-24 md:py-32 px-6 md:px-12 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto">

          {/* ── Header ── */}
          <div className="mb-16 md:mb-20">
            <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              Common Questions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
              FAQs
            </h1>
            <p className="text-slate-600 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Everything you need to know about our premium cleaning services. Can't find what you're looking for? Get in touch.
            </p>
          </div>

          {/* ── Category Tabs ── */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${activeCategory === cat
                    ? "bg-slate-900 text-white border border-slate-900 shadow-md"
                    : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Main Grid: Accordion + Trust Card ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left: Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {activeFaqs.map((faq, idx) => (
                <AccordionItem
                  key={`${activeCategory}-${idx}`}
                  faq={faq}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))}
            </div>

            {/* Right: Trust Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 rounded-3xl bg-white backdrop-blur-xl border border-slate-200 shadow-xl p-8 md:p-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Why Rani Delight?</h3>
                <p className="text-slate-500 text-sm font-light mb-8">
                  Trusted by homeowners across Sydney.
                </p>

                <div className="space-y-0">
                  {trustItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-4 py-5 ${idx < trustItems.length - 1 ? "border-b border-slate-100" : ""
                        }`}
                    >
                      <span className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        {item.icon}
                      </span>
                      <div>
                        <span className="block text-slate-900 font-medium text-sm">{item.label}</span>
                        <span className="text-slate-500 text-xs font-light">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── White Panel: CTA Section ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Still have questions?
          </h3>
          <p className="text-slate-500 text-lg font-light mb-10 max-w-lg mx-auto leading-relaxed">
            We're here to help. Book a consultation or reach out directly — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/booknow"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-blue-500/20 transition-all duration-300"
            >
              Book Now
            </a>
            <a
              href="tel:+61478815629"
              className="text-slate-500 hover:text-slate-900 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide border border-slate-200 hover:border-slate-400 transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
