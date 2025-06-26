import React from "react";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="hero-section bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to MusicNextJs
      </h1>
      <p className="text-lg md:text-2xl mb-8">
        Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.
      </p>
      

      <Link
        href={"/about-us"}
        className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition"
      >
        Explore Now
      </Link>
    </section>
  );
}


