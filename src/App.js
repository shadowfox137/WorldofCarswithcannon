import "./CSS/App.css";
import React, { useEffect, useState } from "react";
import { useCanvas } from "./Script/useCanvas";
import { UpdateCanvas } from "./Script/updateCanvas";
import Controller from "./Script/Controller";

function App() {
  const ctr = new Controller();
  const [objects, setObjects, canvasRef, canvasWidth, canvasHeight] =
    UpdateCanvas();
  const [currentCoord, setCurrentCoord] = useState([]);

  const handleClearCanvas = (event) => {
    setObjects([]);
    console.log("clear");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(canvasWidth);
    console.log(canvasHeight);
  };

  const handleCanvasClick = (event) => {
    console.log("clickey");
  };

  useEffect(() => {
    // ctr.refresh();
  });

  // Set drawing interval
  const interval = setInterval(() => {
    setObjects([...objects, currentCoord]);
    currentCoord.height = currentCoord.height + 50;
    currentCoord.width = currentCoord.width + 50;
    console.log(currentCoord);
  }, 1000);

  /*
        <div className="button">
        <button onClick={handleClearCanvas}> CLEAR </button>
        </div>

  */

  return (
    <main className="App-main">
      <canvas
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />
    </main>
  );
}
export default App;
