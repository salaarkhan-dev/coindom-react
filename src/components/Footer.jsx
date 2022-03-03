function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-content__socials">
          <a href="https://github.com/salaarkhan-dev" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/salaarkhan-dev" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <i className="fa-brands fa-discord"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="footer-content__text">
            <p>Privacy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
