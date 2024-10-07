import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Socials = () => {
  return (
    <div className="flex z-50 gap-6 -mt-8">
        <button className="px-2 py-2 z-50 cursor-pointer hover:bg-[#565656]  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        <RiTwitterXLine size={20} />
      </button>
      <button className="px-2 py-2 z-50 cursor-pointer hover:bg-[#565656]  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        <FaFacebookF size={20} />
      </button>
      <button className="px-2 py-2 z-50 cursor-pointer hover:bg-[#565656]  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        <FaGithub size={20} />
      </button> 
      <button className="px-2 py-2 z-50 cursor-pointer hover:bg-[#565656]  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        <IoLogoInstagram size={20} />
        </button>
    </div>
  )
}

export default Socials