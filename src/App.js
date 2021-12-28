import "./CSS/App.css";
import React, { useEffect, useState, useRef } from "react";
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

  const handleKeyDown = (event) => {
    console.log("keydown");
    console.log(event.key);
    ctr.notifyPlayerKeyDown(event.key);
  };

  // Set drawing interval
  useEffect(() => {
    const interval = setInterval(() => {
      setObjects((objects) => [...objects, ctr.getObject()]);
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
      <p>Title</p>
      <canvas
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
        onKeyDown={handleKeyDown}
      />
    </main>
  );
}
export default App;
