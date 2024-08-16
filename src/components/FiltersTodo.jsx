import "./FiltersTodo.css";

export default function FiltersTodo(props) {
  const { setFilteredBy } = props;

  return (
    <div className="filtersFrame">
      <p
        onClick={() => {
          setFilteredBy("all");
        }}
      >
        All
      </p>
      <p
        onClick={() => {
          setFilteredBy("active");
        }}
      >
        Active
      </p>
      <p
        onClick={() => {
          setFilteredBy("completed");
        }}
      >
        Completed
      </p>
    </div>
  );
}
