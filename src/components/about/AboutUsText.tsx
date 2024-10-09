import { useContext } from "react"
import GlobalContext from "../../context/GlobalContext"

const AboutUsText = () => {
  const {multiplier, ispc} = useContext(GlobalContext);

  return (
    <div className="select-none">
        <h1
        style={{fontSize: ispc&&multiplier*80}}
        className="a text-[4rem] font-outline-2 text-white/100 font-paytone">
            about us
        </h1>
        <h1
        style={{fontSize: ispc&&multiplier*80, marginTop: ispc&&-multiplier*88}}
        className="a text-[4rem] -mt-[4.5rem]  font-outline-2 text-white/0 font-paytone">
            about us
        </h1>
        <h1
        style={{fontSize: ispc&&multiplier*80, marginTop: ispc&&-multiplier*88}}
        className="a text-[4rem] -mt-[4.5rem] font-outline-2 text-white/0 font-paytone">
            about us
        </h1>
    </div>
  )
}

export default AboutUsText