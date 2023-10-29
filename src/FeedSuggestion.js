import "./FeedSuggestion.css";
import ProfileToFollow from "./ProfileToFollow";

function FeedSuggestion({ data }) {
  return (
    <div className="feed-suggestion">
      <ProfileToFollow profile={data} inFeed="true" />
    </div>
  );
}

export default FeedSuggestion;
