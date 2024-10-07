import { motion } from "framer-motion";
import wall from "../../assets/wall3.jpg";
import layer from "../../assets/bg2.png";
import image from "../../assets/space/1_3D.png";
import AboutUsText from "./AboutUsText";

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

const About = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden px-8">
      <img 
          src={wall} 
          alt="wall" 
          className="absolute top-0 left-0 w-full h-full object-cover -z-20 brightness-[0.5] opacity-50" 
        />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 3.5 }}
        src={layer}
        alt="layer"
        className="absolute w-full opacity-30 -top-[2rem] left-[0rem] -z-10"
      />
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center justify-center w-1/2">
            <div className="flex w-full gap-4">
              <AboutUsText />
              <div className="border-b-2 border-white/100 w-64">
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="absolute top-0 right-8 font-paytone font-outline-2 text-white/0 text-9xl">01</h1>
            <motion.img
            variants={floatVariantsBg2}
            initial="initial"
            animate="animate"
            src={image} alt="image" className="w-5/6 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
