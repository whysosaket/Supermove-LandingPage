import { useContext } from "react";
import monkey from "../../assets/file.webp";
import GlobalContext from "../../context/GlobalContext";

const Monkey = () => {
  const {multiplier, ispc} = useContext(GlobalContext);
  return (
    <div className="flex flex-col justify-center items-center h-96 md:h-screen">
        <img src={monkey}
        alt="Monkey" className="a md:h-[50rem] absolute brightness-[0.9]" />
        <img
        src={monkey} alt="Monkey" className="a md:h-[50rem] scale-[1.1] -z-20 opacity-50 blur-xl absolute" />
        <h1
        style={{fontSize: ispc&&multiplier*240}}
        className="a text-[5rem] -z-10 font-outline-2 font-paytone">supermove</h1>
        <h1 
        style={{fontSize: ispc&&multiplier*240, marginTop: ispc&&-multiplier*360}}
        className="a text-[5rem] md:text-[15rem] -mt-[7.5rem] z-10 font-outline-2 text-white/0 font-paytone">supermove</h1>
    </div>
  )
}

export default Monkey