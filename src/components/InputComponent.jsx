import { useState } from "react";
import "./InputComponent.css";

export default function InputComponent(props) {
  const { insertToDoItem } = props;

  const [inputText, setInputText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    insertToDoItem(inputText);
    setInputText("");
  }

  return (
    <div className="inputFrameLight">
      <form onSubmit={handleSubmit}>
        <div className="checkButton"></div>
        <input
          className="inputText"
          type="text"
          value={inputText}
          placeholder="Create a new todo..."
          onChange={(e) => {
            e.preventDefault();
            setInputText(e.target.value);
          }}
          name="todo input"
        />
      </form>
    </div>
  );
}
