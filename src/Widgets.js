import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import Widget from "./Widget";

function Widgets({trendsData,profilesData}) {
  return (
    <div className="widgets-container">
      <div className="widgets">
        <div className="search-bar">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>

        <Widget data={profilesData} type="profile" />
        <Widget data={trendsData} type="trend" />
        

      </div>
    </div>
  );
}

export default Widgets;
