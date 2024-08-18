import { useState } from "react";

import iconSun from "../img/icon-sun.svg";
import iconMoon from "../img/icon-moon.svg";

export default function LightMode(props) {
  const { setLightTheme } = props;
  const [iconButtonImg, setIconButtonImg] = useState(iconMoon);

  function changeLightMode() {
    if (iconButtonImg === iconSun) {
      setIconButtonImg(iconMoon);
      setLightTheme(true);
    } else {
      setIconButtonImg(iconSun);
      setLightTheme(false);
    }
  }

  return (
    <img
      onClick={() => {
        changeLightMode();
      }}
      src={iconButtonImg}
      alt="light/dark mode button"
    ></img>
  );
}
