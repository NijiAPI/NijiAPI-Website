import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/footer.scss';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© 2025 NijiAPI. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/NijiAPI" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.patreon.com/gonzyuiDev" target="_blank" rel="noopener noreferrer">
            Patreon
          </a>
        </div>
        <FaArrowUp className="scroll-to-top" onClick={scrollToTop} />
      </div>
    </footer>
  );
};

export default Footer;
