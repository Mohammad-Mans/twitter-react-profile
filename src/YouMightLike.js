import "./YouMightLike.css";

import tailwindPhoto from "./images/Tailwind.jpg";
import typeScript from "./images/TypeScript.png";
import freeCodeCamp from "./images/freeCodeCamp.jpg";
import WidgetSuggestion from "./WidgetSuggestion";

function YouMightLike() {
  return (
    <div className="you-Might-like-container">
      <h2>You might Like</h2>

      <WidgetSuggestion
        profile
        photoURL={tailwindPhoto}
        userName={"Tailwind CSS"}
        email={"@tailwindcss"}
        verified
      />
      <WidgetSuggestion
        profile
        photoURL={typeScript}
        userName={"TypeScript"}
        email={"@typescript"}
      />
      <WidgetSuggestion
        profile
        photoURL={freeCodeCamp}
        userName={"freeCodeCamp.org"}
        email={"@freeCodeCamp"}
        verified
      />

      <p>Show more</p>
    </div>
  );
}

export default YouMightLike;
