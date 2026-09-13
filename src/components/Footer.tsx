const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-icon">DS</span>

              <span className="brand-text">
                Dev <span>Stack</span>
              </span>
            </a>

            <p>
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="social-links">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>PRODUCT</h4>
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-column">
            <h4>LEGAL</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;