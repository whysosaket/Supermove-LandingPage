import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const OurWorkText = () => {
  const { multiplier, ispc } = useContext(GlobalContext);

  return (
    <div className="select-none">
      <h1
        style={{ fontSize: ispc && multiplier * 80 }}
        className="a text-[4rem] md:text-[5rem] font-outline-2 text-white/100 font-paytone"
      >
        our work
      </h1>
      <h1
        style={{
          fontSize: ispc && multiplier * 80,
          marginTop: ispc && -multiplier * 88,
        }}
        className="a text-[4rem] md:text-[5rem] -mt-[4.5rem] md:-mt-[5.5rem] font-outline-2 text-white/0 font-paytone"
      >
        our work
      </h1>
      <h1
        style={{
          fontSize: ispc && multiplier * 80,
          marginTop: ispc && -multiplier * 88,
        }}
        className="a text-[4rem] md:text-[5rem] -mt-[4.5rem] md:-mt-[5.5rem] font-outline-2 text-white/0 font-paytone"
      >
        our work
      </h1>
    </div>
  );
};

export default OurWorkText;
