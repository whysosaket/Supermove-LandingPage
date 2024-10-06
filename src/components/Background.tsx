import { motion } from "framer-motion";
import bg2 from "../assets/abstract/2.png";
import bg3 from "../assets/abstract/3.png";
import layer from "../assets/bg.png";
import wall from "../assets/wall.jpg";
import { Vortex } from "./ui/vortex";

const floatVariantsBg2 = {
  initial: { y: 0, x: 0 },
  animate: {
    y: [0, -30, 0],
    x: [0, 15, 0],
    transition: {
      duration: 6,
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
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Background = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={50}
        baseHue={20}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full relative z-0"
      >
        <img 
          src={wall} 
          alt="wall" 
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-[0.5] opacity-20" 
        />
        <motion.img
          src={bg2}
          alt="bg2"
          className="w-[40rem] absolute -bottom-[4rem] left-[-15rem] brightness-90"
          variants={floatVariantsBg2}
          initial="initial"
          animate="animate"
        />
        <motion.img
          src={bg3}
          alt="bg3"
          className="w-[40rem] absolute top-[0rem] right-[-15rem] brightness-90"
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
          className="absolute w-full opacity-20 bottom-[0rem] left-[0rem] -z-5"
        />
      </Vortex>
    </div>
  );
};

export default Background;