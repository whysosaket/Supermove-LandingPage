import { useContext, useEffect } from "react";
import About from "../components/about/About";
import Background from "../components/Background";
import Footer from "../components/footer/footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Timeline from "../components/timeline/timeline";
import Work from "../components/work/work";
import GlobalContext from "../context/GlobalContext";

const Home = () => {
  const { setDimensions } = useContext(GlobalContext);


  useEffect(() => {
    let timeoutId: number | undefined;
    const handleResize = () => {
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setDimensions(newSize);
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [setDimensions]);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [setDimensions]);

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
  );
};

export default Home;
