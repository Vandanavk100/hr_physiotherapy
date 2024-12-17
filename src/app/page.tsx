import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Banner from "@/components/Banner/Banner";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Physiotherapy",
  description: " We Provides expert physiotherapy to help reduce pain, improve movement, and support recovery to our Patients",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Banner />
      <Blog />
      <Video />
      <AboutSectionTwo />
      <Testimonials />
      <Contact />
    </>
  );
}
