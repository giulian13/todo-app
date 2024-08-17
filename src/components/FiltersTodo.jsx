import "./FiltersTodo.css";

import { useState } from "react";

export default function FiltersTodo(props) {
  const { setFilteredBy, isLightTheme } = props;

  const [activeButton, setActiveButton] = useState(1);

  function handleActiveButton(buttonId) {
    setActiveButton(buttonId);
  }

  return (
    <div className={isLightTheme ? "filtersFrameLight" : "filtersFrameDark"}>
      <p
        style={{ color: activeButton === 1 ? "hsl(220, 98%, 61%)" : "" }}
        onClick={() => {
          setFilteredBy("all");
          handleActiveButton(1);
        }}
      >
        All
      </p>
      <p
        style={{ color: activeButton === 2 ? "hsl(220, 98%, 61%)" : "" }}
        onClick={() => {
          setFilteredBy("active");
          handleActiveButton(2);
        }}
      >
        Active
      </p>
      <p
        style={{ color: activeButton === 3 ? "hsl(220, 98%, 61%)" : "" }}
        onClick={() => {
          setFilteredBy("completed");
          handleActiveButton(3);
        }}
      >
        Completed
      </p>
    </div>
  );
}
