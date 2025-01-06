"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className={`relative z-10 flex h-auto w-full flex-col overflow-hidden ${
        theme === "dark"
          ? "bg-black"
          : "bg-gradient-to-r from-[#09afb9] to-[#fed9b8]"
      } pb-0 pt-[6rem] sm:flex-row sm:pb-[3rem] sm:pl-[3rem] lg:pl-[3rem]`}
    >
      {/* Description Section */}
      <div className="flex w-full flex-col items-center justify-center px-6 py-8 text-center sm:w-1/2 sm:items-start sm:px-10 sm:py-0 sm:text-left">
        <motion.h4
          className="mb-4 text-3xl font-semibold text-white sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to{" "}
          <span className="font-bold text-[#154043] dark:text-white">
            HR Physiotherapy
          </span>
        </motion.h4>
        <motion.p
          className="mb-6 text-lg leading-relaxed text-white dark:text-white sm:text-xl md:text-2xl lg:text-2xl lg:leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your trusted clinic for physiotherapy care. At HR Physiotherapy, we
          specialize in movement therapy, pain relief, and rehabilitation. Our
          personalized treatments help patients regain mobility and achieve
          their wellness goals.
        </motion.p>
        <motion.div
          className={`mb-6 inline-flex items-center gap-3 rounded-full ${
            theme === "dark"
              ? "bg-white text-[#154043bf] hover:text-white"
              : "bg-[#154043bf] text-white"
          } px-6 py-2 text-base font-semibold transition-all duration-300 hover:bg-[#1e6d7b] hover:shadow-[0_0_0_3px_rgba(255,255,255,0.9)] sm:text-lg`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span>Book Now</span>
          <FaArrowRight className="h-5 w-5" />
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="flex w-full flex-col items-center px-4 pt-4 sm:w-1/2 sm:px-10 sm:pt-0">
        {/* Display Doctor's Name and Qualification for mobile screens above the image */}
        <motion.div
          className="mt-4 block text-center sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-xl font-extrabold text-white">
            Dr. Abhishek Kumawat
          </h2>
          <span className="block text-lg text-white">(BPT, MPT (MSK))</span>
        </motion.div>

        <motion.img
          src="/images/dr_abhishek03.png"
          alt="Dr. Abhishek Kumawat"
          className="mt-4 h-auto w-[60%] max-w-[300px] object-contain sm:mb-0 sm:mt-6 sm:h-[calc(100%+5rem)] sm:w-[70%] sm:max-w-[400px] sm:object-cover lg:w-[60%]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        {/* Display Doctor's Name and Qualification for larger screens */}
        <motion.div
          className="mt-4 hidden text-center sm:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Dr. Abhishek Kumawat
          </h2>
          <span className="block text-lg text-white sm:text-xl">
            (BPT, MPT (MSK))
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
