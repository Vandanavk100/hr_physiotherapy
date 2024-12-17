import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 flex h-screen w-full overflow-hidden"
      >
        <div className="flex w-1/2 items-center">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center text-body-color dark:text-body-color-dark">
                <p className="mb-12 text-base !leading-relaxed  sm:text-lg md:text-xl">
                  We Provides expert physiotherapy to help reduce pain, improve
                  movement, and support recovery to our Patients. For more
                  information inquire today!
                </p>
                <div className="flex  flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <h4>MOVEMENT IS MEDICINE</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          {/* <img
            src="/images/abhishek.jpeg"
            alt=""
            className="h-[95%] w-[80%] rounded-bl-full rounded-br-none rounded-tl-full rounded-tr-none"
          /> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
