import "./ProfileBio.css";

import TwitterFollowButton from "./FollowButton";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

function ProfileBio({
  photoURL,
  coverURL,
  userName,
  handle,
  bio,
  attachment,
  attachmentURL,
  joinedDate,
  followers,
  following,
}) {
  return (
    <div>
      <div className="cover">
        <img src={coverURL} alt="coverimg" />
      </div>

      <div className="profile-bio">
        <div className="top">
          <div className="image">
            <img src={photoURL} alt="profile" />
          </div>

          <div className="actions">
            <MoreHorizIcon />
            <NotificationAddOutlinedIcon />
            <TwitterFollowButton />
          </div>
        </div>
        
        <div className="details">
          <span className="user-name">{userName}</span>
          <span className="handle">{handle}</span>
          <span className="bio">{bio}</span>

          <div className="profile-metadata">
            <div className="attachment">
              {attachment && (
                <>
                  <InsertLinkOutlinedIcon />
                  <a href={attachmentURL} target="blank">
                    {attachment}
                  </a>
                </>
              )}
            </div>
            <div className="joined">
              <CalendarMonthOutlinedIcon />
              <span> Joined {joinedDate}</span>
            </div>
          </div>

          <div className="follows">
            <span className="following">
              <b>{followers || 0}</b> Following
            </span>
            <span className="followers">
              <b>{following || 0}</b> Followers
            </span>
          </div>

          <div className="followed-by">
            Not followed by anyone you are following
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBio;
