import "./FiltersTodo.css";

export default function FiltersTodo(props) {
  const { setFilteredBy, isLightTheme } = props;

  return (
    <div className={isLightTheme ? "filtersFrameLight" : "filtersFrameDark"}>
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
