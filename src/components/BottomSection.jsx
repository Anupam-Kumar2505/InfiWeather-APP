import Forecast from "./Forecast";
import AQI from "./AQI";
import SunAndMoon from "./SunAndMoon";
const BottomSection = () => {
  return (
    <div className=" grid grid-cols-3 justify-center items-center gap-[4vw] py-[7vh] px-[7vw]   ">
      <div className=" flex flex-col justify-center items-center">
        <Forecast />
      </div>
      <div className="flex flex-col justify-center items-center">
        <AQI />
      </div>
      <div className="flex flex-col justify-center items-center">
        <SunAndMoon />
      </div>
    </div>
  );
};
export default BottomSection;
