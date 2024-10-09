import { useContext, useEffect } from "react"
import About from "../components/about/About"
import Background from "../components/Background"
import Footer from "../components/footer/footer"
import Intro from "../components/Intro"
import Navbar from "../components/Navbar"
import Timeline from "../components/timeline/timeline"
import Work from "../components/work/work"
import GlobalContext from "../context/GlobalContext"


const Home = () => {
  const {setDimensions} = useContext(GlobalContext);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  },[])
  return (
    <div>
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

export default Home