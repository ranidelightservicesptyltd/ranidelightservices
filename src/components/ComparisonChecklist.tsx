"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceType = "regular" | "deep" | "move";

interface ChecklistItem {
  name: string;
  regular: boolean;
  deep: boolean;
  move: boolean;
}

interface AreaCategory {
  title: string;
  items: ChecklistItem[];
}

const CHECKLIST_DATA: AreaCategory[] = [
  {
    title: "All General Areas",
    items: [
      { name: "Light Tidy Up", regular: true, deep: true, move: true },
      { name: "Cobweb Removal", regular: true, deep: true, move: true },
      { name: "Empty Bins", regular: true, deep: true, move: true },
      { name: "Dust Skirting Boards / Sills / Doors", regular: true, deep: true, move: true },
      { name: "Clean Light Switches / Power Points", regular: true, deep: true, move: true },
      { name: "Dust All Reachable Surfaces", regular: true, deep: true, move: true },
      { name: "Dust / Clean Mirrors", regular: true, deep: true, move: true },
      { name: "Air Freshen / Deodorise (Optional)", regular: true, deep: true, move: true },
      { name: "Dust Ceiling Fans", regular: true, deep: true, move: true },
      { name: "Vacuum / Clean Soft Furnishing", regular: true, deep: true, move: false },
      { name: "Vacuum Under Accessible Furniture", regular: true, deep: true, move: false },
      { name: "Wipe Skirting Boards / Sills / Doors", regular: false, deep: true, move: true },
      { name: "Lightly Dust Blinds", regular: false, deep: true, move: true },
      { name: "Vacuum / Wipe Window Tracks", regular: false, deep: true, move: true },
      { name: "Balcony Cleaning (Mop & Vacuum)", regular: false, deep: true, move: true },
      { name: "Extensive Tidy Up", regular: false, deep: true, move: false },
      { name: "Inside All Drawers / Cabinets", regular: false, deep: false, move: true },
      { name: "Inside Windows", regular: false, deep: false, move: true },
      { name: "Detail Doors / Door Frames", regular: false, deep: false, move: true },
    ]
  },
  {
    title: "Kitchen",
    items: [
      { name: "Clean Stovetop", regular: true, deep: true, move: true },
      { name: "Clean Rangehood (Exterior)", regular: true, deep: true, move: true },
      { name: "Clean / Wipe All Bench Tops", regular: true, deep: true, move: true },
      { name: "Clean Visible Appliances (Exterior)", regular: true, deep: true, move: true },
      { name: "Clean Splash Back", regular: true, deep: true, move: true },
      { name: "Clean / Polish Tapware", regular: true, deep: true, move: true },
      { name: "Scrub / Clean Sink", regular: true, deep: true, move: true },
      { name: "Clean Inside/Outside Microwave", regular: true, deep: true, move: true },
      { name: "Clean Cupboards (Exterior)", regular: true, deep: true, move: true },
      { name: "Polish Stainless Steel Surfaces", regular: true, deep: true, move: true },
      { name: "Pantry Cleaning", regular: true, deep: true, move: true },
      { name: "Dust Cabinet Doors", regular: true, deep: true, move: true },
      { name: "Clean Underside of Rangehood", regular: false, deep: true, move: true },
      { name: "Clean Exhaust Fans / Filters", regular: false, deep: false, move: true },
      { name: "Inside Dishwasher Wipe Down", regular: false, deep: false, move: true },
      { name: "Inside Oven", regular: false, deep: false, move: true },
      { name: "Inside All Drawers / Cabinets", regular: false, deep: false, move: true },
    ]
  },
  {
    title: "Bathrooms",
    items: [
      { name: "Scrub / Clean Bath & Shower", regular: true, deep: true, move: true },
      { name: "Scrub / Clean Sinks", regular: true, deep: true, move: true },
      { name: "Scrub / Clean Toilets (Base & Behind)", regular: true, deep: true, move: true },
      { name: "Wipe Down Benches & Mirrors", regular: true, deep: true, move: true },
      { name: "Clean / Polish Tapware & Chrome", regular: true, deep: true, move: true },
      { name: "Wipe Down Cupboards (Exterior)", regular: true, deep: true, move: true },
      { name: "Scrub Shower Wall Tiles & Grout", regular: false, deep: true, move: true },
      { name: "Clean Ceiling Exhaust Fans", regular: false, deep: false, move: true },
      { name: "Inside All Drawers / Cabinets", regular: false, deep: false, move: true },
      { name: "Inside Windows", regular: false, deep: false, move: true },
    ]
  },
  {
    title: "Laundry Room",
    items: [
      { name: "Vacuum / Mop All Accessible Floors", regular: true, deep: true, move: true },
      { name: "Cupboards (Exterior)", regular: true, deep: true, move: true },
      { name: "Dryer (Exterior)", regular: true, deep: true, move: true },
      { name: "Washing Machines (Exterior)", regular: true, deep: true, move: true },
      { name: "Inside Cupboards", regular: false, deep: false, move: true },
      { name: "Inside Dryer", regular: false, deep: false, move: true },
    ]
  },
  {
    title: "Bedrooms & Living",
    items: [
      { name: "Dust / Wipe All Surfaces", regular: true, deep: true, move: true },
      { name: "Make Beds", regular: true, deep: true, move: false },
      { name: "Inside All Drawers / Cabinets", regular: false, deep: false, move: true },
      { name: "Inside Windows", regular: false, deep: false, move: true },
    ]
  },
  {
    title: "Floors",
    items: [
      { name: "Vacuum / Mop All Accessible Floors", regular: true, deep: true, move: true },
    ]
  }
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function ComparisonChecklist() {
  const [activeTab, setActiveTab] = useState<ServiceType>("regular");

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Compare Our <span className="text-blue-600">Deep Details</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Total transparency. See exactly what goes into each level of our Elite Clean service.
          </p>
        </div>

        {/* Mobile View Toggle */}
        <div className="flex md:hidden bg-slate-200/50 p-1.5 rounded-2xl mb-12 relative z-10">
          {(["regular", "deep", "move"] as ServiceType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 relative z-10 ${
                activeTab === tab ? "text-white" : "text-slate-500"
              }`}
            >
              <span className="relative z-10">{tab.replace("move", "Move Out")}</span>
              {activeTab === tab && (
                <motion.div
                  layoutId="mobileTab"
                  className="absolute inset-0 bg-blue-600 rounded-xl z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Matrix */}
        <div className="hidden md:block">
          <table className="w-full border-separate border-spacing-y-4">
            {CHECKLIST_DATA.map((category, cIdx) => (
              <tbody key={cIdx}>
                {/* Section Header */}
                <tr>
                   <td colSpan={4} className="py-6 pl-8 bg-slate-950 text-slate-100 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
                      <span className="text-xl font-bold italic tracking-wider flex items-center gap-4">
                        <span className="w-2 h-8 bg-blue-600 rounded-full" />
                        {category.title}
                      </span>
                   </td>
                </tr>
                {/* Column Labels for this Section */}
                <tr className="text-left font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  <th className="pt-8 pb-4 pl-12">Items Included</th>
                  <th className="pt-8 pb-4 text-center">Regular</th>
                  <th className="pt-8 pb-4 text-center text-blue-600/60">Deep Spring</th>
                  <th className="pt-8 pb-4 text-center pr-8">Move In/Out</th>
                </tr>
                {category.items.map((item, iIdx) => (
                  <tr key={iIdx} className="group hover:bg-white transition-colors">
                    <td className="py-4 pl-12 text-slate-600 font-medium border-b border-slate-100 group-hover:border-transparent transition-all">
                      {item.name}
                    </td>
                    <td className="py-4 text-center border-b border-slate-100 group-hover:border-transparent">
                      {item.regular ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className="py-4 text-center border-b border-slate-100 group-hover:border-transparent bg-blue-50/20 group-hover:bg-blue-50/50">
                      {item.deep ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className="py-4 text-center border-b border-slate-100 group-hover:border-transparent pr-8">
                      {item.move ? <CheckIcon /> : <CrossIcon />}
                    </td>
                  </tr>
                ))}
                {/* Spacer between sections */}
                <tr><td colSpan={4} className="h-16"></td></tr>
              </tbody>
            ))}
          </table>
        </div>

        {/* Mobile List View */}
        <div className="md:hidden space-y-12">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="space-y-10"
             >
               {CHECKLIST_DATA.map((category, cIdx) => {
                 const relevantItems = category.items.filter(i => i[activeTab]);
                 if (relevantItems.length === 0) return null;

                 return (
                   <div key={cIdx}>
                      <h3 className="text-xl font-bold text-slate-950 mb-6 flex items-center gap-3">
                        <span className="w-1 h-6 bg-blue-600 rounded-full" />
                        {category.title}
                      </h3>
                      <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                         <ul className="space-y-4">
                            {category.items.map((item, iIdx) => (
                              <li key={iIdx} className={`flex items-start gap-4 py-1.5 ${item[activeTab] ? "text-slate-900" : "text-slate-400 opacity-40 line-through"}`}>
                                 <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center ${item[activeTab] ? "bg-blue-600 shadow-sm shadow-blue-200" : "bg-slate-100"}`}>
                                    {item[activeTab] ? (
                                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    ) : (
                                      <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                    )}
                                 </div>
                                 <span className="text-[15px] font-semibold leading-snug tracking-tight">{item.name}</span>
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                 );
               })}
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
