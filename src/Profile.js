import "./Profile.css";

function Profile({ photoURL, userName, Email }) {
  return (
    <div className="profile-container">
      <img src={photoURL} alt={userName} className="profile-img" />

      <div className="name-container">
        <p className="user-name">{userName}</p>
        <p className="email">{Email}</p>
      </div>
    </div>
  );
}

export default Profile;
