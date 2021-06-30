import "./CSS/App.css";
import React, { useEffect } from "react";
import Draw from "./Script/Draw";
import Mainmenu from "./Component/Mainmenu";

const HOOK_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
    />
  </svg>
);

const HOOK_PATH = new Path2D(HOOK_SVG);
const SCALE = 0.3;
const OFFSET = 80;

function draw(ctx, location) {
  ctx.fillStyle = "deepskyblue";
  ctx.shadowColor = "dodgerblue";
  ctx.shadowBlur = 20;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.fill(HOOK_PATH);
  ctx.restore();
}

function refresh(canvasRef, e) {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  Draw(ctx);
}

function App() {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    refresh(canvasRef, null);
  });

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={800}
        onClick={(e) => {
          refresh(canvasRef, e);
          //const canvas = canvasRef.current;
          //const ctx = canvas.getContext("2d");
          // Draw(ctx);
          //draw(ctx, { x: e.clientX, y: e.clientY });
          // alert(e.clientX);
        }}
      />
      <div>
        <Mainmenu />
      </div>
    </div>
  );
}
export default App;
