import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>▶</span> {/* Simple icon placeholder */}
        SpeedyBlog
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#" className={styles.login}>Login</a></li>
        <li><a href="#" className={styles.signup}>Sign Up</a></li>
      </ul>
      {/* Basic Mobile Menu Toggle (Optional - needs JS logic) */}
      <button className={styles.mobileMenuToggle} aria-label="Toggle menu">
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;