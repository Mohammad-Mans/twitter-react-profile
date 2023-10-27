import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

import tailwindPhoto from "./images/Tailwind.jpg";
import typeScriptPhoto from "./images/TypeScript.png";
import freeCodeCampPhoto from "./images/freeCodeCamp.jpg";
import reactCover from "./images/RactCover.jpg";
import reactProfilePhoto from "./images/ReactProfile.png";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed viewedProfile={jsonViewedProfile} />
      <Widgets trendsData={jsonTrendsData} profilesData={jsonProfilesData} />
    </div>
  );
}

const jsonViewedProfile = {
  photoURL: reactProfilePhoto,
  coverURL: reactCover,
  userName: "React",
  handle: "@reactjs",
  activitiesCount: "2,611",
  bio: "The library for web and native user interfaces",
  followers: "267",
  following: "708.1K",
  joinedDate: "July 2013",
  attachment: "react.dev",
  attachmentURL: "https://react.dev/",
};

const jsonProfilesData = [
  {
    photoURL: tailwindPhoto,
    userName: "Tailwind CSS",
    handle: "@tailwindcss",
    verified: true,
  },
  {
    photoURL: typeScriptPhoto,
    userName: "TypeScript",
    handle: "@typescript",
  },
  {
    photoURL: freeCodeCampPhoto,
    userName: "freeCodeCamp.org",
    handle: "@freeCodeCamp",
    verified: true,
  },
];

const jsonTrendsData = [
  {
    title: "#Gaza War",
    posts: "20.9K",
  },
  {
    title: "Palestine",
    posts: "308K",
  },
  {
    title: "#IsrailAttack",
    posts: "117K",
  },
  {
    title: "West Bank",
    posts: "139K",
  },
  {
    title: "#CeasefireNOW",
    posts: "50.6K",
  },
];

export default App;
