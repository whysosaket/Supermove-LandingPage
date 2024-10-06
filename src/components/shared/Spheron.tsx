import S from "../../assets/letters/S.png";
import P from "../../assets/letters/P.png";
import H from "../../assets/letters/H.png";
import E from "../../assets/letters/E.png";
import R from "../../assets/letters/R.png";
import O from "../../assets/letters/O.png";
import N from "../../assets/letters/N.png";

const Spheron = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <img src={S} alt="S" className="w-44" />
        <img src={P} alt="P" className="w-44" />
        <img src={H} alt="H" className="w-44" />
        <img src={E} alt="E" className="w-44" />
        <img src={R} alt="R" className="w-44" />
        <img src={O} alt="O" className="w-44" />
        <img src={N} alt="N" className="w-44" />
    </div>
  )
}

export default Spheron