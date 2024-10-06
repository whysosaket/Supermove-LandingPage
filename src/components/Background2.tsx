import { motion } from "framer-motion";
import bg2 from "../assets/shapes/1.png";
import bg3 from "../assets/shapes/2.png";
import layer from "../assets/bg2.png";
import { Vortex } from "./ui/vortex";
import Monkey from "./shared/Monkey";

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

const Background2 = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={50}
        baseHue={220}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
      <motion.img
        src={bg2}
        alt="bg2"
        className="w-[40rem] absolute -top-[4rem] left-[-15rem] brightness-50"
        variants={floatVariantsBg2}
        initial="initial"
        animate="animate"
      />

      <motion.img
        src={bg3}
        alt="bg3"
        className="w-[40rem] opacity-100 absolute bottom-[0rem] right-[-20rem] brightness-50"
        variants={floatVariantsBg3}
        initial="initial"
        animate="animate"
      />

      <Monkey />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 3.5 }}
        src={layer}
        alt="layer"
        className="absolute -180 w-full opacity-20 -top-[2rem] left-[0rem] -z-10"
      />
      </Vortex>
    </div>
  );
};

export default Background2;
