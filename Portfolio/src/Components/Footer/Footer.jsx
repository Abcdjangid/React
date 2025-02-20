import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; {new Date().getFullYear()} CKJ.dev. All Rights Reserved.</p>
      </div>
      <div className="footer-right">
      <a href="https://github.com/Abcdjangid/" className="social-icon" target='blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/chitvan-jangid/" className="social-icon" target='blank'><FaLinkedin /></a>
        <a href="https://www.instagram.com/abcdjangid/" className="social-icon" target='blank'><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
