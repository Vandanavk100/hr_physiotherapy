import FAQ from "@/components/About/faq";
import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Physiotherapy",
  description: " We Provides expert physiotherapy to help reduce pain, improve movement, and support recovery to our Patients",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Services />
      <Video />
      <FAQ />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
