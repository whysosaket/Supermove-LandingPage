import monkey from "../../assets/file.png";

const Monkey = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 md:h-screen">
        <img src={monkey} alt="Monkey" className="md:h-[50rem] absolute brightness-[0.9]" />
        <img src={monkey} alt="Monkey" className="md:h-[50rem] scale-[1.1] -z-20 opacity-50 blur-xl absolute" />
        <h1 className="text-[5rem] md:text-[15rem] -z-10 font-outline-2 font-paytone">supermove</h1>
        <h1 className="text-[5rem] md:text-[15rem] -mt-[7.5rem] md:-mt-[22.5rem] z-10 font-outline-2 text-white/0 font-paytone">supermove</h1>
    </div>
  )
}

export default Monkey