import "./Feed.css";
import Posts from "./Posts";
import ProfileBio from "./ProfileBio";
import ProfileHeader from "./ProfileHeader";
import TabList from "./TabList";

function Feed({ viewedProfile, profilesData }) {
  return (
    <div className="feed">
      <ProfileHeader {...viewedProfile} />
      <ProfileBio {...viewedProfile} />
      <TabList />
      <Posts profilesData ={profilesData} />
    </div>
  );
}

export default Feed;
