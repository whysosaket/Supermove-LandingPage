import Background from "./components/Background"
import Navbar from "./components/Navbar"
import logo from "./assets/half-logo.svg";
import aptos from "./assets/aptos-half-logo.svg";

function App() {

  return (
    <div className="text-white">
      <Navbar />
      <Background />
      <div className="flex justify-center items-center h-screen">
        <img src={logo} alt="logo" className="w-44" />
      </div>

      <div className="flex justify-center items-center h-screen">
        <img src={aptos} alt="aptos" className="w-44" />
      </div>
    </div>
  )
}

export default App
