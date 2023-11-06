import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ab asperiores quidem! Rem, 
            totam vel ex veniam laudantium ab eaque aliquid maxime dolores officiis consectetur 
            repellendus eos amet odio minus.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span className='flex flex-row gap-4'>
            <a href="https://github.com/chavarc97">
              <GitHubIcon />
            </a>
            <a href="www.linkedin.com/in/salvador-rodriguez-09953a241">
              <LinkedInIcon />
            </a>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">OBLICUO</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>

      </div>
    </div>
  );
};

export default Footer;