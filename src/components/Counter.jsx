import "../components/Counter.css";

export default function Counter(props) {
  const { numberOfItems, clearCompleted } = props;

  return (
    <div className="counter">
      <div className="counterContainer">
        <p>{numberOfItems} items left</p>
        <p onClick={clearCompleted}>Clear Completed</p>
      </div>
    </div>
  );
}
