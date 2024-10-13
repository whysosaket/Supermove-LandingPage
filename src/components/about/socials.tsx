import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { MdOutlineAlternateEmail } from "react-icons/md";


const Socials = () => {
  const {multiplier, ispc} = useContext(GlobalContext);
  return (
    <div
    style={{marginTop: ispc&&-multiplier*80}}
    className="flex z-50 gap-6 -mt-20 mx-auto">
        <a href="https://x.com/SpheronFDN" target="_blank" className="px-2 py-2 z-50 cursor-pointer hover:bg-[#565656]  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        <RiTwitterXLine size={20} />
      </a>
      <a href="https://www.linkedin.com/company/spheron/" target="_blank" className="px-2 py-2 z-50 cursor-pointer hover:bg-[#565656]  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        <FaLinkedinIn size={20} />
      </a>
      <a href="https://github.com/spheronFdn" target="_blank" className="px-2 py-2 z-50 cursor-pointer hover:bg-[#565656]  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        <FaGithub size={20} />
      </a> 
      <a href="mailto:info@spheron.network" target="_blank" className="px-2 py-2 z-50 cursor-pointer hover:bg-[#565656]  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
      <MdOutlineAlternateEmail size={20} />
        </a>
    </div>
  )
}

export default Socials