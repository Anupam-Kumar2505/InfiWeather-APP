const Forecast = () => {
  return (
    <div className="flex flex-col items-center bg-[#9EC0F6]/50 bg-[length:100%] bg-no-repeat p-[16px] w-fit h-fit rounded-[50px] ">
      <div className="text-xl mb-[5px] text-white">Forecast</div>
      <div className="border-b-4 w-[256px] border-[#907fcc] border-solid"></div>
      <div>
        <div className="py-[16px] px-[14px] rounded-[25px] w-[254px] h-[63px] bg-[#7F7EB9] bg-[length:100%] flex items-center justify-around content-center my-[20px] mx-0">
          <p className="flex-1 pl-[24px] text-[20px] font-medium text-white">
            Monday
          </p>
          <img src="../public/Icons/weather-desc/cloudy.svg" alt="Cloudy" />
        </div>
        <div className="py-[16px] px-[14px] rounded-[25px] w-[254px] h-[63px] bg-[#7F7EB9] bg-[length:100%] flex items-center justify-around content-center my-[20px] mx-0">
          <p className="flex-1 pl-[24px] text-[20px] font-medium text-white">
            Tuesday
          </p>
          <img src="../public/Icons/weather-desc/cloudy.svg" alt="Cloudy" />
        </div>
        <div className="py-[16px] px-[14px] rounded-[25px] w-[254px] h-[63px] bg-[#7F7EB9] bg-[length:100%] flex items-center justify-around content-center my-[20px] mx-0">
          <p className="flex-1 pl-[24px] text-[20px] font-medium text-white">
            Wednesday
          </p>
          <img src="../public/Icons/weather-desc/cloudy.svg" alt="Cloudy" />
        </div>
      </div>
    </div>
  );
};
export default Forecast;
