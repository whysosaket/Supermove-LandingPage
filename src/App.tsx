import Background from "./components/Background"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro";
import Spheron from "./components/shared/Spheron";
import Monkey from "./components/shared/Monkey";
import Background2 from "./components/Background2";
import About from "./components/about/About";
import Work from "./components/work/work";

function App() {

  return (
    <div className="text-white">
      <Navbar />
      <Background />
      <Intro />
      <About />
      <Work />
      {/* <Monkey /> */}
      {/* <Background2 /> */}
      {/* <Spheron /> */}
      {/* <div className="flex justify-center items-center h-screen">
        <img src={logo} alt="logo" className="w-44" />
      </div>

      <div className="flex justify-center items-center h-screen">
        <img src={aptos} alt="aptos" className="w-44" />
      </div> */}
    </div>
  )
}

export default App
