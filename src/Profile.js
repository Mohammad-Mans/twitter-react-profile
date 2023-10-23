import "./Profile.css";
import VerifiedIcon from "@mui/icons-material/Verified";

function Profile({ photoURL, userName, email, verified }) {
  return (
    <div className="profile-container">
      <img src={photoURL} alt={userName} className="profile-img" />

      <div className="name-container">
        <p className="user-name">
          {userName}
          {verified && <VerifiedIcon />}
        </p>

        <p className="email">{email}</p>
      </div>
    </div>
  );
}

export default Profile;
