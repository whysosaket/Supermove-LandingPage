import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="absolute px-8 top-0 flex justify-between z-10 items-center w-full h-16 bg-gray-800/5 backdrop-blur-[2px]  p-4">
      <img src={Logo} alt="logo" className="w-24" />
      <div className="hidden md:flex items-center gap-6 font-semibold">
        <h1>Spheron Network</h1>
        <h1>Aptos</h1>
        <h1>SuperMove Tour</h1>
      </div>
      <div>
        <button className="font-paytone px-8 py-2 z-50  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
          JOIN US
        </button>
      </div>
    </div>
  );
};

export default Navbar;
