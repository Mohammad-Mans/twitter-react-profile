import "./ProfileToFollow.css";
import Profile from "./Profile";
import TwitterFollowButton from "./FollowButton";

function ProfileToFollow({ profile, inFeed = "false" }) {
  return (
    <div className="profile-to-follow">
      <div className="profile-header">
        <Profile {...profile} />
        <TwitterFollowButton />
      </div>

      {inFeed === "true" && <p className="about">{profile.about}</p>}
    </div>
  );
}

export default ProfileToFollow;
