import '../styles/navbar.scss';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">NijiAPI</div>
      <div className="navbar-links">
        <a href="https://docs.nijiapi.xyz">Documentation</a>
        <a href="https://discord.gg/RZSWAaUHjV" target='_blank' rel="noreferrer">Discord</a>
      </div>
    </nav>
  );
};

export default Navbar;
