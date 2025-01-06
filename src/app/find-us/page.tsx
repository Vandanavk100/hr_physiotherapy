import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | HR Physiotherapy",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const FindUs = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Location"
        description="Click on the map to quickly view our location. Easily access directions and find us with just one click."
      />

      <section className="pb-[50px] pt-[50px]">
        <div className="container">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="mb-10 overflow-hidden rounded-sm shadow-2xl"
              data-wow-delay=".15s"
            >
              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-primary">Visit Us</h3>
                <p className="mt-2 text-sm text-body-color">
                  Our clinic is located in 139 M road near leher apartment
                  Bhupalpura , Udaipur, Rajasthan.
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d29021.4337795906!2d73.67901287965374!3d24.60026434837341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d24.606866999999998!2d73.697814!4m5!1s0x3967e5f5e76496a9%3A0x12b8d82e878521e9!2s139%2C%20M%20road%2C%20near%20bansi%20pan%2C%20Bhupalpura%2C%20Udaipur%2C%20Rajasthan%20313001!3m2!1d24.592234899999998!2d73.6997094!5e0!3m2!1sen!2sin!4v1735533408086!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindUs;
