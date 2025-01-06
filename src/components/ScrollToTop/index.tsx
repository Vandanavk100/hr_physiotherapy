import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div className="flex flex-col items-end justify-center gap-3">
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="flex mr-2 h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-gray-dark text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp dark:bg-white"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white dark:border-black"></span>
          </div>
          <a
            href="https://wa.me/918107324399"
            className="group relative flex w-auto items-center justify-center gap-1 rounded-full bg-[#28824e] p-3 px-4 text-white transition-all duration-300 hover:opacity-70 hover:shadow-lg"
            aria-label="Contact us on WhatsApp"
          >
            <p>Contact Us</p>
            <div className="mx-2 h-4 w-px bg-white" />{" "}
            <FaWhatsapp className="text-xl" />
          </a>
        </div>
      )}
    </div>
  );
}
