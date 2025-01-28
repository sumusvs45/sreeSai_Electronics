import instaImg1 from "../../src/assets/instagram-1.jpg";
import instaImg2 from "../../src/assets/instagram-2.jpg";
import instaImg3 from "../../src/assets/instagram-3.jpg";
import instaImg4 from "../../src/assets/instagram-4.jpg";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>Contact Info</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
          </p>
          123 India Andhrapradesh
          <p>
            <span>
              <i className="ri-mail-line"></i>
            </span>
            Sree Sai Electronics
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            91-12000004580
          </p>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Work With Us</a>
         
        </div>
        <div className="footer__col">
          <h4>Useful Links</h4>
          <a href="#">Help</a>
        
        </div>
        <div className="footer__col">
        <h4>Our Services</h4>
          <a href="#">Security</a>
          <a href="#">Communication</a>
          <a href="#">Displays</a>
          <a href="#">Solution</a>
          <a href="#">Computers</a>

        
        </div>
        <div className="footer__bar text-center">
          Copyright @ 2025 by zing.All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
