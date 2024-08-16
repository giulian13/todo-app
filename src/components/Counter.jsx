import "../components/Counter.css";

export default function Counter(props) {
  const { numberOfItems, clearCompleted, isLightTheme } = props;

  return (
    <div className={isLightTheme ? "counterLight" : "counterDark"}>
      <div className="counterContainer">
        <p>{numberOfItems} items left</p>
        <p onClick={clearCompleted}>Clear Completed</p>
      </div>
    </div>
  );
}
