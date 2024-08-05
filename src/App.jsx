import React from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import BottomSection from "./components/BottomSection";

function App() {
  return (
    <div className="min-h-screen bg-[#281e4c] bg-[url(../public/Icons/Group_1.png)] bg-[center_140px]  bg-contain bg-no-repeat m-0 font-orbitron">
      <Header />

      <MainContent />
      {/* Bottom Section */}

      <BottomSection />
    </div>
  );
}

export default App;
