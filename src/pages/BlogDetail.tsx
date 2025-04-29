// src/pages/BlogDetail.tsx
import React from 'react';
// No need for useRouter for this specific setup
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogDetail.module.css'; // Import the CSS module
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

// Import your Navbar and Footer components (adjust paths if needed)
 

// --- Placeholder Data (This page will ALWAYS show this specific data) ---
const article = {
  title: 'The Beauty of Autumn: A Season of Change',
  imageUrl: '/autumn-leaves.jpg', // Make sure this image exists in /public
  content: `Autumn is a magical season, a time when nature wears its most stunning colors. Trees shed their leaves in a vibrant display of reds, yellows, and oranges, creating a breathtaking landscape that captivates the soul. In this article, we'll explore the wonders of autumn, from its crisp air to the cultural traditions it inspires. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  author: {
    name: 'Jane Autumn',
    bio: 'Written by Jane Autumn, a nature enthusiast and writer who loves to explore the seasons\' changes.',
  },
};

const relatedArticles = [
  // Example: Links still need slugs even if this page isn't dynamic
  { slug: 'winter-guide', title: 'Embracing Winter: A Guide to Enjoying the Cold', imageUrl: '/related-winter.jpg' },
  { slug: 'spring-awakening', title: 'Spring Awakening: The Rebirth of Nature', imageUrl: '/related-spring.jpg' },
  { slug: 'summer-adventures', title: 'Summer Adventures: Exploring the Great Outdoors', imageUrl: '/related-summer.jpg' },
];
// --- End Placeholder Data ---


const BlogDetailPage: React.FC = () => {
  // Since this page isn't dynamic based on URL params,
  // we directly use the hardcoded 'article' object.

  return (
    <div className={styles.pageContainer}>
      {/* Note: You might need a different Navbar variant */}
      <Navbar />

      <main className={styles.mainContent}>
        {/* Left Column: Article Details */}
        <div className={styles.leftColumn}>
          <article>
            <h1 className={styles.articleTitle}>{article.title}</h1>

            <div className={styles.featuredImageContainer}>
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={800} // Adjust actual intrinsic width
                height={450} // Adjust actual intrinsic height
                priority
                className={styles.featuredImage}
              />
            </div>

            <div className={styles.articleBody}>
               {/* Simple paragraph rendering */}
               {article.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
               ))}
            </div>

            <div className={styles.actionButtonsContainer}>
              <button className={styles.actionButton}>Like</button>
              <button className={styles.actionButton}>Share</button>
              <button className={styles.actionButton}>Comment</button>
            </div>

            <hr className={styles.separator} />

            <div className={styles.authorSection}>
              <h2 className={styles.sectionTitle}>About the Author</h2>
              <p>{article.author.bio}</p>
            </div>
          </article>
        </div>

        {/* Right Column: Related Articles Sidebar */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sectionTitle}>Related Articles</h2>
          <ul className={styles.relatedArticlesList}>
            {relatedArticles.map((relatedArticle) => (
              <li key={relatedArticle.slug} className={styles.relatedArticleItem}>
                {/* These links WILL require a dynamic route page later */}
                <Link href={`/blog/${relatedArticle.slug}`} legacyBehavior>
                  <a className={styles.relatedArticleLink}>
                    <div className={styles.relatedThumbnail}>
                       <Image
                         src={relatedArticle.imageUrl}
                         alt={relatedArticle.title}
                         width={80}
                         height={60}
                         objectFit="cover"
                       />
                    </div>
                    <span className={styles.relatedTitle}>{relatedArticle.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </main>

      <Footer/>
    </div>
  );
};

export default BlogDetailPage;