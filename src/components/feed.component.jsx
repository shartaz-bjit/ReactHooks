import { useContext } from "react";
import Post from "./post.component";
import "./feed.styles.css";
import { PostsContext } from "./home.page";

const Feed = () => {
  const { userPosts, incReact } = useContext(PostsContext);
  return (
    <div className="feed-container">
      {userPosts.map((post, index) => (
        <Post key={index} index={index} post={post} addReact={incReact} />
      ))}
    </div>
  );
};

export default Feed;
