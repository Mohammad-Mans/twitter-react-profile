import React from "react";
import "./ProfileHeader.css";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function FeedHeader({ userName, activitiesCount }) {
  return (
    <div className="main-header">
      <KeyboardBackspaceIcon />

      <div className="info">
        <h1>{userName}</h1>
        <span className="tweets-count">{activitiesCount} posts</span>
      </div>
    </div>
  );
}

export default FeedHeader;
