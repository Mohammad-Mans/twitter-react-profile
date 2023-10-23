import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import SidebarProfile from "./SidebarProfile";

import HomeOutlined from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";

import { Button } from "@mui/material";
import logoImage from "./logo/twitter-logo.png";
import profileImage from "./images/Palestine.jpeg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <a href="https://twitter.com/home">
          <img src={logoImage} alt="Twitter-logo" />
        </a>
        <SidebarOption text={"Home"} Icon={HomeOutlined} />
        <SidebarOption text={"Explore"} Icon={SearchIcon} />
        <SidebarOption text={"Notifications"} Icon={NotificationsNoneIcon} />
        <SidebarOption text={"Messages"} Icon={MailOutlineIcon} />
        <SidebarOption text={"Lists"} Icon={ListAltOutlinedIcon} />
        <SidebarOption text={"Communities"} Icon={PeopleOutlinedIcon} />
        <SidebarOption text={"Profile"} Icon={PersonOutlineOutlinedIcon} />
        <SidebarOption text={"More"} Icon={PendingOutlinedIcon} />
        <Button variant="outlined" className="sidebar-post" fullWidth>
          Post
        </Button>
      </div>
      <SidebarProfile
        photoURL={profileImage}
        userName={"Mohammad Mansour"}
        email={"@MohammadMans_02"}
      />
    </div>
  );
}

export default Sidebar;
