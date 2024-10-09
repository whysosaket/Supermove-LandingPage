import wall from "../../assets/wall3.jpg";
import layer from "../../assets/bg2.png";
import image from "../../assets/space/1_3D.png";
import AboutUsText from "./AboutUsText";
import { TabsDemo } from "./about-tabs";

import { motion, useScroll, useTransform } from "framer-motion";
import Socials from "./socials";

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

const About = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.8], ["100vw", "0vw"]);

  return (
    <div className="absolute w-full h-screen overflow-hidden px-8">
      <img
        src={wall}
        alt="wall"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 brightness-[0.5] opacity-50"
      />
      <div className="w-full overflow-hidden select-none">
        <motion.h1
          className="absolute -bottom-20 text-[15rem] md:text-[25rem] font-outline text-white opacity-10 font-paytone whitespace-nowrap"
          style={{ x }}
        >
          about us
        </motion.h1>
      </div>

      <img
        src={layer}
        alt="layer"
        className="absolute w-full -top-[2rem] left-[0rem] -z-10 opacity-10"
      />

      <div>
        <div className="md:flex justify-center items-center h-screen">
          <div className="flex flex-col justify-center md:w-1/2">
            <div className="flex w-full gap-4">
              <div className="mx-auto mt-8">
                <AboutUsText />
              </div>
              <div className="hidden md:block border-b-2 border-white/100 w-64"></div>
            </div>
            <TabsDemo />
            <div className="w-full flex md:block justify-center items-center">
              <Socials />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="absolute top-4 md:top-0 right-8 font-paytone font-outline-2 text-white/0 text-5xl md:text-9xl">
              0.1
            </h1>
            <motion.img
              variants={floatVariantsBg2}
              initial="initial"
              animate="animate"
              src={image}
              alt="image"
              className="w-5/6 mx-auto -mt-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
