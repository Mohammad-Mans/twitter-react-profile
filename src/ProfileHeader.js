import React from "react";
import "./ProfileHeader.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function FeedHeader({ userName, coverURL, activitiesCount }) {
  return (
    <header className="profile-header">
      <div className="top">
        <KeyboardBackspaceIcon />

        <div className="info">
          <h1>{userName}</h1>
          <span className="tweets-count">{activitiesCount} posts</span>
        </div>
      </div>

      <div className="cover">
        <img src={coverURL} alt="coverimg" />
      </div>
    </header>
  );
}

export default FeedHeader;
