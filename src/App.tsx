import Background from "./components/Background"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro";

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
    </div>
  )
}

export default App
