/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import moment from "moment-timezone";

const Post = ({ index, post, addReact }) => {
  const [showFullText, setShowFullText] = useState(false);
  const formattedDate = moment(post.postTime).format("h:mm A, D MMMM YYYY");

  const toggleReadMore = (e) => {
    console.log("Toggled read more");
    setShowFullText(!showFullText);
    e.stopPropagation();
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title text-muted">{post.title}</h5>
          <p className="text-secondary">{formattedDate}</p>
        </div>
        <hr />
        <h6 className="card-subtitle mb-2 text-primary">{post.postedBy}</h6>
        <p className="card-text" onClick={toggleReadMore}>
          {showFullText ? post.body : post.body.slice(0, 500)}
          {post.body.length > 500 && !showFullText && (
            <span>
              <span
                className="read-more-link"
                onClick={toggleReadMore}
                style={{ cursor: "pointer", fontWeight: "bold" }}
              >
                {" "}
                ...read more
              </span>
            </span>
          )}
        </p>
        <p className="text-right">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => addReact(index)}
          />
          {post.reactions === 0 || post.reactions == null
            ? " No reactions yet"
            : ` ${post.reactions} reactions`}
        </p>
      </div>
    </div>
  );
};

export default Post;
