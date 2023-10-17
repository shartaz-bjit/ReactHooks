import React, { useEffect, useState } from "react";
import Feed from "./feed.component";
import Navbar from "./navbar.component";
import { useApi } from "./useApi";

export const PostsContext = React.createContext();

const HomePage = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { loading, data, error, fetchData } = useApi();

  useEffect(() => {
    fetchData("get", "http://localhost:4400/posts");
  }, []);

  useEffect(() => {
    if (data) {
      setUserPosts(data);
    }
  }, [data]);

  const incReact = (index) => {
    const updatedPosts = [...userPosts];
    updatedPosts[index].reactions = (updatedPosts[index].reactions || 0) + 1;
    setUserPosts(updatedPosts);
  };

  return (
    <>
      <Navbar />
      <PostsContext.Provider value={{ userPosts, incReact }}>
        {loading && (
          <div className="alert alert-info" role="alert">
            Loading...
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            Error: {error.message}
          </div>
        )}

        {!loading && !error && <Feed />}
      </PostsContext.Provider>
    </>
  );
};

export default HomePage;
