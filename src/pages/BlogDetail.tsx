// src/pages/BlogDetail.tsx
import React from 'react';
import Image from 'next/image';
// Link component is no longer used in the hardcoded sidebar, but keep if needed elsewhere
// import Link from 'next/link';
import Navbar from './component/Navbar/Navbar'; // Adjust path if needed
import Footer from './component/Footer/Footer'; // Adjust path if needed

// Import images (Ensure paths are correct or move images to /public)
import travelImage from '../pages/component/assets/travel.jpg.png';
import travelImageq from '../pages/component/assets/tech.jpg.png'; // Image for related articles

// NOTE: Ensure the CSS rules are in src/styles/BlogDetail.css (or similar)
// and globally imported in src/pages/_app.tsx

const BlogDetailPage = () => {

  // No relatedArticles array needed for hardcoded version

  return (
    // Use 'pageContainer' class
    <div className='pageContainer'>
      <Navbar />

      {/* Use 'mainContent' class as the flex container */}
      <main className='mainContent'>

        {/* Left Column: Article Details */}
        {/* Use 'leftColumn' class here - direct child of mainContent */}
        <div className='leftColumn'>
          <article>
            {/* Use 'articleTitle' class */}
            <h1 className='articleTitle'>The Beauty of Autumn: A Season of Change</h1>

            {/* Use 'featuredImageContainer' class */}
            <div className='featuredImageContainer'>
              <Image
                src={travelImage} // Using imported image
                alt={'Autumn leaves in a park'}
                layout="responsive" // Make image scale with container
                width={800}        // Provide original width (for aspect ratio)
                height={450}       // Provide original height (for aspect ratio)
                priority           // Load this image eagerly
                className='featuredImage' // Apply custom styles if needed (beyond layout)
              />
            </div>

            {/* Use 'articleBody' class */}
            <div className='articleBody'>
               <p>
                  Autumn is a magical season, a time when nature wears its most stunning colors. Trees shed their leaves in a vibrant display of reds, yellows, and oranges, creating a breathtaking landscape that captivates the soul. In this article, we'll explore the wonders of autumn, from its crisp air to the cultural traditions it inspires. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
            </div>

            {/* Use 'actionButtonsContainer' class */}
            <div className='actionButtonsContainer'>
              {/* Use 'actionButton' class */}
              <button className='actionButton'>Like</button>
              <button className='actionButton'>Share</button>
              <button className='actionButton'>Comment</button>
            </div>

            {/* Use 'separator' class */}
            <hr className='separator' />

            {/* Use 'authorSection' class */}
            <div className='authorSection'>
              {/* Use 'sectionTitle' class */}
              <h2 className='sectionTitle'>About the Author</h2>
              <p>Written by Jane Autumn, a nature enthusiast and writer who loves to explore the seasons' changes.</p>
            </div>
          </article>
        </div>

        {/* Right Column: Related Articles Sidebar (Hardcoded) */}
        {/* Use 'sidebar' class - direct child of mainContent */}
        {/* --- START OF HARDCODED SIDEBAR --- */}
        <aside className='sidebar'>
           <h2 className='sectionTitle'>Related Articles</h2>

           {/* --- Hardcoded Related Article 1 --- */}
           <div className='relatedArticleItem'> {/* Container for one related article */}
              {/* Simple anchor tag for now */}
              <a className='relatedArticleLink' href="/blog/winter-guide">
                 <div className='relatedThumbnail'>
                    <Image
                      src={travelImageq} // Use the imported image variable
                      alt="Embracing Winter: A Guide to Enjoying the Cold"
                      width={80}
                      height={60}
                      objectFit="cover"
                    />
                 </div>
                 <span className='relatedTitle'>Embracing Winter: A Guide to Enjoying the Cold</span>
               </a>
           </div>
           {/* --- End Hardcoded Related Article 1 --- */}


           {/* --- Hardcoded Related Article 2 --- */}
           <div className='relatedArticleItem'> {/* Container for one related article */}
              <a className='relatedArticleLink' href="/blog/spring-awakening"> {/* Simple anchor tag */}
                 <div className='relatedThumbnail'>
                    <Image
                      src={travelImageq} // Use the imported image variable
                      alt="Spring Awakening: The Rebirth of Nature"
                      width={80}
                      height={60}
                      objectFit="cover"
                    />
                 </div>
                 <span className='relatedTitle'>Spring Awakening: The Rebirth of Nature</span>
               </a>
           </div>
           {/* --- End Hardcoded Related Article 2 --- */}


           {/* --- Hardcoded Related Article 3 --- */}
           <div className='relatedArticleItem'> {/* Container for one related article */}
              <a className='relatedArticleLink' href="/blog/summer-adventures"> {/* Simple anchor tag */}
                 <div className='relatedThumbnail'>
                    <Image
                      src={travelImageq} // Use the imported image variable
                      alt="Summer Adventures: Exploring the Great Outdoors"
                      width={80}
                      height={60}
                      objectFit="cover"
                    />
                 </div>
                 <span className='relatedTitle'>Summer Adventures: Exploring the Great Outdoors</span>
               </a>
           </div>
           {/* --- End Hardcoded Related Article 3 --- */}

         </aside>
         {/* --- END OF HARDCODED SIDEBAR --- */}

      </main>

      <Footer/>
    </div>
  );
};

export default BlogDetailPage;