import { motion, AnimatePresence } from "framer-motion";
import CTA from "./shared/cta";
const Intro = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -100 }}
      transition={{ duration: 0.4, delay: 3.5 }}
      className="z-[100] select-none"
    >
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="flex flex-col justify-center items-center h-screen"
      >
        {/* Top supermove text */}
        <motion.h1
          layout
          initial={{ opacity: 0, y: 100, scale: 7.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[4rem] md:text-[8rem] font-outline-2 font-paytone"
        >
          supermove
        </motion.h1>
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="text-[4rem] md:text-[8rem] -mt-[4.5rem] md:-mt-[8.5rem] font-outline-2 text-white/0 font-paytone"
          >
            supermove
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
            className="text-[4rem] md:text-[8rem] -mt-[4.5rem] md:-mt-[8.5rem] font-outline-2 text-white/0 font-paytone"
          >
            supermove
          </motion.h1>
        </AnimatePresence>
      </motion.div>
      <div className="flex justify-center items-center">
        <CTA />
      </div>
    </motion.div>
  );
};

export default Intro;
