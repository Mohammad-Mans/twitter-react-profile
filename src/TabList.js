import "./TabList.css";
import { useState } from "react";

const tabs = [
  {
    id: "posts",
    label: "Posts",
  },
  {
    id: "replies",
    label: "Replies",
  },
  {
    id: "media",
    label: "Media",
  },
  {
    id: "likes",
    label: "Likes",
  },
];

function TabList() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tab-list">
      {tabs.map((tab) => (
        <button
          onClick={() => setActiveTab(tab.id)}
          className="tab"
          key={tab.id}
        >
          <span className={`label ${activeTab === tab.id && "active"}`}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default TabList;
