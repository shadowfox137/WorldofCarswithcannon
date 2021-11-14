import React, { useRef, useEffect, useState } from "react";

function Canvas(props) {
  const canvasRef = useRef(null);
  const canvasObj = canvasRef.current;
  const SCALE = 0.1;
  const OFFSET = 80;
  var context = canvasObj.getContext("2d");

  function initCanvas(canvasRef) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    console.log(props.test_text);

    props.context.setCtx(context);
  }

  function test_function(carry) {
    console.log(carry);
  }

  return (
    <canvas
      id="canvas"
      // ref={(c) => (context = c.getContext("2d"))}
      width={800}
      height={800}
      tabIndex="0"
      onLoad={initCanvas()}
      onKeyPress={(e) => alert(e.key)}
    />
  );
}

export default Canvas;
