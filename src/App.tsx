import { useEffect, useState } from "react";
import { GlobalState } from "./context/GlobalContext";
import Home from "./pages/home";
import Loading from "./components/loading";
import Decoy from "./components/decoy";

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
      window.scrollTo(0, 0)
    },2500)
  }, [])

  return (
    loading?<>
    <Loading />
    <Decoy />
    </>:
    <div className="text-white">
      <GlobalState>
        <Home />
      </GlobalState>
    </div>
  )
}

export default App
