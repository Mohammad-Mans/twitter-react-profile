import "./Feed.css";
import Posts from "./Posts";
import ProfileBio from "./ProfileBio";
import ProfileHeader from "./ProfileHeader";
import TabList from "./TabList";

function Feed({ viewedProfile }) {
  return (
    <div className="feed">
      <ProfileHeader {...viewedProfile} />
      <ProfileBio {...viewedProfile} />
      <TabList />
      <Posts />
    </div>
  );
}

export default Feed;
