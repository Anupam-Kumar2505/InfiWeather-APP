const SunAndMoon = () => {
  return (
    <div className="flex flex-col items-center bg-[#9EC0F6]/50  p-[16px] w-fit h-full rounded-[50px]">
      <div className="text-xl mb-[5px] text-white">Sun and Moon</div>
      <div className="border-b-4 w-[256px] border-[#907fcc] border-solid"></div>
      <div className="h-[265px]  mt-[10px] w-full flex flex-col items-center ">
        <div className="h-full my-[13px] flex flex-col w-[280px] rounded-[25px] py-[12px] px-[5%]  bg-[#9998e3] justify-center items-center ">
          <div className="gap-x-[35px] flex items-center w-full flex-row justify-between">
            <img
              className="pl-[20px] w-16"
              src="../public/Icons/sun-moon/sun.svg"
              alt="Sun"
            />
            <div className="text-lg font-medium pr-4 text-right flex-1 text-white">
              <p>12 hrs</p>
              <p>27 min</p>
            </div>
          </div>
          <div className="border-b-2 w-[90%] border-[#281E4C46] border-solid"></div>
          <div className="flex flex-row items-center pt-2 justify-between w-full text-4 h-[37px] gap-x-4">
            <div className="flex-1 rounded-[19px] h-[30px] bg-[#6969A6] flex items-center justify-between py-[4px] px-[10px] text-white text-[15px]">
              <p>rise</p>
              <p>6:27</p>
            </div>
            <div className="h-[90%] m-0 border-l-[2px] border-solid border-white"></div>
            <div className="flex-1 rounded-[19px] h-[30px] bg-[#6969A6] flex items-center justify-between py-[4px] px-[10px] text-white text-[15px]">
              <p>set</p>
              <p>6:54</p>
            </div>
          </div>
        </div>
        <div className="h-full  flex flex-col w-[280px] rounded-[25px] pb-[12px] px-[5%]  bg-[#9998e3] justify-center items-center ">
          <div className="gap-x-[35px] flex items-center w-full flex-row justify-between">
            <img
              className="pl-[20px] w-16"
              src="../public/Icons/sun-moon/moon.svg"
              alt="Sun"
            />
            <div className="text-lg font-medium pr-4 text-right flex-1 text-white">
              <p>Waning</p>
              <p>Crescent</p>
            </div>
          </div>
          <div className="border-b-2 w-[90%] border-[#281E4C46] border-solid"></div>
          <div className="flex flex-row items-center pt-2 justify-between w-full text-4 h-[37px] gap-x-4">
            <div className="flex-1 rounded-[19px] h-[30px] bg-[#6969A6] flex items-center justify-between py-[4px] px-[10px] text-white text-[15px]">
              <p>rise</p>
              <p>5:20</p>
            </div>
            <div className="h-[90%] m-0 border-l-[2px] border-solid border-white"></div>
            <div className="flex-1 rounded-[19px] h-[30px] bg-[#6969A6] flex items-center justify-between py-[4px] px-[10px] text-white text-[15px]">
              <p>set</p>
              <p>5:44</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SunAndMoon;
