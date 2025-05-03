// src/component/Navbar/Navbar.tsx (or .js)
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
// **Make sure Font Awesome is configured correctly in your project**
// (e.g., in _app.js or by installing packages like @fortawesome/react-fontawesome)

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksId = "navbarLinksContent";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    // Close menu only if it's currently open
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Using 768px from original request
        if (menuOpen) { // Only change state if needed
            setMenuOpen(false);
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]); // Add menuOpen dependency

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink} onClick={closeMenu}>
          {/* Using original yellow color via CSS */}
          <span className={styles.logoIcon}>▶</span>
          Linkeut Blog
        </Link>
      </div>

      {/* Toggle Button */}
          <button
        className={styles.mobileMenuToggle} // Keep using CSS module for base styles
        type="button"
        onClick={toggleMenu}
        aria-controls={navLinksId}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        style={{
          // Set background color directly to your yellow
          backgroundColor: '#e6c300',
          // Set icon color (ensure good contrast with yellow)
          color: '#333', // Dark grey/black provides good contrast
          // Optional: Add padding if needed via inline styles, or use CSS module
          // padding: '0.5rem 0.8rem',
          // Optional: Add border-radius if you want rounded corners
          borderRadius: '4px',
          // Ensure border is removed if you added one in CSS module
          border: 'none',
        }}
      >
        {/* Font Awesome Icons */}
        {menuOpen ? (
          <i className="fas fa-times"></i> 
        ) : (
          <i className="fas fa-bars"></i> 
        )}
      </button>

      {/* Collapsible Links */}
      <ul
        className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}
        id={navLinksId}
      >
        {/* Add onClick={closeMenu} to ensure menu closes on mobile navigation */}
        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
        <li><Link href="/about" onClick={closeMenu}>About</Link></li>
        <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        <li>
          <Link href="/login" className={styles.login} onClick={closeMenu}>
            Login
          </Link>
        </li>
        <li>
          <Link href="/signup" className={styles.signup} onClick={closeMenu}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;