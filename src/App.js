import "./App.css";

//Import background images.
import backgroundImgMobileDark from "./img/bg-mobile-dark.jpg";
import backgroundImgMobileLight from "./img/bg-mobile-light.jpg";
import backgroundImgDeskDark from "./img/bg-desktop-dark.jpg";
import backgroundImgDeskLight from "./img/bg-desktop-light.jpg";
import iconSun from "./img/icon-sun.svg";

import { useEffect, useState } from "react";
import TodoItemList from "./components/TodoItemList";
import TodoItem from "./components/TodoItem";
import InputComponent from "./components/InputComponent";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    backgroundImgMobileDark
  );

  return (
    <div className="App">
      <div className="mainFrame">
        <img
          className="backgroundImg"
          src={backgroundImage}
          alt="mobile background"
        ></img>
        <header>
          <h1>TODO</h1>
          <img src={iconSun} alt="light/dark mode button"></img>
        </header>
        <InputComponent />
        <TodoItemList />
      </div>
    </div>
  );
}

export default App;
