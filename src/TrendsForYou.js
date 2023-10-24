import "./TrendsForYou.css";
import WidgetSuggestion from "./WidgetSuggestion";

function TrendsForYou() {
  return (
    <div className="trends-container">
      <h2>Trends For You</h2>
      <WidgetSuggestion trend title={"#Gaza War"} posts={"20.9K"} />
      <WidgetSuggestion trend title={"Palestine"} posts={"308K"} />
      <WidgetSuggestion trend title={"#IsrailAttack"} posts={"117K"} />
      <WidgetSuggestion trend title={"West Bank"} posts={"139K"} />
      <WidgetSuggestion trend title={"#CeasefireNOW"} posts={"50.6K"} />
      <p>Show more</p>
    </div>
  );
}

export default TrendsForYou;
