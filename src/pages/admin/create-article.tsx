// src/pages/admin/create-article.tsx
import React from 'react';
import ArticleEditor from '../component/ArticleEditor/ArticleEditor';

// --- ADD THIS IMPORT LINE ---
 // ---------------------------

// Optional: Add layout, authentication checks, etc.
// import AdminLayout from '../../component/Layout/AdminLayout';

const CreateArticlePage: React.FC = () => {
  return (
    // Optional: wrap with a layout component
    // <AdminLayout>
        <div> 
          <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>Create New Article</h1>
          <ArticleEditor /> 
        </div>
    // </AdminLayout>
  );
};

export default CreateArticlePage;