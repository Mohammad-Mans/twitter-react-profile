import "./Trend.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Trend({ title, posts }) {
  return (
    <div className="trend">
      <div className="info">
        <p className="title">{title}</p>
        <p className="posts">{posts} posts</p>
      </div>

      <MoreHorizIcon />
    </div>
  );
}

export default Trend;
