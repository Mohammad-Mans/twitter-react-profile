import "./WhoToFollow.css";
import FeedSuggestion from "./FeedSuggestion";

function WhoToFollow({ profiles }) {
  return (
    <div className="who-to-follow">
      <h2>Who to follow</h2>

      {profiles.map((profile, index) => (
        <FeedSuggestion key={index} data={profile} />
      ))}

      <p>Show more</p>
    </div>
  );
}

export default WhoToFollow;
