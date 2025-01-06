"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph } = blog;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
      }}
      className="group relative my-2 max-h-[450px] overflow-hidden rounded-sm bg-white shadow-md dark:bg-gray-800"
    >
      <Link
        href="/blog-details"
        className="relative block aspect-[37/22] w-full transition-transform duration-300 group-hover:scale-105"
      >
        <Image src={image} alt="Blog Image" fill className="object-cover" />
      </Link>
      <div className="flex h-full flex-col p-4 sm:p-6 md:px-4 md:py-6 lg:p-6 xl:px-4 xl:py-6 2xl:p-6">
        <h4>
          <Link
            href="/blog-details"
            className="text-md hover:text-blue-500 dark:hover:text-blue-400 mb-4 block font-bold text-black dark:text-white sm:text-xl"
          >
            {title}
          </Link>
        </h4>
        <p className="flex-grow pb-6 text-base font-medium text-gray-600 dark:border-gray-700 dark:text-gray-400">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleBlog;
