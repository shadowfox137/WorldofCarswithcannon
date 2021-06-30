import React, { useRef, useEffect } from "react";
import Draw from "../Script/Draw";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const objectsToDraw = [];
    //Our first draw
    for (let i = 0; i < objectsToDraw.length; i += 1) {
      objectsToDraw[i].Draw();
    }
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
