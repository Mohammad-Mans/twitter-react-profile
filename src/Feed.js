import "./Feed.css";
import ProfileBio from "./ProfileBio";
import ProfileHeader from "./ProfileHeader";
import TabList from "./TabList";

function Feed({ viewedProfile }) {
  return (
    <div className="feed">
      <ProfileHeader {...viewedProfile} />
      <ProfileBio {...viewedProfile} />
      <TabList />
    </div>
  );
}

export default Feed;
