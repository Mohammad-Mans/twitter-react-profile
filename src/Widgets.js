import "./Widgets.css";
import Widget from "./Widget";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

function Widgets({ trendsData, profilesData }) {
  return (
    <div className="widgets-container">
      <SearchBar />
      
      <div className="widgets">
        <Widget data={profilesData} type="profile" />
        <Widget data={trendsData} type="trend" />

        <Footer />
      </div>
    </div>
  );
}

export default Widgets;
