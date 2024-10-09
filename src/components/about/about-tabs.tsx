import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "What?",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl text-black bg-white group">
          <What />
        </div>
      ),
    },
    {
      title: "Why?",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl text-black bg-white group">
          <Why />
        </div>
      ),
    },
    {
      title: "Who?",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl text-black bg-white group">
          <Who />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[10rem] md:h-[15rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} tabClassName="" contentClassName="" />
    </div>
  );
}

const What = () => {
  return (
    <div className="relative">
      {/* Background Text */}
      <div className="opacity-100 select-none group-hover:opacity-5 transition-opacity duration-300">
        <h1 className="text-[2.5rem] md:text-[3.5rem] font-outline-dark-2 text-black/100 font-paytone">
          what is supermove?
        </h1>
        <h1 className="text-[2.5rem] md:text-[3.5rem] mt-[5.5rem] font-outline-dark-2 text-white/0 font-paytone">
          what is supermove?
        </h1>
        <h1 className="text-[2.5rem] md:text-[3.5rem] -mt-[5.5rem] font-outline-dark-2 text-white/0 font-paytone">
          what is supermove?
        </h1>
      </div>

      {/* Hidden Paragraphs that appear on hover */}
      <div className="text-black -mt-[12rem] md:-mt-[5.5rem] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="mb-4 text-xs md:text-sm">
          Spheron SuperMove Tour is a 6 month long developer adoption campaign
          being lead by Spheron and Aptos. Spheron SuperMove Tour aims at
          uniting the open-source developer community here in India 🇮🇳 for
          building dapps on Aptos using Move while utilizing Spheron Network.
        </p>
        <p>
          This campaign will comprise of over 100+ events and will cover 50+
          colleges & 20+ cities.
        </p>
      </div>
    </div>
  );
};

const Why = () => {
  return (
    <div className="relative">
      {/* Background Text */}
      <div className="opacity-100 select-none group-hover:opacity-5 transition-opacity duration-300">
        <h1 className="text-[2.5rem] md:text-[4rem] font-outline-dark-2 text-black/100 font-paytone">
          why supermove?
        </h1>
        <h1 className="text-[2.5rem] md:text-[4rem] mt-[5.5rem] font-outline-dark-2 text-white/0 font-paytone">
          why supermove?
        </h1>
        <h1 className="text-[2.5rem] md:text-[4rem] -mt-[5.5rem] font-outline-dark-2 text-white/0 font-paytone">
          why supermove?
        </h1>
      </div>

      {/* Hidden Paragraphs that appear on hover */}
      <div className="text-black -mt-[12rem] md:-mt-[5.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="mb-4 text-sm md:text-xl">
          The Indian web3 developer ecosystem faces several challenges:
          fragmented education, stagnant communication, and lack of awareness.
        </p>
      </div>
    </div>
  );
};

const Who = () => {
  return (
    <div className="relative">
      {/* Background Text */}
      <div className="opacity-100 select-none group-hover:opacity-5 transition-opacity duration-300">
        <h1 className="text-[2.5rem] md:text-[5rem] font-outline-dark-2 text-black/100 font-paytone">
          who are we?
        </h1>
        <h1 className="text-[2.5rem] md:text-[5rem] mt-[5.5rem] font-outline-dark-2 text-white/0 font-paytone">
          who are we?
        </h1>
        <h1 className="text-[2.5rem] md:text-[5rem] -mt-[6.5rem] md:-mt-[5.5rem] font-outline-dark-2 text-white/0 font-paytone">
          who are we?
        </h1>
      </div>

      {/* Hidden Paragraphs that appear on hover */}
      <div className="text-black -mt-[5.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="mb-4 text-sm md:text-xl">
          We are developers, aspiring blockchain
          builders, and open-source enthusiasts eager to dive into the world of
          blockchain.
        </p>
      </div>
    </div>
  );
};
