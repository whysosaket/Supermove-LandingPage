import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const link = "https://sphn.notion.site/Spheron-SuperMove-Tour-a0a840cc31e3437b81394281005d6f7b?pvs=4";

const CTA = () => {
  const {multiplier, ispc} = useContext(GlobalContext);
  return (
    <div
    style={{marginTop: ispc&&-multiplier*260}}
    className="a -mt-96 md:-mt-80 flex flex-col gap-4 items-center justify-center">
    <div
    style={{paddingLeft: ispc&&multiplier*384, paddingRight: ispc&&multiplier*384}}
    className="md:px-96 flex flex-col gap-4 items-center justify-center">
        <p className="a text-center text-4xl font-semibold"
        style={{fontSize: ispc&&multiplier*36}}
        >Join the Spheron SuperMove Tour</p>
        <p className="text-center a"
        style={{fontSize: ispc&&multiplier*16}}
        >Spheron SuperMove Tour is a 6 month long developer adoption campaign being lead by Spheron and Aptos.</p>
    </div>
    <div className="flex gap-8 font-paytone">
      <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="px-8 py-2 z-50  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        JOIN US
      </a>

      <a
      href="#work"
      className="px-8 py-2 z-50 border-2 border-black uppercase bg-[#565656] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        LEARN MORE
      </a>
      
    </div>
    </div>
  );
};

export default CTA;
