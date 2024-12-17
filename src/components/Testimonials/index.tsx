"use client"
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
    video: "/videos/video.mp4",
  },
];

const Testimonials = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoPlay = (id: number) => {
    setIsVideoPlaying(true);
    const videoElement = document.getElementById(`video-${id}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
      videoElement.onended = () => {
        if (isVideoPlaying) setIsVideoPlaying(false);
      };
    }
  };

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Users Say"
          paragraph="Our new clinic is getting great feedback, and we're excited to share the reviews. Stay tuned for more!"
          center
        />
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="testimonial-swiper"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center items-center">
              <div className="testimonial-card flex flex-col justify-center items-center max-w-md mx-auto dark:bg-gray-dark bg-white rounded-lg shadow-lg overflow-hidden relative">
                <div className="testimonial-content p-2 flex flex-col justify-center items-center text-center">
                  <div className="testimonial-video relative w-full h-56 overflow-hidden rounded-lg flex justify-center items-center">
                    <video
                      id={`video-${testimonial.id}`}
                      className="w-full h-full object-cover cursor-pointer"
                      src={testimonial.video}
                      muted
                      onClick={() => handleVideoPlay(testimonial.id)}
                      controls={false}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
