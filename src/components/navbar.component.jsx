import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="position-static navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        padding: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginBottom: "15px",
        position: "sticky",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
    >
      <a className="navbar-brand" href="/">
        TechPack
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {" "}
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          {" "}
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <Link to="/create-post" className="nav-link">
              Create Post
            </Link>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="#">
              Messages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {" "}
              Notifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Trendings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              More
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
