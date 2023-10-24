import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import YouMightLike from "./YouMightLike";
import TrendsForYou from "./TrendsForYou";

function Widgets() {
  return (
    <div className="widgets">
      <div className="search-bar">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>

      <YouMightLike />

      <TrendsForYou />
    </div>
  );
}

export default Widgets;
