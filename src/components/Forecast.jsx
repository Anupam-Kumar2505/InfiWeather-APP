import Hero from "./Hero";
import PropTypes from "prop-types";
import { getAltFromPath } from "./utils";

function Day(props) {
  return (
    <div className="bg-[#7F7EB9] flex items-center justify-between py-4 pl-10 pr-6 rounded-2xl text-2xl">
      <span>{props.day || "Day"}</span>
      <img
        className="h-[38px]"
        src={props.icon}
        alt={getAltFromPath(props.icon)}
      />
    </div>
  );
}

Day.propTypes = {
  icon: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
};

export default function Forcast() {
  return (
    <Hero title="Forecast">
      <div className="flex flex-col gap-4">
        <Day icon="/icons/weather-desc/cloudy.svg" day="Monday" />
        <Day icon="/icons/weather-desc/cloudy.svg" day="Monday" />
        <Day icon="/icons/weather-desc/cloudy.svg" day="Monday" />
      </div>
    </Hero>
  );
}
