import "./index.css";
import NavBar from "./components/NavBar";
import TempDisplay from "./components/TempDisplay";
import Forcast from "./components/Forecast";
import AQI from "./components/AQI";
import SunAndMoon from "./components/SunAndMoon";

function App() {
  return (
    <div className="min-h-screen-svh bg-[#281e4c] bg-[url(/icons/Group_1.png)] bg-[center_140px] bg-contain bg-no-repeat m-0 font-orbitron text-white">
      <NavBar />
      <main>
        <TempDisplay />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly px-8 justify-items-center mb-8 gap-6">
          <Forcast />
          <AQI />
          <SunAndMoon />
        </div>
      </main>
    </div>
  );
}

export default App;
