"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  const title = "text-lg font-bold text-black dark:text-white sm:text-lg lg:text-lg xl:text-lg";
  const description = "text-sm font-medium leading-relaxed text-body-color sm:text-sm sm:leading-relaxed";

  const faqs = [
    {
      question: "Where is your clinic located?",
      answer: "Our clinic is located in 139 M road near leher apartment Bhupalpura, Udaipur, Rajasthan.",
    },
    {
      question: "What are your clinic working hours?",
      answer: "We are open every day from 8 AM to 12 PM and 4 PM to 8 PM, except on Sundays.",
    },
    {
      question: "Do I need an appointment to visit the clinic?",
      answer: "While appointments are preferred, we accept walk-ins during working hours as well.",
    },
    {
      question: "Is there any ongoing offer at your clinic?",
      answer: "Yes! Currently, we are offering free consultancy for a limited time.",
    },
    {
      question: "Do you provide home physiotherapy services?",
      answer: "Yes, we offer home physiotherapy services for patients who are unable to visit the clinic.",
    },
    {
      question: "Can I book a physiotherapy session online?",
      answer: "Yes, you can easily book your session through our website or by calling us.",
    },
    {
      question: "What types of physiotherapy treatments do you offer?",
      answer: "We offer a wide range of physiotherapy treatments, including sports injury rehabilitation, neuro rehabilitation, pain management, post-surgery recovery, and more.",
    },
    {
      question: "How do I know if physiotherapy is right for me?",
      answer: "Our physiotherapists offer free consultations to assess your condition and recommend the best treatment options.",
    },
    {
      question: "Is physiotherapy covered by insurance?",
      answer: "Many insurance plans cover physiotherapy treatments. You can check with your insurance provider to confirm coverage details.",
    },
    {
      question: "What should I bring to my first physiotherapy appointment?",
      answer: "Please bring any relevant medical documents, a list of current medications, and comfortable clothing for easy movement.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="FAQ's" paragraph="" center />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-2/6 px-4 lg:w-2/6 hidden md:block">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/faq.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none !h-auto"
              />
              <Image
                src="/images/faq.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none !h-auto"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-4/6">
            <div className="max-w-[470px]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="faq-slider"
              >
                {faqs.map((faq, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <h3 className={`${title}`}>{faq.question}</h3>
                      <p className={`${description}`}>{faq.answer}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
