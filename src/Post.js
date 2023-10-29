import "./Post.css";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CircleIcon from "@mui/icons-material/Circle";
import PinIcon from "@mui/icons-material/PushPin";
import RepostIcon from "@mui/icons-material/Cached";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShareIcon from "@mui/icons-material/FileUploadOutlined";

function Post({
  type,
  profileName,
  authorLogo,
  authorName,
  authorHandle,
  publishTime,
  content,
  imgURL,
  replies,
  reposts,
  likes,
  views,
}) {
  return (
    <div className="post">
      <div className="type">
        {type === "pinned" && (
          <p>
            <PinIcon /> Pinned
          </p>
        )}
        {type === "repost" && (
          <p>
            <RepostIcon /> {profileName} reposted
          </p>
        )}
      </div>

      <div className="body">
        <img src={authorLogo} alt="author's logo" />

        <div className="main">
          <div className="header">
            <div className="post-author">
              <div className="author-name">{authorName}</div>
              <div className="author-hook">{authorHandle}</div>
              <CircleIcon />
              <div className="publish-time">{publishTime}</div>
            </div>
            <div className="more-icon">
              <MoreHorizIcon className="more" />
            </div>
          </div>

          <div className="content">{content}</div>

          {imgURL && <img src={imgURL} alt="post" />}

          <div className="react-buttons">
            <p className="comment">
              <CommentIcon />
              {replies}
            </p>
            <p className="repost">
              <RepostIcon />
              {reposts}
            </p>
            <p className="like">
              <LikeIcon />
              {likes}
            </p>
            <p className="view">
              <BarChartIcon />
              {views}
            </p>
            <p className="share">
              <ShareIcon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
