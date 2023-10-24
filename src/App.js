import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

import tailwindPhoto from "./images/Tailwind.jpg";
import typeScriptPhoto from "./images/TypeScript.png";
import freeCodeCampPhoto from "./images/freeCodeCamp.jpg";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets trendsData={jsonTrendsData} profilesData={jsonProfilesData} />
    </div>
  );
}

const jsonProfilesData = [
  {
    photoURL: tailwindPhoto,
    userName: "Tailwind CSS",
    email: "@tailwindcss",
    verified: true,
  },
  {
    photoURL: typeScriptPhoto,
    userName: "TypeScript",
    email: "@typescript",
  },
  {
    photoURL: freeCodeCampPhoto,
    userName: "freeCodeCamp.org",
    email: "@freeCodeCamp",
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
