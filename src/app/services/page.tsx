import SingleBlog from "@/components/Services/SingleBlog";
import blogData from "@/components/Services/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | HR Physiotherapy",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Services = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="We provide personalized physiotherapy to help you recover, reduce pain, and improve mobility."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
