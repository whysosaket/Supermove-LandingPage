import halflogo from "../../assets/logo.svg";
import aptoslogo from "../../assets/aptos-half-logo.svg";
import Socials from "../about/socials";

const FooterItem = () => {
  return (
    <div className="absolute bottom-0 text-white text-7xl w-full z-50 px-10">
        <div className="bg-black/20 p-8 backdrop-blur-2xl rounded-tr-[6rem] rounded-tl-[6rem] w-full h-full flex justify-center items-center">
            <div className="w-1/3 flex justify-start items-center align-middle gap-6">
                <img src={halflogo} alt="halflogo" className="w-32" />
                <span className="text-xl my-auto">x</span>
                <img src={aptoslogo} alt="aptoslogo" className="w-12" />
            </div>
            <div className="my-auto">
                <p className="text-center text-sm font-light">
                    Spheron, 2024 © All rights reserved.
                </p>
            </div>
            <div className="w-1/3 my-auto flex justify-end items-center align-middle">
                <div className="my-auto mt-6">
                <Socials />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterItem