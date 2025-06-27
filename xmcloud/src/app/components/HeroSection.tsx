import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[400px]">
      {/* Left: Background image with overlay and text */}
      <div className="relative flex-1 flex items-center justify-center min-h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/DA/hero-banner-img.png')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-8 md:p-16">
          <div className="mb-6">
            <h2 className="text-white text-xl font-bold mb-1">Simple Loans <span className="text-red-500">&#8226;</span></h2>
            <h2 className="text-white text-xl font-bold">Better Service <span className="text-red-500">&#8226;</span></h2>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-8 leading-tight max-w-xl">
            Apply for a personal loan of up to <span className="text-[#ff4b5c]">R300 000</span>
          </h1>
          <div className="flex flex-col gap-2 max-w-xs">
            <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded mb-2 text-center transition">APPLY ONLINE TODAY</a>
            <a href="#" className="text-white underline text-center">RESUME APPLICATION</a>
          </div>
        </div>
      </div>
      {/* Right: Info cards */}
      <div className="flex flex-col flex-shrink-0 w-full md:w-[420px]">
        <div className="flex-1 bg-[#17695b] p-8 flex flex-col justify-center min-h-[200px]">
          <h3 className="text-white text-2xl font-bold mb-2">PULSE</h3>
          <p className="text-white text-lg mb-6">Boost Your Financial Confidence with a Free Credit Rating</p>
          <a href="#" className="text-white text-right font-semibold flex items-center gap-2 hover:underline">Login to view <span>&rarr;</span></a>
        </div>
        <div className="flex-1 bg-[#20544a] p-8 flex flex-col justify-center min-h-[200px]">
          <h3 className="text-white text-2xl font-bold mb-2">CONSOLIDATION</h3>
          <p className="text-white text-lg mb-6">Simplify your finances with a consolidation loan.</p>
          <a href="#" className="text-white text-right font-semibold flex items-center gap-2 hover:underline">Apply online <span>&rarr;</span></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
