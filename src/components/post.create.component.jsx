import customAxios from "./axiosInstance";
import Navbar from "./navbar.component";
import { useState } from "react";

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    body: "",
    postedBy: "",
    postTime: new Date().toISOString(),
  });
  const [isPostCreated, setIsPostCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await customAxios.post("/posts", post);

      if (response.status === 200) {
        setIsPostCreated(true);
        setPost({
          title: "",
          body: "",
          postedBy: "",
          postTime: new Date().toISOString(),
        });
      } else {
        alert("Error creating post");
      }
      setLoading(false);
    } catch (error) {
      console.error("Network error:", error);
      setError(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Create a New Post</h2>
        {loading && <div className="alert alert-info">Creating post...</div>}

        {isPostCreated && (
          <div className="alert alert-success">Post created successfully!</div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={post.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Post Content:</label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              value={post.body}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postedBy">Posted By:</label>
            <input
              type="text"
              className="form-control"
              id="postedBy"
              name="postedBy"
              value={post.postedBy}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
        </form>
      </div>
      <br />
    </>
  );
}

export default CreatePost;
