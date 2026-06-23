"use client";
import React, { useState } from "react";
import Image from "next/image";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import landmaarkData from "@/data/landmaark.json";

export default function LandmaarkCaseStudy() {
  const sliderImages = Array.from({ length: 10 }, (_, i) => `/case-studies/landmaark/slider-${i + 1}.png`);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const customPreviews = (
    <div id="previews" className="w-full bg-white pt-10 pb-16 border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Platform Previews</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Explore the custom dashboard interfaces designed specifically for brokers and administrators.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-10">
        <div className="relative w-full overflow-hidden border border-gray-200/50 rounded-2xl bg-zinc-50/50 py-8 px-4 shadow-inner flex flex-col items-center">

          <div className="relative w-full h-[460px] md:h-[630px] flex justify-center items-center perspective-[1000px]">
            {sliderImages.map((src, idx) => {
              let offset = idx - currentImageIndex;
              if (offset < -Math.floor(sliderImages.length / 2)) offset += sliderImages.length;
              if (offset > Math.floor(sliderImages.length / 2)) offset -= sliderImages.length;

              const isVisible = Math.abs(offset) <= 2;

              return (
                <div
                  key={idx}
                  className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                  style={{
                    transform: `translateX(${offset * 65}%) scale(${1 - Math.abs(offset) * 0.15})`,
                    zIndex: 30 - Math.abs(offset),
                    opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <div className="w-[240px] md:w-[330px] h-[420px] md:h-[580px] rounded-xl overflow-hidden shadow-xl bg-white border border-gray-100 ring-1 ring-black/5">
                    <Image
                      src={src}
                      alt={`Landmaark Platform Preview ${idx + 1}`}
                      fill
                      className="object-contain"
                      unoptimized={true}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-zinc-100 text-blue-600 p-3 md:p-4 rounded-full shadow-lg transition-all z-40 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-zinc-100 text-blue-600 p-3 md:p-4 rounded-full shadow-lg transition-all z-40 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-2 z-10 flex-wrap px-4">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${currentImageIndex === idx ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400 w-2.5"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return <CaseStudyTemplate data={landmaarkData} customPreviews={customPreviews} />;
}
