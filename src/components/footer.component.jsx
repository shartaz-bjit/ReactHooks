import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Techpack</h4>
            <p>
              Share your tech ideas with the large community, learn from others
              and drive deep into the technology world.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: info@techpack.com</p>
            <p>Phone: +8801757455555</p>
          </div>
          <div className="col-md-4 text-light">
            <h4>Follow Us on</h4>
            <span>Facebook</span>
            <br></br>
            <span>Instagram</span>
            <br></br>
            <span>Youtube</span>
          </div>
        </div>
      </div>
      <div className="mt-2">
        &copy; {new Date().getFullYear()} Techpack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
