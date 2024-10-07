import Background from "./components/Background"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro";
import Spheron from "./components/shared/Spheron";
import Monkey from "./components/shared/Monkey";

import About from "./components/about/About";
import Work from "./components/work/work";
import Timeline from "./components/timeline/timeline";
import Footer from "./components/footer/footer";

function App() {

  return (
    <div className="text-white">
      <Navbar />
      <Background />
      <Intro />
      <About />
      <Work />
      <Timeline />
      <Footer />
      {/* <Monkey /> */}
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
