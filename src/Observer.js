import { notify } from "node-notifier";
import React from "react";

function Observer() {
  console.log("Observer activated");

  notify();
}

export default Observer;
