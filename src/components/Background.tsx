import { motion } from "framer-motion";
import bg2 from "../assets/abstract/2.webp";
import bg3 from "../assets/abstract/3.webp";
import layer from "../assets/bg.webp";
import wall from "../assets/wall3.jpg";
import wall2 from "../assets/giphy.webp";
import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";

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

  const {multiplier} = useContext(GlobalContext);

  return (
    <div className="absolute w-full h-screen overflow-y-visible overflow-x-hidden md:overflow-hidden">
        <img 
          src={wall} 
          alt="wall" 
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-[0.5] opacity-50" 
        />
        <img 
          src={wall2} 
          alt="wall2" 
          className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.5] opacity-30" 
        />
        <motion.img
          src={bg2}
          alt="bg2"
          className="a w-[40rem] absolute -bottom-[4rem] left-[-15rem] brightness-90"
          style={{scale: multiplier}}
          variants={floatVariantsBg2}
          initial="initial"
          animate="animate"
        />
        <motion.img
          src={bg3}
          alt="bg3"
          className="a w-[40rem] absolute top-[0rem] right-[-15rem] brightness-90"
          variants={floatVariantsBg3}
          style={{scale: multiplier}}
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
    </div>
  );
};

export default Background;
