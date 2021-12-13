import "./CSS/App.css";
import React, { useEffect, useState, useRef } from "react";
import { useCanvas } from "./Script/useCanvas";
import { UpdateCanvas } from "./Script/updateCanvas";
import Controller from "./Script/Controller";

function App() {
  const ctr = new Controller();

  const [objects, setObjects, canvasRef, canvasWidth, canvasHeight] =
    UpdateCanvas();

  const handleClearCanvas = (event) => {
    setObjects(0);
    console.log("clear");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(canvasWidth);
    console.log(canvasHeight);
  };

  const handleCanvasClick = (event) => {
    console.log("clickey");
  };

  // Set drawing interval
  useEffect(() => {
    setInterval(() => {
      setObjects((old) => old + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(objects);
  }, [objects]);

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
