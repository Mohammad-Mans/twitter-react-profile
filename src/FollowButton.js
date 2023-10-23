import "./FollowButton.css";

import React, { useState } from "react";

function TwitterFollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollowing = () => {
    setIsFollowing((prevFollowing) => !prevFollowing);
  };

  return (
    <button
      className={`twitter-follow-button ${isFollowing ? "following" : ""}`}
      onClick={toggleFollowing}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}

export default TwitterFollowButton;
