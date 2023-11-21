import { ReactComponent as SearchIcon } from "./Search-icon.svg";

const SearchBox = () => {
  return (
    <form
      style={{
        display: "flex",
        minWidth: "378px"
      }}
    >
      <input
        placeholder="Search an album of your choice"
        style={{
          flex: 1,
          borderRadius: "8px 0px 0px 8px",
          padding: "10px" // Add padding for better styling
        }}
      />
      <button
        style={{
          width: "66px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0px 8px 8px 0px",
          padding: "8px",
          // Add background color for better styling
          border: "0px 8px 8px 0px", // Remove the border for a cleaner look
          cursor: "pointer"
          // Add cursor pointer on hover
        }}
      >
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  );
};

export default SearchBox;
