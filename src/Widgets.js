import "./Widgets.css";
import { SearchOutlined } from "@mui/icons-material";

function Widgets() {
  return (
    <div className="widgets">
      <div className="">
        <SearchOutlined />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Widgets;
