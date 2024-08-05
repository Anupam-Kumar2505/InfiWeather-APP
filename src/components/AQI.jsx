const AQI = () => {
  return (
    <div className="flex flex-col items-center bg-[#9EC0F6]/50 bg-[length:100%] bg-no-repeat p-[16px] w-fit h-fit rounded-[50px]">
      <div className="text-xl mb-[5px] text-white">Air Quality</div>
      <div className="border-b-4 w-[256px] border-[#907fcc] border-solid"></div>
      <div className="grid grid-cols-2 gap-y-[10px] gap-x-[16px] h-[269px] w-full mt-[16px] ml-[8px] ">
        <div className="py-[10px] px-[8px]  bg-[#9998e3] flex flex-row rounded-[25px] items-center justify-center w-full h-[63px] ">
          <img className="pl-[2px] mr-[14px]" src="Icons/aqi-icons/pm2.5.svg" />

          <div className="h-[90%] m-0 border-l-[2px] border-solid border-white"></div>
          <div className="ml-[8px] text-white text-[20px] font-medium w-[42px] text-center ">
            73
          </div>
        </div>
        <div className="py-[10px] px-[8px]  bg-[#9998e3] flex rounded-[25px] items-center justify-center w-full h-[63px] ">
          <img className="pl-[2px] mr-[14px]" src="Icons/aqi-icons/pm10.svg" />

          <div className="h-[90%] m-0 border-l-[2px] border-solid border-white"></div>
          <div className="ml-[8px] text-white text-[20px] font-medium w-[42px] text-center ">
            51
          </div>
        </div>
        <div className="py-[10px] px-[8px]  bg-[#9998e3] flex rounded-[25px] items-center justify-center w-full h-[63px] ">
          <img
            className="pl-[2px] mr-[14px] h-10"
            src="Icons/aqi-icons/o3.svg"
          />

          <div className="h-[90%] m-0 border-l-[2px] border-solid border-white"></div>
          <div className="ml-[8px] text-white text-[20px] font-medium w-[42px] text-center ">
            8
          </div>
        </div>
        <div className="py-[10px] px-[8px]  bg-[#9998e3] flex rounded-[25px] items-center justify-center w-full h-[63px] ">
          <img
            className="pl-[2px] mr-[14px] h-10"
            src="Icons/aqi-icons/co.svg"
          />

          <div className="h-[90%] m-0 border-l-[2px] border-solid border-white"></div>
          <div className="ml-[8px] text-white text-[20px] font-medium w-[42px] text-center ">
            12
          </div>
        </div>
        <div className="py-[10px] px-[8px]  bg-[#9998e3] flex rounded-[25px] items-center justify-center w-full h-[63px] ">
          <img className="pl-[2px] mr-[14px]" src="Icons/aqi-icons/no2.svg" />

          <div className="h-[90%] m-0 border-l-[2px] border-solid border-white"></div>
          <div className="ml-[8px] text-white text-[20px] font-medium w-[42px] text-center ">
            51
          </div>
        </div>
        <div className="py-[10px] px-[8px]  bg-[#9998e3] flex rounded-[25px] items-center justify-center w-full h-[63px] ">
          <img className="pl-[2px] mr-[14px]" src="Icons/aqi-icons/so2.svg" />

          <div className="h-[90%] m-0 border-l-[2px] border-solid border-white"></div>
          <div className="ml-[8px] text-white text-[20px] font-medium w-[42px] text-center ">
            14
          </div>
        </div>
      </div>
    </div>
  );
};
export default AQI;
