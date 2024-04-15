import { useState } from "react";
import "./InputComponent.css";

export default function InputComponent(props) {
  const { toDoList, insertToDoItem } = props;

  const [inputText, setInputText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    insertToDoItem([...toDoList, { id: 0, insertedText: inputText }]);
  }

  return (
    <div className="inputFrame">
      <form onSubmit={handleSubmit}>
        <div className="checkButton"></div>
        <input
          className="inputText"
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => {
            e.preventDefault();
            setInputText(e.target.value);
          }}
          onSubmit={(e) => {
            console.log(e.target.value);
          }}
          name="todo input"
        />
      </form>
    </div>
  );
}
