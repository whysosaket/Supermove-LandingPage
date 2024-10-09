import { motion } from "framer-motion";
import bg2 from "../../assets/abstract/1.png";
import bg3 from "../../assets/abstract/2.png";
import layer from "../../assets/bg2.png";
import Monkey from "../shared/Monkey";
import wall from "../../assets/wall3.jpg";
import FooterItem from "./footer-item";

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

const Footer = () => {
  return (
    <div className="absolute top-[400vh] w-full h-96 md:h-screen overflow-visible md:overflow-hidden">
         <div className="flex z-10">
        <FooterItem />
      </div>
      <img
        src={wall}
        alt="wall"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 brightness-[0.5] opacity-50"
      />

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

    </div>
  );
};

export default Footer;
