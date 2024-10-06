import { motion } from "framer-motion";
import bg2 from "../assets/abstract/2.png";
import bg3 from "../assets/abstract/3.png";
import layer from "../assets/bg.png";

const floatVariantsBg2 = {
  initial: { y: 0, x: 0 },
  animate: {
    y: [0, -30, 0],
    x: [0, 15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatVariantsBg3 = {
  initial: { y: 0, x: 0 },
  animate: {
    y: [0, 25, 0],
    x: [0, -20, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Background = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden">
      <motion.img
        src={bg2}
        alt="bg2"
        className="w-[40rem] absolute -bottom-[4rem] left-[-15rem]"
        variants={floatVariantsBg2}
        initial="initial"
        animate="animate"
      />

      <motion.img
        src={bg3}
        alt="bg3"
        className="w-[40rem] absolute top-[4rem] right-[-15rem]"
        variants={floatVariantsBg3}
        initial="initial"
        animate="animate"
      />

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 3.5 }}
        src={layer}
        alt="layer"
        className="absolute w-full opacity-20 bottom-[0rem] left-[0rem] -z-10"
      />
    </div>
  );
};

export default Background;
