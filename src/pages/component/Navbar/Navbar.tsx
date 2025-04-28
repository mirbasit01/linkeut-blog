import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>▶</span> {/* Simple icon placeholder */}
        {/* SpeedyBlog */}
        Linkeut Blog
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        {/* <li><a href="/login" className={styles.login}></a></li> */}
        <li>
  {/* No 'legacyBehavior', no nested 'a' tag */}
  <Link href="/login" className={styles.signup}>
    Login{/* The text content is the direct child */}
  </Link>
</li>
        <li>
 <Link href="/signup" className={styles.signup}>
    Sign Up{/* The text content is the direct child */}
  </Link>

            {/* <a href="#" className={styles.signup}>Sign Up</a> */}
            
            </li>



      </ul>
      {/* Basic Mobile Menu Toggle (Optional - needs JS logic) */}
      <button className={styles.mobileMenuToggle} aria-label="Toggle menu">
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;