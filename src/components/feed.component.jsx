import { useContext } from "react";
import Post from "./post.component";
import "./feed.styles.css";
import { PostsContext } from "./home.page";

const Feed = () => {
  // Accessing context API
  const { userPosts, incReact } = useContext(PostsContext);

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get("https://dummyjson.com/posts").then((response) => {
  //     console.log(response.data.posts);
  //     setPosts(response.data.posts);
  //   });
  // }, []);

  // const addReact = (index) => {
  //   const updatedPosts = [...posts];
  //   updatedPosts[index].reactions = (updatedPosts[index].reactions || 0) + 1;
  //   setPosts(updatedPosts);
  // };

  return (
    <div className="feed-container">
      {/* Ues of map */}
      {userPosts.map((post, index) => (
        <Post key={index} index={index} post={post} addReact={incReact} />
      ))}
    </div>
  );
};

export default Feed;
