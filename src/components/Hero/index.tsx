"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className={`relative z-10 flex h-auto w-full flex-col overflow-hidden ${
        theme === "dark"
          ? "bg-black"
          : "bg-gradient-to-r from-[#09afb9] to-[#fed9b8]"
      } sm:flex-row sm:pl-[3rem] lg:pl-[3rem] pt-[6rem] pb-[3rem]`}
    >
      {/* Description Section */}
      <div className="flex w-full flex-col items-center justify-center px-6 py-8 text-center sm:w-1/2 sm:items-start sm:px-10 sm:py-0 sm:text-left">
        <h4 className="mb-4 text-3xl font-semibold text-white sm:text-3xl lg:text-4xl">
          Welcome to{" "}
          <span className="font-bold text-[#154043] dark:text-white">
            HR Physiotherapy
          </span>
        </h4>
        <p className="mb-6 text-lg leading-relaxed text-white dark:text-white sm:text-xl md:text-2xl lg:text-2xl lg:leading-relaxed">
          Your trusted clinic for physiotherapy care. At HR Physiotherapy, we
          specialize in movement therapy, pain relief, and rehabilitation. Our
          personalized treatments help patients regain mobility and achieve
          their wellness goals.
        </p>
        <Link
          href="#contact"
          className={`mb-6 inline-flex items-center gap-3 rounded-full ${
            theme === "dark"
              ? "bg-white text-[#154043bf] hover:text-white"
              : "bg-[#154043bf] text-white"
          } px-6 py-2 text-base font-semibold transition-all duration-300 hover:bg-[#1e6d7b] hover:shadow-[0_0_0_3px_rgba(255,255,255,0.9)] sm:text-lg`}
        >
          <span>Book Now</span>
          <FaArrowRight className="h-5 w-5" />
        </Link>
        {/* Display Doctor's Name and Qualification for larger screens */}
        <div className="hidden sm:block">
          <h2 className="text-center text-xl font-extrabold text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Dr. Abhishek Kumawat
          </h2>
          <span className="block text-center text-lg text-white sm:text-xl">
            (BPT, MPT (MSK))
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex w-full flex-col items-center px-4 pt-4 sm:w-1/2 sm:px-10 sm:pt-0">
        <img
          src="/images/dr_abhishek03.png"
          alt="Dr. Abhishek Kumawat"
          className="h-auto w-[60%] max-w-[300px] sm:w-[70%] lg:w-[60%]"
        />
        {/* Display Doctor's Name and Qualification for smaller screens */}
        <div className="block sm:hidden mt-4 text-center">
          <h2 className="text-xl font-extrabold text-white">
            Dr. Abhishek Kumawat
          </h2>
          <span className="block text-lg text-white">(BPT, MPT (MSK))</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
