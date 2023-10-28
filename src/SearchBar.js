import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default SearchBar;
