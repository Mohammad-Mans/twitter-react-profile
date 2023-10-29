import "./WidgetSuggestion.css";
import ProfileToFollow from "./ProfileToFollow";
import Trend from "./Trend";

function WidgetSuggestion({ type, data }) {
  return (
    <div className="suggestion">
      {type === "profile" ? (
        <ProfileToFollow profile={data}/>
      ) : (
        <Trend {...data} />
      )}
    </div>
  );
}

export default WidgetSuggestion;
