import { motion } from "framer-motion";

const FadeUpWrapper = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.3,
        type: "spring",
      }}
      viewport={{ once: true }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeUpWrapper;
