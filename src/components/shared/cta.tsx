const CTA = () => {
  return (
    <div className="-mt-80 flex flex-col gap-4 items-center justify-center">
    <div className="px-96 flex flex-col gap-4 items-center justify-center">
        <p className="text-center text-4xl font-semibold">Join the Spheron SuperMove Tour</p>
        <p className="text-center">Spheron SuperMove Tour is a 6 month long developer adoption campaign being lead by Spheron and Aptos.</p>
    </div>
    <div className="flex gap-8 font-paytone">
      <button className="px-8 py-2 z-50  border-2 border-black uppercase bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        JOIN US
      </button>

      <button className="px-8 py-2 z-50 border-2 border-black uppercase bg-[#565656] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
        REGISTER
      </button>
      
    </div>
    </div>
  );
};

export default CTA;
