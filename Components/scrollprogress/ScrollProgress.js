import { motion, useScroll } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 glow origin-[0%] bg-white z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
// import { motion, useScroll, useSpring } from "framer-motion";

// export default function App() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <>
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 origin-[0%] bg-white z-50"
//         style={{ scaleX }}
//       />
//     </>
//   );
// }
