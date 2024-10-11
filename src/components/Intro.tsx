import { motion } from "framer-motion";
import CTA from "./shared/cta";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
const Intro = () => {
  const { multiplier, ispc } = useContext(GlobalContext);
  return (
    <motion.div initial={{ y: -100 }} className="z-[100] select-none overflow-y-hidden">
      <div className="flex flex-col justify-center items-center h-screen overflow-y-hidden">
        {/* Top supermove text */}
        <h1
          className="a aa text-[4.2rem] font-outline-2 font-paytone"
          style={{ fontSize: ispc && multiplier * 128 }}
        >
          supermove
        </h1>
        <h1
          className="a aa text-[4.2rem] -mt-[4.5rem] md:-mt-[8.5rem] font-outline-2 text-white/0 font-paytone"
          style={{
            fontSize: ispc && multiplier * 128,
            marginTop: ispc && -multiplier * 128 - 8,
          }}
        >
          supermove
        </h1>

        <h1
          className="a aa text-[4.2rem] -mt-[4.5rem] md:-mt-[8.5rem] font-outline-2 text-white/0 font-paytone"
          style={{
            fontSize: ispc && multiplier * 128,
            marginTop: ispc && -multiplier * 128 - 8,
          }}
        >
          supermove
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <CTA />
      </div>
    </motion.div>
  );
};

export default Intro;
