import TimelineText from "./timeline-text";
import wall from "../../assets/wall3.jpg";
import TimelineImage from "../../assets/timeline.webp";
import layer from "../../assets/bg2.png";

const Timeline = () => {
  return (
    <div className="absolute top-[300vh] w-full h-screen overflow-hidden px-12">
      <img
        src={wall}
        alt="wall"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 brightness-[0.5] opacity-50"
      />

      <img
        src={layer}
        className="absolute w-full -top-[2rem] left-[0rem] -z-10 opacity-10"
      />
      <div className="w-screen h-screen flex justify-start">
        <div className="flex flex-col h-screen justify-start">
          <div className="flex w-full h-screen gap-4 -rotate-90 justify-center">
            <TimelineText />
          </div>
        </div>
        <div className="flex justify-center -ml-96">
          <div className="w-5/6 flex justify-center">
            <img
              src={TimelineImage}
              alt="timeline"
              className="w-full my-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
