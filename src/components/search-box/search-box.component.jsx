import "./search-box.styles.css";

export const SearchBox = ({
  placeholder,
  handleChange,
  value,
  handleClear,
}) => (
  <>
    <input
      className="search"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
    <button onClick={handleClear}></button>
  </>
);
