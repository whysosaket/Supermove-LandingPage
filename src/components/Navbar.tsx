import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 bg-gray-800/5 backdrop-blur-lg  p-4">
        <img src={Logo} alt="logo" className="w-24" />
        <div className="flex items-center gap-6 font-semibold">
            <h1>Spheron Network</h1>
            <h1>Aptos</h1>
            <h1>Supermove Tour</h1>
        </div>
        <div>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 py-2 rounded-[8rem]">Join Us</button>
        </div>

    </div>
  )
}

export default Navbar