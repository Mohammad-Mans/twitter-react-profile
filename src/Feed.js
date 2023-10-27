import "./Feed.css";
import ProfileBio from "./ProfileBio";
import ProfileHeader from "./ProfileHeader";

function Feed({ viewedProfile }) {
  return (
    <div className="feed">
      <ProfileHeader {...viewedProfile} />
      <ProfileBio {...viewedProfile} />
    </div>
  );
}

export default Feed;
