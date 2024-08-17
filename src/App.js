import "./App.css";

//Import background images.
import backgroundImgMobileDark from "./img/bg-mobile-dark.jpg";
import backgroundImgMobileLight from "./img/bg-mobile-light.jpg";
import backgroundImgDeskDark from "./img/bg-desktop-dark.jpg";
import backgroundImgDeskLight from "./img/bg-desktop-light.jpg";

import { useState, useEffect } from "react";

import ToDoListScreen from "./components/ToDoListScreen";
import LightMode from "./components/LightMode";

function App() {
  const [isLightTheme, setLightTheme] = useState(true);
  const [displayBackgroundImg, setDisplayBackgroundImg] = useState();

  useEffect(() => {
    const updateBackground = () => {
      if ((window.innerWidth < 700) & isLightTheme) {
        setDisplayBackgroundImg(backgroundImgMobileLight);
      } else if ((window.innerWidth < 700) & (isLightTheme === false)) {
        setDisplayBackgroundImg(backgroundImgMobileDark);
      } else if ((window.innerWidth > 700) & isLightTheme) {
        setDisplayBackgroundImg(backgroundImgDeskLight);
      } else if ((window.innerWidth > 700) & (isLightTheme === false)) {
        setDisplayBackgroundImg(backgroundImgDeskDark);
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, [isLightTheme]);

  return (
    <div className={isLightTheme ? "AppLight" : "AppDark"}>
      <div className="mainFrame">
        <img
          className="backgroundImg"
          src={displayBackgroundImg}
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
