import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";    

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-8 py-2 z-50  border-2 font-paytone border-black uppercase bg-[#363636] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex  flex-row justify-between items-center hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-8 md:h-14 w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-sm text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-8 py-2 z-50  border-2 font-paytone border-black uppercase hover:bg-[#363636] bg-[#262626] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
    {
        description: "Learn the latest in Web3 technology through hands-on university workshops.",
        title: "University Workshops",
        src: "/work/w1.webp",
        ctaText: "View",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
          return (
            <p>
              Join us for interactive sessions at top universities to learn about blockchain, smart contracts, and decentralized application (dApp) development. 
              These workshops are designed to provide students with practical knowledge and skills in the Web3 ecosystem. 
              Ideal for beginners as well as those looking to deepen their understanding.
            </p>
          );
        },
    },
    {
        description: "A week-long competition for builders to create solutions using blockchain technology.",
        title: "Hackathons",
        src: "/work/w3.webp",
        ctaText: "View",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
          return (
            <p>
              Dive deep into blockchain development with our hackathon, where you'll have a full week to collaborate with teams and build cutting-edge decentralized solutions.
              Whether you're focusing on DeFi, NFTs, or new Web3 tools, the hackathon offers a chance to push your limits and create real-world impact.
            </p>
          );
        },
    },
    {
        description: "Online learning sessions for developers at all levels, hosted by industry experts.",
        title: "Online Workshops",
        src: "/work/w4.webp",
        ctaText: "View",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
          return (
            <p>
              Join our online workshops to explore topics like smart contracts, blockchain infrastructure, and decentralized governance. 
              These virtual sessions are ideal for remote learners looking to gain insights from leading experts in the field of Web3.
            </p>
          );
        },
    },
    {
        description: "Networking and collaboration opportunities for Web3 builders and enthusiasts.",
        title: "Builders Meet",
        src: "/work/w5.webp",
        ctaText: "View",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
          return (
            <p>
              Connect with like-minded Web3 developers, entrepreneurs, and enthusiasts at our Builders Meet. 
              Exchange ideas, collaborate on projects, and discover new opportunities in the growing decentralized space.
            </p>
          );
        },
    },
    {
        description: "Earn rewards by completing challenges and contributing to the Web3 ecosystem.",
        title: "Bounties",
        src: "/work/w6.webp",
        ctaText: "View",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
          return (
            <p>
              Contribute to the Web3 ecosystem by solving technical challenges, fixing bugs, or creating new tools and services. 
              Our bounty program rewards developers for their valuable contributions to the decentralized future.
            </p>
          );
        },
    }   
];
