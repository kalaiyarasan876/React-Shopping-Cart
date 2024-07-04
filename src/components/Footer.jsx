import React from "react";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section about">
            <h2>About Us</h2>
            <p>
              We are a dedicated team of professionals committed to providing
              top-notch services and innovative solutions to help your business
              grow.
            </p>
          </div>
          <div class="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href={"https://portfoliokalai.netlify.app/"} target="_blank">Home</a>
              </li>
              <li>
                <a href={"https://portfoliokalai.netlify.app/"} target="_blank">About</a>
              </li>
              <li>
                <a href={"https://portfoliokalai.netlify.app/"} target="_blank">Services</a>
              </li>
              <li>
                <a href={"https://portfoliokalai.netlify.app/"} target="_blank">Contact</a>
              </li>
            </ul>
          </div>
          <div class="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: kalaiarasan6380@gmail.com</p>
            <p>Phone: +91 9025374954</p>
          </div>
        </div>
        <div class="footer-bottom">&copy; 2024 | Designed by Kalai</div>
      </footer>
    </div>
  );
}

export default Footer;
