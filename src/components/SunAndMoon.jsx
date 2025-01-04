import Hero from "./Hero";
import PropTypes from "prop-types";
import { getAltFromPath } from "./utils";

function TimeWiget(props) {
  return (
    <div className="flex bg-[#6969A6] rounded-3xl py-2 px-3 text-base">
      <span>{props.label}</span>
      <img className="h-6 mx-2" src="/icons/aqi-line.svg" />
      <span>{props.time}</span>
    </div>
  );
}

TimeWiget.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

function CelestialBody(props) {
  return (
    <div className="bg-[#9D8ED2] bg-opacity-50 rounded-3xl py-2 px-4">
      <div className="flex justify-between items-center px-4">
        <img
          className="h-[38px]"
          src={props.icon}
          alt={getAltFromPath(props.icon)}
        />
        <div>
          <div className="text-lg leading-6 w-22">{props.noteLine1}</div>
          <div className="text-lg leading-6 w-22">{props.noteLine2}</div>
        </div>
      </div>
      <img
        className="mx-auto w-[100%] my-2"
        src="/icons/rise-set-line.svg"
        alt="rise-set-line"
      />
      <div className="flex justify-between">
        {/* TODO: Fix the TimeWiget for Z Fold. It overflows :( */}
        <TimeWiget label="Rise" time={props.rise} />
        <TimeWiget label="Set" time={props.set} />
      </div>
    </div>
  );
}

CelestialBody.propTypes = {
  icon: PropTypes.string.isRequired,
  noteLine1: PropTypes.string.isRequired,
  noteLine2: PropTypes.string.isRequired,
  rise: PropTypes.string.isRequired,
  set: PropTypes.string.isRequired,
};

export default function SunAndMoon() {
  return (
    <Hero title="Sun and Moon">
      <div className="flex flex-col gap-4">
        <CelestialBody
          icon="/icons/sun-moon/sun.svg"
          noteLine1="12 hrs"
          noteLine2="27 mins"
          rise="06:00"
          set="18:00"
        />
        <CelestialBody
          icon="/icons/sun-moon/moon.svg"
          noteLine1="waning"
          noteLine2="crescent"
          rise="18:00"
          set="06:00"
        />
      </div>
    </Hero>
  );
}
