import "./index.css";
import NavBar from "./components/NavBar";
import TempDisplay from "./components/TempDisplay";

function App() {
  return (
    // TODO: Weird Background in mobile landscape mode
    <div className="min-h-screen-svh bg-[#281e4c] bg-[url(/icons/Group_1.png)] bg-[center_140px] bg-contain bg-no-repeat m-0 font-orbitron text-white">
      <NavBar />
      <TempDisplay />
    </div>
  );
}

export default App;
