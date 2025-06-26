import Image from "next/image";
import Navbar from "@/components/header-navigation";
import HeroSection from "@/components/herosection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection></HeroSection>
    </>
  );
}
