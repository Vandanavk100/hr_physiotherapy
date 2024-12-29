"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import Font Awesome icons

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/3 lg:w-3/12 xl:w-4/12">
              <div className="mb-12 max-w-[300px] lg:mb-16">
                <div className="flex flex-col items-center lg:mb-16">
                  <Link href="/" className="inline-block">
                    <Image
                      src="/images/LOGO-3.png"
                      alt="logo"
                      className="w-full rounded-full bg-gray-dark dark:hidden"
                      width={120}
                      height={30}
                    />
                    <Image
                     src="/images/LOGO-3.png"
                      alt="logo"
                      className="hidden w-full dark:block"
                      width={120}
                      height={30}
                    />
                  </Link>
                  <p className="py-6 text-base leading-relaxed  dark:text-body-color-dark">
                    MOVEMENT IS MEDICINE
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-2/2 w-full px-4 sm:w-1/2 lg:w-3/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Services
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Sports Injury Rehabilitation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Neuro Rehabilitation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Pain Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Post-Surgery Recovery
                    </Link>
                  </li>{" "}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      139 M road near leher apartment Bhupalpura , Udaipur,
                      Rajasthan.
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Contact: 8107324399,
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="flex items-center justify-center py-4">
            <a
              href="https://www.instagram.com/hr_physiotherapy?igsh=MWoyYmoxM2Q5bnFjbQ=="
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/1Gz7sokkVV/?mibextid=LQQJ4d"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://wa.me/918107324399"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
