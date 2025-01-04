import Hero from "./Hero";
import PropTypes from "prop-types";
import { getAltFromPath } from "./utils";

function Parameter(props) {
  return (
    <div className="bg-[#7F7EB9] flex items-center justify-between p-4 rounded-2xl text-2xl">
      <img
        className="h-[38px]"
        src={props.icon}
        alt={getAltFromPath(props.icon)}
      />
      <img src="/icons/aqi-line.svg" alt="aqi-line" />
      <span className="w-10">{props.value || "-1"}</span>
    </div>
  );
}

Parameter.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default function AQI() {
  return (
    <Hero title="Air Quality">
      <div className="grid grid-cols-2 gap-4">
        <Parameter icon="/icons/aqi/so2.svg" value="14" />
        <Parameter icon="/icons/aqi/co.svg" value="12" />
        <Parameter icon="/icons/aqi/no2.svg" value="52" />
        <Parameter icon="/icons/aqi/o3.svg" value="8" />
        <Parameter icon="/icons/aqi/pm2.5.svg" value="73" />
        <Parameter icon="/icons/aqi/pm10.svg" value="51" />
      </div>
    </Hero>
  );
}
