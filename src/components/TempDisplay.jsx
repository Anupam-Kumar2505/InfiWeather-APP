export default function TempDisplay() {
  return (
    <div className="flex justify-center gap-10 md:gap-20 my-14">
      <img src="/icons/left-arrow.svg" alt="left-arrow" />
      <div className="text-center">
        <span className="block text-7xl md:text-8xl">36</span>
        <span className="block text-3xl md:text-4xl mt-6">City Name</span>
      </div>
      <img src="/icons/right-arrow.svg" alt="right-arrow" />
    </div>
  );
}
