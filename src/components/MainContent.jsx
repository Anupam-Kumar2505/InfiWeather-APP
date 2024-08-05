const MainContent = () => {
  return (
    <div className="flex flex-row gap-[6vw] items-center justify-center  h-[182px]">
      <div className="w-9">
        <img src="../public/Icons/left-arrow.svg" alt="Left Arrow" />
      </div>
      <div className=" flex flex-col items-center text-white ">
        <div className="text-5xl leading">25°</div>
        <div className="text-2xl">City Name</div>
      </div>
      <div className="w-9">
        <img src="../public/Icons/right-arrow 1.svg" alt="Right Arrow" />
      </div>
    </div>
  );
};
export default MainContent;
