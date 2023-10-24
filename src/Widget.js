import "./Widget.css";
import WidgetSuggestion from "./WidgetSuggestion";

function Widget({ type, data }) {
  return (
    <div className="widget">
      <h2>{type === "profile" ? "You might like" : "Trends for you"}</h2>

      {data.map((item, index) => (
        <WidgetSuggestion key={index} data={item} type={type} />
      ))}

      <p>Show more</p>
    </div>
  );
}

export default Widget;
