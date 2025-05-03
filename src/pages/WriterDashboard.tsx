// src/pages/WriterDashboard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder for user image - replace with actual source
import userPlaceholder from '../pages/component/assets/profile.png.jpg'; // Create a placeholder or use a real path

// Sample data - replace with actual data fetching later
const sampleArticles = {
  drafted: [
    { id: 'd1', title: 'Understanding CSS Grid', date: 'Oct 10, 2023', status: 'Draft' },
    { id: 'd2', title: 'JavaScript for Beginners', date: 'Oct 5, 2023', status: 'Draft' },
  ],
  published: [
    { id: 'p1', title: 'Mastering Tailwind CSS', date: 'Sep 20, 2023', status: 'Published' },
    { id: 'p2', title: 'React Hooks Deep Dive', date: 'Sep 15, 2023', status: 'Published' },
  ],
  scheduled: [
    { id: 's1', title: 'Next.js Advanced Techniques', date: 'Oct 25, 2023', status: 'Scheduled' },
  ],
};

const WriterDashboard: React.FC = () => {
  return (
    <div className='dashboard-wrapper'> {/* Optional wrapper for potential outer styling */}
      {/* Top Navbar */}
      <header className='dashboard-navbar'>
        <div className='navbar-logo'>
           {/* You can replace text with an actual logo image */}
          <span className='logo-icon'>✎</span> SpeedyBlog
        </div>
        <nav className='navbar-actions'>
          <button className='navbar-button create-new'>Create New Article</button>
          {/* Assuming Dashboard link goes to this page or similar */}
          <Link href="/WriterDashboard" legacyBehavior>
            <a className='navbar-link'>Dashboard</a>
          </Link>
          {/* Logout would likely trigger a function */}
          <button className='navbar-link logout'>Logout</button>
        </nav>
      </header>

      <div className='dashboard-container'>
        {/* Left Sidebar */}
        <aside className='dashboard-sidebar'>
          <div className='sidebar-profile'>
            <Image
              src={userPlaceholder} // Replace with actual user image prop/state
              alt="User profile picture"
              width={60}
              height={60}
              className='profile-image'
            />
            <div className='profile-info'>
              <span className='profile-name'>John Writer</span> {/* Replace with actual data */}
              <span className='profile-email'>john@speedyblog.com</span> {/* Replace */}
            </div>
          </div>
          <nav className='sidebar-nav'>
            {/* These could be Links if they navigate */}
            <a href="#" className='sidebar-link'>Profile</a>
            <a href="#" className='sidebar-link'>Settings</a>
            <a href="#" className='sidebar-link'>Help</a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className='dashboard-content'>
          <h1>Writer Dashboard</h1> {/* Or keep this outside main if preferred */}

          {/* Drafted Articles Section */}
          <section className='articles-section'>
            <h2 className='section-title'>Drafted Articles</h2>
            <table className='articles-table'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleArticles.drafted.map((article) => (
                  <tr key={article.id}>
                    <td>{article.title}</td>
                    <td>{article.date}</td>
                    <td>{article.status}</td>
                    <td className='action-buttons'>
                      <button className='action-button button-edit'>Edit</button>
                      <button className='action-button button-delete'>Delete</button>
                      <button className='action-button button-preview'>Preview</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Published Articles Section */}
          <section className='articles-section'>
            <h2 className='section-title'>Published Articles</h2>
            <table className='articles-table'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleArticles.published.map((article) => (
                  <tr key={article.id}>
                    <td>{article.title}</td>
                    <td>{article.date}</td>
                    <td>{article.status}</td>
                    <td className='action-buttons'>
                      <button className='action-button button-edit'>Edit</button>
                      <button className='action-button button-delete'>Delete</button>
                      <button className='action-button button-preview'>Preview</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Scheduled Articles Section */}
          <section className='articles-section'>
            <h2 className='section-title'>Scheduled Articles</h2>
            <table className='articles-table'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleArticles.scheduled.map((article) => (
                  <tr key={article.id}>
                    <td>{article.title}</td>
                    <td>{article.date}</td>
                    <td>{article.status}</td>
                    <td className='action-buttons'>
                      <button className='action-button button-edit'>Edit</button>
                      <button className='action-button button-delete'>Delete</button>
                      <button className='action-button button-preview'>Preview</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default WriterDashboard;