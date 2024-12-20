"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../Common/SectionTitle";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const formUrl =
    "https://script.google.com/macros/s/AKfycbzvyJOooH8omXED5M-80t6H2a6v9oWh8Nti6buLZmr5F4AG5wlRSTLYEUA_BJZmNQe2/exec";

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const response = await fetch(formUrl, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      if (response.ok) {
        toast.success("Enquiry Added Successfully", {
          position: "bottom-left",
        });
      } else {
        toast.error("Failed to submit the form. Please try again later.", {
          position: "bottom-left",
        });
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", {
        position: "bottom-left",
      });
    }
  };

  return (
    <section id="contact" className="py-2 md:py-2 lg:py-2">
      <div className="container mx-auto px-4">
        <SectionTitle title="Book Appointment" paragraph="" center />
        <div className="-mx-4 flex flex-wrap">
          {/* Left Side: Map */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="mb-10 overflow-hidden rounded-sm shadow-three"
              data-wow-delay=".15s"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.916182839888!2d73.6994854!3d24.592088699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e52d6b46b5cf%3A0xcb4800078943036a!2sHR%20Physiotherapy!5e0!3m2!1sen!2sin!4v1734083988044!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-primary">Visit Us</h3>
                <p className="mt-2 text-sm text-body-color">
                  Your clinic address goes here. Our clinic is located in 139 M road near leher apartment Bhupalpura , Udaipur, Rajasthan.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="rounded-sm bg-white px-4 py-4 shadow-three dark:bg-gray-dark"
              data-wow-delay=".15s"
            >
              <p className="mb-8 text-base font-medium text-body-color">
                Our support team will get back to you ASAP.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters long",
                      },
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Name should only contain letters and spaces",
                      },
                    })}
                    type="text"
                    placeholder="Enter your name"
                    className={`w-full rounded-sm border bg-[#f8f8f8] p-2 text-base text-body-color focus:outline-primary dark:bg-[#2C303B] ${errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full rounded-sm border bg-[#f8f8f8] p-2 text-base text-body-color focus:outline-primary dark:bg-[#2C303B] ${errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Number Field */}
                <div className="mb-6">
                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Phone Number
                  </label>
                  <input
                    {...register("mobile", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be exactly 10 digits long",
                      },
                    })}
                    type="text"
                    placeholder="Enter your phone number"
                    className={`w-full rounded-sm border bg-[#f8f8f8] p-2 text-base text-body-color focus:outline-primary dark:bg-[#2C303B] ${errors.mobile ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 mt-1 text-sm">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows={3}
                    placeholder="Enter your message"
                    className={`w-full resize-none rounded-sm border bg-[#f8f8f8] px-4 py-3 text-base text-body-color focus:outline-primary dark:bg-[#2C303B] ${errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 mt-1 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 focus:outline-none"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
