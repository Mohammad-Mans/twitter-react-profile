import Post from "./Post";

import danabraLogo from "./images/danabra-logo.jpg";
import reactLogo from "./images/ReactProfile.png";
import reactPostImg from "./images/reactPost.png";

function Posts() {
  return (
    <div>
      <Post {...post1} />
      <Post {...post2} />
    </div>
  );
}

export default Posts;

const post2 = {
  type: "repost",
  profileName: "React",
  authorLogo: danabraLogo,
  authorName: "danabramov.bsky.social",
  authorHandle: "@dan_abramov",
  publishTime: "May 29",
  content: "happy 10th birthday to @reactjs ! 🎂⚛️",
  replies: "46",
  reposts: "675",
  likes: "3,701",
  views: "1.1M",
};

const post1 = {
  type: "pinned",
  authorLogo: reactLogo,
  authorName: "React",
  authorHandle: "@reactjs",
  publishTime: "Mar 16",
  content:
    "Today, we're thrilled to launch react.dev, the new home for React and its documentation. It teaches modern React with function components and Hooks, and we've included diagrams, illustrations, challenges, and over 600 interactive examples. Check it out!",
  imgURL: reactPostImg,
  replies: "272",
  reposts: "3.8K",
  likes: "13K",
  views: "1.9M",
};
