import Profile from "./Profile";
import "./SidebarProfile.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function SidebarProfile(props) {
  return (
    <div className="sidebar-profile">
      <Profile {...props} />
      <MoreHorizIcon />
    </div>
  );
}

export default SidebarProfile;
