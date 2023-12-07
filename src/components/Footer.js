import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
      <div className="coffee-shop-footer">
        <Logo />
        <div className="site-links">
          <nav className="links-container">
            <Link to="about">Explore</Link>
            <Link to="menu">Menu</Link>
            <Link to="visit">Contact Us</Link>
          </nav>
        </div>
        <div className="other">
          <div className="contact-info">
            <p className="address"><span className="icon fas fa-map-marker-alt fa-fw"></span>Manufacturing at : Mondeal Square, SG Highway, Ahmedabad, Gujarat 380015, India</p>
            <p className="phone"><span className="icon fas fa-phone-alt fa-fw"></span> <a href="(+91)9898782049">(+91)9898782049</a></p>
          </div>
          <div className="social-media-links">
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" title="Facebook">
              <span className="fab fa-facebook fa-fw"></span>
            </a>
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" title="Instagram">
              <span className="fab fa-instagram fa-fw"></span>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter" title="Twitter">
              <span className="fab fa-twitter fa-fw"></span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="app-footer">Created by <a href="#" target="_blank"><h3>Parthiv Shah</h3></a> &copy; {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;