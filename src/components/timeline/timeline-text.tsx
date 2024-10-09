import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const TimelineText = () => {
  const {multiplier, ispc} = useContext(GlobalContext);
  return (
    <div className="select-none mx-auto">
        <h1
        style={{fontSize: ispc&&multiplier*144}}
        className="a text-[4.5rem] md:text-[9rem] font-outline-2 text-white/100 font-paytone">
            timeline
        </h1>
        <h1
        style={{fontSize: ispc&&multiplier*144, marginTop: ispc&&-multiplier*152}}
        className="a text-[4.5rem] md:text-[9rem] -mt-[5rem] md:-mt-[9.5rem] font-outline-2 text-white/0 font-paytone">
            timeline
        </h1>
        <h1
        style={{fontSize: ispc&&multiplier*144, marginTop: ispc&&-multiplier*152}}
        className="a text-[4.5rem] md:text-[9rem] -mt-[5rem] md:-mt-[9.5rem] font-outline-2 text-white/0 font-paytone">
            timeline
        </h1>
    </div>
  )
}

export default TimelineText