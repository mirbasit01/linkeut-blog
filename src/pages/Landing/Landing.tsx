// src/pages/Landing.tsx (or wherever your Landing component is)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Make sure Link is imported

// --- Font Awesome Setup ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGlobeAmericas, faUtensils } from '@fortawesome/free-solid-svg-icons';

// Adjust component import paths if Landing.tsx is not directly in src/pages
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

// Import placeholder images (Adjust paths relative to this file if needed)
// Consider placing assets in /public for easier referencing
import techImage from '../component/assets/tech.jpg.png'
import travelImage from '../component/assets/travel.jpg.png';
import culinaryImage from '../component/assets/culinary.jpg.png';

// REMOVE the CSS module import (e.g., import styles from './Landing.module.css';)

// NOTE: Ensure the CSS rules from your original Landing.module.css
// are now in src/styles/landing.css (or similar) and use standard selectors
// like .hero, .heroOverlay, etc. Also, ensure this file is imported
// globally in src/pages/_app.tsx.

const Landing: React.FC = () => {
  return (
    // Use global class name 'landingPage'
    <div className='landingPage'>
      <Navbar />

      {/* Hero Section */}
      <section
        className='hero'
        // Optional: style={{ backgroundImage: `url(...)` }} if needed
      >
        {/* Use global class name 'heroOverlay' */}
        <div className='heroOverlay'></div>

        {/* Use global class name 'heroContent' */}
        <div className='heroContent'>
          {/* Use global class name 'heroTitle' */}
          <h1 className='heroTitle'>Welcome to Linkeut Blog</h1>
          {/* Use global class name 'heroSubtitle' */}
          <p className='heroSubtitle'>Discover the latest articles and insights</p>
        </div>
      </section>

      {/* Featured Articles Section */}
      {/* Use global class name 'featuredArticles' */}
      <section className='featuredArticles'>
        {/* Use global class name 'sectionTitle' */}
        <h2 className='sectionTitle'>Featured Articles</h2>
        {/* Use global class name 'articlesGrid' */}
        <div className='articlesGrid'>

          

          {/* Article Card 2 */}
          {/* Use global class name 'articleCard' */}
                                             <Link href='/BlogDetail'>

          <div className='articleCard'>
            <Image
              src={travelImage}
              alt="Illustration of various travel destinations and modes of transport"
              // Use global class name 'cardImage'
              className='cardImage'
              width={500}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            {/* Use global class name 'cardContent' */}
            <div className='cardContent'>
              {/* Use global class name 'cardTitle' */}
              <h3 className='cardTitle'>Travel the World</h3>
              {/* Use global class name 'cardDescription' */}
              <p className='cardDescription'>
                Discover breathtaking travel destinations and tips for your next adventure.
              </p>
            </div>
          </div>
                         </Link>

                                   <Link href='/BlogDetail'>

           <div className='articleCard'>
            <Image
              src={travelImage}
              alt="Illustration of various travel destinations and modes of transport"
              // Use global class name 'cardImage'
              className='cardImage'
              width={500}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            {/* Use global class name 'cardContent' */}
            <div className='cardContent'>
              {/* Use global class name 'cardTitle' */}
              <h3 className='cardTitle'>Travel the World</h3>
              {/* Use global class name 'cardDescription' */}
              <p className='cardDescription'>
                Discover breathtaking travel destinations and tips for your next adventure.
              </p>
            </div>
          </div> 
        
        
               </Link>


          {/* Article Card 3 */}
           {/* Use global class name 'articleCard' */}
           
                         <Link href='/BlogDetail'>

          <div className='articleCard'>
            <Image
              src={culinaryImage}
              alt="Chef preparing food in a kitchen"
              // Use global class name 'cardImage'
              className='cardImage'
              width={500}
              height={300}
              style={{ objectFit: 'cover' }}
             />
             {/* Use global class name 'cardContent' */}
            <div className='cardContent'>
              {/* Use global class name 'cardTitle' */}
              <h3 className='cardTitle'>Culinary Delights</h3>
              {/* Use global class name 'cardDescription' */}
            
    {/* <p> itself becomes clickable */}
    <p className='cardDescription'>
        Dive into the world of culinary arts and discover delicious recipes and cooking techniques.
    </p>
            </div>
          </div>
           </Link>

        </div>
      </section>

      {/* Categories Section */}
       {/* Use global class name 'categories' */}
      <section className='categories'>
         {/* Use combined global class names */}
         <h2 className='sectionTitle categoriesTitle'>Categories</h2>
         {/* Use global class name 'categoriesGrid' */}
        <div className='categoriesGrid'>

          {/* Use global class name 'categoryItem' */}
          <div className='categoryItem'>
            {/* Use global class name 'categoryIcon' */}
            <FontAwesomeIcon icon={faLaptopCode} className='categoryIcon' />
            {/* Use global class name 'categoryLabel' */}
            <span className='categoryLabel'>Technology</span>
          </div>

          {/* Use global class name 'categoryItem' */}
          <div className='categoryItem'>
             {/* Use global class name 'categoryIcon' */}
             <FontAwesomeIcon icon={faGlobeAmericas} className='categoryIcon' />
             {/* Use global class name 'categoryLabel' */}
            <span className='categoryLabel'>Travel</span>
          </div>

           {/* Use global class name 'categoryItem' */}
          <div className='categoryItem'>
             {/* Use global class name 'categoryIcon' */}
             <FontAwesomeIcon icon={faUtensils} className='categoryIcon' />
             {/* Use global class name 'categoryLabel' */}
            <span className='categoryLabel'>Food</span>
          </div>
        </div>
      </section>

      {/* Explore More Button */}
      {/* Use global class name 'ctaContainer' */}
      <div className='ctaContainer'>
         {/* Use global class name 'ctaButton' */}
        <button className='ctaButton'>Explore More</button>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;