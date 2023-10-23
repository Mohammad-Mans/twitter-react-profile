import "./WidgetSuggestion.css";
import ProfileToFollow from "./ProfileToFollow";

function WidgetSuggestion(props) {
  return (
    <div className="suggestion">
      <ProfileToFollow {...props} />
    </div>
  );
}

export default WidgetSuggestion;
