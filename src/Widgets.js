import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import YouMightLike from "./YouMightLike";
import TrendsForYou from "./TrendsForYou";

function Widgets() {
  return (
    <div className="widgets-container">
      <div className="widgets">
        <div className="search-bar">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>

        <YouMightLike />

        <TrendsForYou />
      </div>
    </div>
  );
}

export default Widgets;
