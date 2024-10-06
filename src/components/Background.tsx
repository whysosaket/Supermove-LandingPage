import bg2 from "../assets/abstract/2.png";
import bg3 from "../assets/abstract/3.png";
import layer from "../assets/bg.png";

const Background = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden">
        <img src={bg2} alt="bg2" className="w-[40rem] absolute bottom-[0rem] left-[-15rem]" />
        <img src={bg3} alt="bg3" className="w-[40rem] absolute top-[0rem] right-[-15rem]" />
        <img src={layer} alt="layer" className="absolute w-full opacity-20 bottom-[0rem] left-[0rem] -z-10" />
    </div>
  )
}

export default Background