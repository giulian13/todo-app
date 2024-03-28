import "./InputComponent.css";
import iconCheck from "../img/icon-check.svg";

export default function InputComponent() {
  return (
    <div className="inputFrame">
      <img className="checkButton" src={iconCheck} alt="delete button" />
      <p>Create a new todo...</p>
    </div>
  );
}
