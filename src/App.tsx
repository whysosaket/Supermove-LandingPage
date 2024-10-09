import { GlobalState } from "./context/GlobalContext";
import Home from "./pages/home";

function App() {

  


  return (
    <div className="text-white">
      <GlobalState>
        <Home />
      </GlobalState>
    </div>
  )
}

export default App
