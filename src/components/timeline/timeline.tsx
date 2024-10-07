import TimelineText from "./timeline-text";
import wall from "../../assets/wall3.jpg"
import TimelineImage from "../../assets/timeline.webp";
import layer from "../../assets/bg2.png"
import { useScroll, motion, useTransform } from "framer-motion";

const Timeline = () => {
    const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.5  , 1], ["100vw", "-30vw"]);
  return (
    <div className="absolute top-[300vh] w-full h-screen overflow-hidden px-12">
        <img
        src={wall}
        alt="wall"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 brightness-[0.5] opacity-50"
      />

<div className="w-full overflow-hidden select-none">
        <motion.h1
          className="absolute top-10 text-[25rem] -z-50 font-outline text-white opacity-10 font-paytone whitespace-nowrap"
          style={{ x }}
        >
          timeline
        </motion.h1>
      </div>

<motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 3.5 }}
        src={layer}
        alt="layer"
        className="absolute w-full -top-[2rem] left-[0rem] -z-10 opacity-30"
      />
        <div className="w-screen h-screen flex justify-start" >
            <div className="flex flex-col h-screen justify-start">
                <div className="flex w-full h-screen gap-4 -rotate-90 justify-center">
                    <TimelineText />
                </div>
            </div>
            <div className="flex justify-center -ml-96">
                <div className="w-5/6 flex justify-center">
                    <img src={TimelineImage} alt="timeline" className="w-full my-auto rounded-2xl shadow-2xl" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline