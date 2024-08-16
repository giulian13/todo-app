import "./App.css";

//Import background images.
import backgroundImgMobileDark from "./img/bg-mobile-dark.jpg";
import backgroundImgMobileLight from "./img/bg-mobile-light.jpg";
import backgroundImgDeskDark from "./img/bg-desktop-dark.jpg";
import backgroundImgDeskLight from "./img/bg-desktop-light.jpg";

import { useState } from "react";

import ToDoListScreen from "./components/ToDoListScreen";
import LightMode from "./components/LightMode";

function App() {
  const [isLightTheme, setLightTheme] = useState(true);

  return (
    <div className={isLightTheme ? "AppLight" : "AppDark"}>
      <div className="mainFrame">
        <img
          className="backgroundImg"
          src={
            isLightTheme ? backgroundImgMobileLight : backgroundImgMobileDark
          }
          alt="mobile background"
        ></img>
        <header>
          <h1>TODO</h1>
          <LightMode setLightTheme={setLightTheme} />
        </header>
        <ToDoListScreen
          isLghtTheme={isLightTheme}
          isLightTheme={isLightTheme}
        />
      </div>
    </div>
  );
}

export default App;
