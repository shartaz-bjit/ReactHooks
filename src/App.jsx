import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home.page";
import CreatePost from "./components/post.create.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
