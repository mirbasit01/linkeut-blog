import React from 'react';
 import Image from 'next/image';
import styles from './Landing.module.css'; // Keep relative for component-specific styles

// Import placeholder images using alias
import techImage from '../component/assets/tech.jpg.png';
import travelImage from '../component/assets/travel.jpg.png';
import culinaryImage from '../component/assets/culinary.jpg.png';
 


// --- Font Awesome Setup ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGlobeAmericas, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

// ... rest of your Landing component code
const Landing: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <Navbar />

        {/* Hero Section */}
      <section
        className={styles.hero}
        // Optional: style={{ backgroundImage: `url(${heroBgImage.src})` }}
      >
        {/* Overlay is optional but helps with text readability over complex backgrounds */}
        <div className={styles.heroOverlay}></div>

        {/* === ADD THIS CONTENT === */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Linkeut Blog</h1>
          <p className={styles.heroSubtitle}>Discover the latest articles and insights</p>
        </div>
        {/* === END OF ADDED CONTENT === */}

      </section>

      {/* Featured Articles Section */}
      <section className={styles.featuredArticles}>
        <h2 className={styles.sectionTitle}>Featured Articles</h2>
        <div className={styles.articlesGrid}>
          {/* Article Card 1 */}
          <div className={styles.articleCard}>
            {/* Use next/image component */}
            <Image // <--- Changed from img
              src={techImage} // <--- Pass the imported object
              alt="Abstract technology concept"
              className={styles.cardImage} // Keep or adjust className as needed
              width={500} // Provide ACTUAL width of your image or desired render width
              height={300} // Provide ACTUAL height of your image or desired render height
              style={{ objectFit: 'cover' }} // Apply object-fit if needed
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>The Future of Tech</h3>
              <p className={styles.cardDescription}>
                Explore how technology is shaping our future with innovations in AI and machine learning.
              </p>
            </div>
          </div>

          {/* Article Card 2 */}
          <div className={styles.articleCard}>
            <Image // <--- Changed from img
              src={travelImage} // <--- Pass the imported object
              alt="Illustration of various travel destinations and modes of transport"
              className={styles.cardImage}
              width={500} // Provide ACTUAL width
              height={300} // Provide ACTUAL height
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Travel the World</h3>
              <p className={styles.cardDescription}>
                Discover breathtaking travel destinations and tips for your next adventure.
              </p>
            </div>
          </div>

          {/* Article Card 3 */}
          <div className={styles.articleCard}>
            <Image // <--- Changed from img
              src={culinaryImage} // <--- Pass the imported object
              alt="Chef preparing food in a kitchen"
              className={styles.cardImage}
              width={500} // Provide ACTUAL width
              height={300} // Provide ACTUAL height
              style={{ objectFit: 'cover' }}
             />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Culinary Delights</h3>
              <p className={styles.cardDescription}>
                Dive into the world of culinary arts and discover delicious recipes and cooking techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
         <h2 className={`${styles.sectionTitle} ${styles.categoriesTitle}`}>Categories</h2>
        <div className={styles.categoriesGrid}>
           {/* Using FontAwesomeIcon component */}
          <div className={styles.categoryItem}>
            <FontAwesomeIcon icon={faLaptopCode} className={styles.categoryIcon} />
            <span className={styles.categoryLabel}>Technology</span>
          </div>
          <div className={styles.categoryItem}>
             <FontAwesomeIcon icon={faGlobeAmericas} className={styles.categoryIcon} />
            <span className={styles.categoryLabel}>Travel</span>
          </div>
          <div className={styles.categoryItem}>
             <FontAwesomeIcon icon={faUtensils} className={styles.categoryIcon} />
            <span className={styles.categoryLabel}>Food</span>
          </div>
        </div>
      </section>

      {/* Explore More Button */}
      <div className={styles.ctaContainer}>
        <button className={styles.ctaButton}>Explore More</button>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;