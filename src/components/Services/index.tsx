"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";

const Services = () => {
  const blogRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver to add "visible" class when blog card enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      },
    );

    blogRefs.current.forEach((blogRef) => {
      if (blogRef) {
        observer.observe(blogRef);
      }
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <section
      id="Services"
      className="bg-gray-100 py-16 dark:bg-gray-900 md:py-20 lg:py-28"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Services"
          paragraph="We provide personalized physiotherapy to help you recover, reduce pain, and improve mobility."
          center
        />

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="blog-slider"
        >
          {blogData.map((blog, index) => (
            <SwiperSlide key={blog.id}>
              <div
                ref={(el) => (blogRefs.current[index] = el)}
                className="blog-card border-b-2 border-solid bg-gradient-to-r from-[#09afb9] to-[#fed9b8]" // Gradient bottom border
              >
                <SingleBlog blog={blog} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
