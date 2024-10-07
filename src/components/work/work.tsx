import { useScroll, motion, useTransform } from "framer-motion";
import wall from "../../assets/wall3.jpg";
import layer from "../../assets/bg3.png";
import image from "../../assets/space/2_3D.png";
import { ExpandableCardDemo } from "./expandable-card";
import OurWorkText from "./our-work-text";

const floatVariantsBg2 = {
  initial: { y: 0, x: 0 },
  animate: {
    y: [0, -10, 0],
    x: [0, -15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Work = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.66, 1.5], ["-60vw", "0vw"]);
  return (
    <div className="absolute top-[200vh] w-full h-screen overflow-hidden px-8">
      <img
        src={wall}
        alt="wall"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 brightness-[0.5] opacity-50"
      />
      <div className="w-full overflow-hidden select-none">
        <motion.h1
          className="absolute -bottom-10 text-[25rem] font-outline text-white opacity-10 font-paytone whitespace-nowrap"
          style={{ x }}
        >
          our work
        </motion.h1>
      </div>
      <img
        src={layer}
        alt="layer"
        className="absolute w-full -top-[2rem] left-[0rem] -z-10 opacity-10"
      />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-2/5 h-full">
          <h1 className="absolute top-0 left-8 font-paytone font-outline-2 text-white/0 text-9xl">
            0.2
          </h1>
          <motion.img
            variants={floatVariantsBg2}
            initial="initial"
            animate="animate"
            src={image}
            alt="image"
            className="w-full mx-auto mt-40"
          />
        </div>
        <div className="w-3/5 flex flex-col z-50">
          <div className="flex w-full justify-center gap-4 -mt-32">
            <div className="border-b-2 border-white/100 w-64"></div>
            <OurWorkText />
          </div>
          <ExpandableCardDemo />
        </div>
      </div>
    </div>
  );
};

export default Work;
