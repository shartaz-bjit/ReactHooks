import { createContext, useEffect, useState } from "react";
import Feed from "./feed.component";
import Footer from "./footer.component";
import Navbar from "./navbar.component";
import axios from "axios";

export const PostsContext = createContext();

const HomePage = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/posts").then((response) => {
      setUserPosts(response.data.posts);
    });
  }, []);

  const incReact = (index) => {
    const updatedPosts = [...userPosts];
    updatedPosts[index].reactions = (updatedPosts[index].reactions || 0) + 1;
    setUserPosts(updatedPosts);
  };

  return (
    <>
      <Navbar />
      <PostsContext.Provider value={{ userPosts, incReact }}>
        <Feed />
      </PostsContext.Provider>
      <Footer />
    </>
  );
};

export default HomePage;
