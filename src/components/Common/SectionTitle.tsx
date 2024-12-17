import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "50px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when it enters view
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={titleVariants}
    >
      <motion.h2
        className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      <p className="text-base !leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
