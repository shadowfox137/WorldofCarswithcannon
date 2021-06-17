import "./CSS/App.css";
import Canvas from "./Component/Canvas";
import Mainmenu from "./Component/Mainmenu";

function App() {
  return (
    <div>
      <div id="canvas">
        <Canvas />
      </div>
      <div id="mainmenu">
        <Mainmenu />
      </div>
    </div>
  );
}

export default App;
