import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactPlayer from "react-player";
import SoundWithName from "./components/react_player_with_name.tsx";
import SoundBoard from "./components/soundboard";

function App() {
  return (
    <div>
      <SoundBoard />
    </div>
  );
}

export default App;
