import "./ProfileToFollow.css";
import Profile from "./Profile";
import TwitterFollowButton from "./FollowButton";

function WhoToFollow(props) {
  return (
    <div className="profile-to-follow">
      <Profile {...props} />
      <TwitterFollowButton />
    </div>
  );
}

export default WhoToFollow;
