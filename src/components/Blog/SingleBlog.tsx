"use client"
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph } = blog;
  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-md duration-300 hover:shadow-lg dark:bg-gray-800">
      <Link
        href="/blog-details"
        className="relative block aspect-[37/22] w-full transition-transform duration-300 group-hover:scale-105"
      >
        <Image
          src={image}
          alt="Blog Image"
          fill
          className="object-cover"
        />
      </Link>
      <div className="p-4 sm:p-6 md:px-4 md:py-6 lg:p-6 xl:px-4 xl:py-6 2xl:p-6">
        <h4>
          <Link
            href="/blog-details"
            className="mb-4 block text-md font-bold text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400 sm:text-xl"
          >
            {title}
          </Link>
        </h4>
        <p className=" pb-6 text-base font-medium text-gray-600 dark:border-gray-700 dark:text-gray-400">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;

