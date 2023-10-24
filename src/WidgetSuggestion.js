import "./WidgetSuggestion.css";
import ProfileToFollow from "./ProfileToFollow";
import Trend from "./Trend";

function WidgetSuggestion({ profile, trend, ...props }) {
  return (
    <div className="suggestion">
      {profile && <ProfileToFollow {...props} />}
      {trend && <Trend {...props} />}
    </div>
  );
}

export default WidgetSuggestion;
