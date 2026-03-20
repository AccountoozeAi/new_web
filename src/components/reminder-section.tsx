// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { buttonVariants } from '@/components/ui/button';
// import Link from 'next/link';
// import { cn } from '@/lib/utils';
// import { EcommerceAggregatorStorySection } from './ecommerce-aggregator-story-section';

// const slides = [
//   {
//     id: 1,
//     title1: "Bookkeeping Service",
//     title2: "For Real Estate Business",
//     description: "Hire a Team of CPAs who specializes in Bookkeeping and Accounting of Real Estate Industry",
//     image: "/Images/bro.avif",
//   },
//   {
//     id: 2,
//     title1: "Commission & Rental Tracking",
//     title2: "That Works as Hard as You Do",
//     description: "From closings to payouts, we manage your financials while you focus on selling more homes and closing more deals.",
//     image: "/Images/grow.avif",
//   },
//   {
//     id: 3,
//     title1: "Stay on Top of Every",
//     title2: "Property's Profitability",
//     description: "We handle rental income, expenses, and P&L reports for each unit — so you can grow your portfolio with clarity.",
//     image: "/Images/Realestate.avif",
//   }
// ];

// export function ReminderSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-cycle logic: દર 5 સેકન્ડે સ્લાઇડ બદલાશે
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-white py-5 md:py-5 min-h-[600px] flex items-center">
//       <div className="container relative z-10 mx-auto px-4">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid md:grid-cols-2 gap-12 items-center">

//             {/* Left Side: Animated Content */}
//             <div className="space-y-6 text-left transition-all duration-700 ease-in-out">
//               <div className="space-y-2">
//                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] animate-in fade-in slide-in-from-left duration-1000">
//                   {slides[currentSlide].title1}
//                 </h2>
//                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF4500] animate-in fade-in slide-in-from-left duration-1000 delay-150">
//                   {slides[currentSlide].title2}
//                 </h3>
//               </div>

//               <p className="text-xl md:text-2xl text-gray-700 max-w-xl leading-snug min-h-[80px]">
//                 {slides[currentSlide].description}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-6">
//                 <Link
//                   href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
//                   className={cn(
//                     buttonVariants({ size: 'lg' }),
//                     'bg-[#FF4500] hover:bg-[#E63E00] text-white px-8 py-7 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95'
//                   )}
//                 >
//                   Book a Free Consultation
//                 </Link>

//                 <Link
//                   href= "#"
//                   className={cn(
//                     buttonVariants({ variant: 'outline', size: 'lg' }),
//                     'border-[#4A5568] text-[#4A5568] hover:bg-gray-100 px-10 py-7 text-lg font-semibold rounded-full border-2 transition-all'
//                   )}
//                 >
//                   Explore Plans
//                 </Link>
//               </div>

//               {/* Slider Dots (Indicators) */}
//               <div className="flex gap-2 pt-8">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={cn(
//                       "h-2 transition-all duration-300 rounded-full",
//                       currentSlide === index ? "w-8 bg-[#FF4500]" : "w-2 bg-gray-300"
//                     )}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Right Side: Animated Image */}
//             <div className="relative flex justify-center items-center h-[500px] md:h-[500px]">
//               <div key={currentSlide} className="relative w-full h-full animate-in fade-in zoom-in duration-1000">
//                 <Image
//                   src={slides[currentSlide].image}
//                   alt="Hero Illustration"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { buttonVariants } from '@/components/ui/button';
// import Link from 'next/link';
// import { cn } from '@/lib/utils';
// import { EcommerceAggregatorStorySection } from './ecommerce-aggregator-story-section';

// const slides = [
//   {
//     id: 1,
//     title1: "Bookkeeping Service",
//     title2: "For Real Estate Business",
//     description: "Hire a Team of CPAs who specializes in Bookkeeping and Accounting of Real Estate Industry",
//     image: "/Images/bro.avif", // તમારા પ્રોજેક્ટ મુજબ પાથ બદલજો
//   },
//   {
//     id: 2,
//     title1: "Commission & Rental Tracking",
//     title2: "That Works as Hard as You Do",
//     description: "From closings to payouts, we manage your financials while you focus on selling more homes and closing more deals.",
//     image: "/Images/grow.avif",
//   },
//   {
//     id: 3,
//     title1: "Stay on Top of Every",
//     title2: "Property's Profitability",
//     description: "We handle rental income, expenses, and P&L reports for each unit — so you can grow your portfolio with clarity.",
//     image: "/Images/Realestate.avif",
//   }
// ];

// export function ReminderSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-cycle logic: દર 5 સેકન્ડે સ્લાઇડ બદલાશે
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-white py-16 md:py-24 min-h-[600px] flex items-center">
//       <div className="container relative z-10 mx-auto px-4">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid md:grid-cols-2 gap-12 items-center">

//             {/* Left Side: Animated Content */}
//             <div className="space-y-6 text-left transition-all duration-700 ease-in-out">
//               <div className="space-y-2">
//                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] animate-in fade-in slide-in-from-left duration-1000">
//                   {slides[currentSlide].title1}
//                 </h2>
//                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF4500] animate-in fade-in slide-in-from-left duration-1000 delay-150">
//                   {slides[currentSlide].title2}
//                 </h3>
//               </div>

//               <p className="text-xl md:text-2xl text-gray-700 max-w-xl leading-snug min-h-[80px]">
//                 {slides[currentSlide].description}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-6">
//                 <Link
//                   href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
//                   className={cn(
//                     buttonVariants({ size: 'lg' }),
//                     'bg-[#FF4500] hover:bg-[#E63E00] text-white px-8 py-7 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95'
//                   )}
//                 >
//                   Book a Free Consultation
//                 </Link>

//                 <Link
//                   href= "#"
//                   className={cn(
//                     buttonVariants({ variant: 'outline', size: 'lg' }),
//                     'border-[#4A5568] text-[#4A5568] hover:bg-gray-100 px-10 py-7 text-lg font-semibold rounded-full border-2 transition-all'
//                   )}
//                 >
//                   Explore Plans
//                 </Link>
//               </div>

//               {/* Slider Dots (Indicators) */}
//               <div className="flex gap-2 pt-8">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={cn(
//                       "h-2 transition-all duration-300 rounded-full",
//                       currentSlide === index ? "w-8 bg-[#FF4500]" : "w-2 bg-gray-300"
//                     )}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Right Side: Animated Image */}
//             <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
//               <div key={currentSlide} className="relative w-full h-full animate-in fade-in zoom-in duration-1000">
//                 <Image
//                   src={slides[currentSlide].image}
//                   alt="Hero Illustration"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { useState, useEffect, useCallback, useRef } from 'react';
// import Image from 'next/image';
// import { buttonVariants } from '@/components/ui/button';
// import Link from 'next/link';
// import { cn } from '@/lib/utils';
// import { motion, AnimatePresence } from 'framer-motion';

// const slides = [
//   {
//     id: 1,
//     title1: "Bookkeeping Service",
//     title2: "For Real Estate Business",
//     description: "Hire a Team of CPAs who specializes in Bookkeeping and Accounting of Real Estate Industry",
//     image: "/Images/bro.avif",
//   },
//   {
//     id: 2,
//     title1: "Commission & Rental Tracking",
//     title2: "That Works as Hard as You Do",
//     description: "From closings to payouts, we manage your financials while you focus on selling more homes and closing more deals.",
//     image: "/Images/Outstaff.avif",
//     // imageClassName: "scale-110 md:scale-125"
//   },
//   {
//     id: 3,
//     title1: "Stay on Top of Every",
//     title2: "Property's Profitability",
//     description: "We handle rental income, expenses, and P&L reports for each unit — so you can grow your portfolio with clarity.",
//     image: "/Images/Realestate.avif",
//   }
// ];

// export function ReminderSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const isScrolling = useRef(false);

//   const handleScroll = useCallback((e: any) => {
//     if (isScrolling.current) return;
//     if (Math.abs(e.deltaY) < 50) return;

//     isScrolling.current = true;
//     if (e.deltaY > 0) {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     } else {
//       setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     }
//     setTimeout(() => { isScrolling.current = false; }, 1000);
//   }, []);

//   useEffect(() => {
//     const section = document.getElementById('scroll-section');
//     section?.addEventListener('wheel', handleScroll, { passive: false });
//     return () => section?.removeEventListener('wheel', handleScroll);
//   }, [handleScroll]);

//   return (
//     <section
//       id="scroll-section"
//       className="relative overflow-hidden bg-[#FCFCFD] pt-16 md:pt-19 pb-12 md:pb-19 flex items-start justify-center"
//     >
//       {/* Background Blurs */}
//       <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-orange-100/30 rounded-full blur-[120px] -z-10" />
//       <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-50/40 rounded-full blur-[100px] -z-10" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Responsive Grid: Mobile pe Image upar (order-1), Text niche (order-2) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center text-center md:text-left">

//             {/* Content Side */}
//             <div className="order-2 md:order-1 flex flex-col justify-center">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.4 }}
//                   className="space-y-6 md:space-y-8"
//                 >
//                   <div className="space-y-4">
//                     {/* <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-[#FF4500] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-orange-100 shadow-sm">
//                       Real Estate Solutions
//                     </span> */}
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111827] leading-[1.1] md:max-w-[15ch]">
//                       {slides[currentSlide].title1}
//                       <br />
//                       <span className="text-[#FF4500] inline-block mt-1">
//                         {slides[currentSlide].title2}
//                       </span>
//                     </h2>
//                     <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
//                       {slides[currentSlide].description}
//                     </p>
//                   </div>

//                   {/* Buttons Container */}
//                   <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
//                     <Link
//                       href="https://calendar.google.com/..."
//                       className={cn(
//                         buttonVariants({ size: 'lg' }),
//                         'bg-[#FF4500] hover:bg-[#E63E00] text-white px-6 py-6 md:px-8 md:py-7 text-base md:text-lg font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-1 active:scale-95'
//                       )}
//                     >
//                       Book a Consultation
//                     </Link>
//                   </div>
//                   {/* <Link
//                       href="#Explore"
//                       className={cn(
//                         buttonVariants({ variant: 'outline', size: 'lg' }),
//                         'border-slate-200 text-slate-700 bg-white px-6 py-6 md:px-8 md:py-7 text-base md:text-lg font-bold rounded-xl border-2 transition-all'
//                       )}
//                     >
//                       Explore Plans
//                     </Link> */}

//                   {/* Progress Indicators */}
//                   <div className="flex items-center gap-4 pt-6 justify-center md:justify-start">
//                     <div className="flex gap-2">
//                       {slides.map((_, index) => (
//                         <button
//                           key={index}
//                           onClick={() => setCurrentSlide(index)}
//                           className={cn(
//                             "h-2 rounded-full transition-all duration-300",
//                             currentSlide === index ? "w-10 bg-[#FF4500]" : "w-2 bg-slate-200"
//                           )}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Image Side */}
//             <div className="order-1 md:order-2 flex justify-center items-center">
//               <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentSlide}
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 1.05 }}
//                     transition={{ duration: 0.5 }}
//                     className="relative w-full h-full"
//                   >
//                     <Image
//                       src={slides[currentSlide].image}
//                       alt="Service Illustration"
//                       fill
//                       className="object-contain drop-shadow-2xl"
//                       priority
//                       sizes="(max-width: 768px) 100vw, 50vw"
//                     />

//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title1: "Bookkeeping Service",
    title2: "For Real Estate Business",
    description:
      "Hire a Team of CPAs who specializes in Bookkeeping and Accounting of Real Estate Industry",
    image: "https://new-web-xi-ten.vercel.app/Images/bro.avif",
  },
  {
    id: 2,
    title1: "Commission & Rental Tracking",
    title2: "That Works as Hard as You Do",
    description:
      "From closings to payouts, we manage your financials while you focus on selling more homes and closing more deals.",
    image: "https://new-web-xi-ten.vercel.app/Images/Outstaff.avif",
  },
  {
    id: 3,
    title1: "Stay on Top of Every",
    title2: "Property's Profitability",
    description:
      "We handle rental income, expenses, and P&L reports for each unit — so you can grow your portfolio with clarity.",
    image: "https://new-web-xi-ten.vercel.app/Images/Realestate.avif",
  },
];

export function ReminderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Auto-play logic (5 seconds) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section
      id="scroll-section"
      className="relative overflow-hidden bg-[#FCFCFD] pt-15 md:pt-18 pb-12 md:pb-19 flex items-start justify-center"
    >
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-orange-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-50/40 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center text-center md:text-left">
            {/* Content Side */}
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111827] leading-[1.1]">
                      {slides[currentSlide].title1}
                      <br />
                      <span className="text-[#FF4500] inline-block mt-1">
                        {slides[currentSlide].title2}
                      </span>
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                      {slides[currentSlide].description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                    <Link
                      href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "bg-[#FF4500] hover:bg-[#E63E00] text-white px-8 py-7 text-lg font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-1 active:scale-95",
                      )}
                    >
                      Book a Consultation
                    </Link>
                  </div>

                  {/* Progress Dots */}
                  <div className="flex items-center gap-4 pt-6 justify-center md:justify-start">
                    <div className="flex gap-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            currentSlide === index
                              ? "w-10 bg-[#FF4500]"
                              : "w-2 bg-slate-200",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image Side */}
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={slides[currentSlide].image}
                      alt="Service Illustration"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
