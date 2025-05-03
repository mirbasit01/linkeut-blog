// // src/component/ArticleEditor/ArticleEditor.tsx
// import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
// import Image from 'next/image';

// // --- PLACEHOLDERS ---
// // Replace with your actual Rich Text Editor
// const RichTextEditorPlaceholder = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => (
//   <textarea
//     className='editor-textarea editor-description-input' // Use specific class
//     rows={18} // Adjust height as needed
//     placeholder="Write your article content here..."
//     value={value}
//     onChange={(e) => onChange(e.target.value)}
//   />
// );
// // Example: Simple Tag Input Placeholder (replace with a real library like react-tag-input)
// const TagInputPlaceholder = ({ value, onChange }: { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
//     <input
//         type="text"
//         className='editor-input'
//         placeholder='Add tags, comma-separated'
//         value={value}
//         onChange={onChange}
//         name="categories" // Ensure name matches state key
//     />
// );
// // --------------------

// interface FormData {
//   title: string;
//   description: string;
//   authorName: string;
//   authorBio: string;
//   socialTwitter: string;
//   socialLinkedIn: string;
//   socialGithub: string;
//   imageFile: File | null;
//   imagePreviewUrl: string | null;
//   status: 'Draft' | 'Published' | 'Scheduled'; // Added status
//   categories: string; // Simple string for comma-separated tags
// }

// const ArticleEditor: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     title: '',
//     description: '',
//     authorName: '',
//     authorBio: '',
//     socialTwitter: '',
//     socialLinkedIn: '',
//     socialGithub: '',
//     imageFile: null,
//     imagePreviewUrl: null,
//     status: 'Draft', // Default status
//     categories: '',
//   });

//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDescriptionChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, description: value }));
//   };

//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       // Optional: Add file size/type validation here
//       setFormData((prev) => ({
//         ...prev,
//         imageFile: file,
//         imagePreviewUrl: URL.createObjectURL(file),
//       }));
//       // Clear the input value so the same file can be selected again if needed
//       if(e.target) e.target.value = '';
//     }
//   };

//   const triggerImageUpload = () => {
//     fileInputRef.current?.click();
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Submitting Article Data:', {
//         title: formData.title,
//         description: formData.description, // In real app, this might be HTML/Markdown
//         status: formData.status,
//         categories: formData.categories.split(',').map(tag => tag.trim()).filter(tag => tag), // Basic tag parsing
//         author: {
//             name: formData.authorName,
//             bio: formData.authorBio,
//             socials: {
//                 twitter: formData.socialTwitter,
//                 linkedin: formData.socialLinkedIn,
//                 github: formData.socialGithub,
//             }
//         },
//         imageFile: formData.imageFile // Handle upload separately
//     });
//     alert('Article data logged to console! (Check developer tools)');
//   };

//   return (
//     <div className='article-editor-container enhanced-editor'>
//       <form onSubmit={handleSubmit} className='editor-form'>

//         {/* --- Top Row: Main Content & Sidebar --- */}
//         <div className='editor-top-row'>

//           {/* --- Main Content Column --- */}
//           <div className='editor-main-column'>
//             <div className='editor-card main-content-card'> {/* Optional card styling */}
//               {/* Title Input */}
//               <div className='editor-section'>
//                 <label htmlFor='title' className='editor-label sr-only'>Article Title</label>
//                 <input
//                   type='text'
//                   id='title'
//                   name='title'
//                   className='editor-input editor-title-input' // Larger title input
//                   placeholder='Article Title...'
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   required
//                   aria-label="Article Title"
//                 />
//               </div>

//               {/* Content Area with Toolbar Placeholder */}
//               <div className='editor-section content-section'>
//                 <div className='editor-toolbar-placeholder'>
//                   {/* Placeholder: Add actual editor toolbar buttons here (Bold, Italic, etc.) */}
//                   <span>B</span> <span>I</span> <span>U</span> <span>Link</span> <span>H2</span>
//                 </div>
//                 {/* <label htmlFor='description' className='editor-label sr-only'>Article Content</label> */}
//                  {/* --- Replace with your actual Rich Text Editor Component --- */}
//                 <RichTextEditorPlaceholder
//                   value={formData.description}
//                   onChange={handleDescriptionChange}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* --- Sidebar Column --- */}
//           <div className='editor-sidebar-column'>
//             {/* Publish Card */}
//             <div className='editor-card sidebar-card'>
//               <h3 className='editor-section-title'>Publish Settings</h3>
//               <div className='editor-section'>
//                 <label htmlFor='status' className='editor-label'>Status</label>
//                 <select
//                   id="status"
//                   name="status"
//                   className='editor-input' // Use input styling for select
//                   value={formData.status}
//                   onChange={handleInputChange}
//                 >
//                   <option value="Draft">Draft</option>
//                   <option value="Published">Published</option>
//                   <option value="Scheduled">Scheduled</option>
//                 </select>
//               </div>
//                {/* Add more settings like visibility, schedule date etc. here */}
//               <div className='editor-actions'>
//                  <button type='submit' className='editor-button button-primary'>
//                     Save / Update
//                  </button>
//                  {/* Add maybe a "Preview" button */}
//               </div>
//             </div>

//             {/* Image Upload Card */}
//             <div className='editor-card sidebar-card'>
//                <h3 className='editor-section-title'>Featured Image</h3>
//                <div className='editor-section no-margin-bottom'> {/* Remove bottom margin for tight fit */}
//                   <div className='image-upload-area' onClick={triggerImageUpload} title="Upload featured image">
//                     <input
//                       type='file'
//                       accept='image/*'
//                       onChange={handleImageChange}
//                       ref={fileInputRef}
//                       className='image-upload-input'
//                       aria-label="Upload featured image"
//                     />
//                     {formData.imagePreviewUrl ? (
//                       <Image
//                           src={formData.imagePreviewUrl}
//                           alt="Selected image preview"
//                           fill // Use fill layout
//                           className='image-preview'
//                           style={{ objectFit: 'cover' }} // Style needed with fill
//                       />
//                     ) : (
//                       <div className='image-upload-placeholder'>
//                         {/* Add an Icon here e.g., using FontAwesome */}
//                         <span>🖼️</span>
//                         <span>Upload Image</span>
//                         <small>(Click to browse)</small>
//                       </div>
//                     )}
//                   </div>
//                   {formData.imagePreviewUrl && (
//                       <button type="button" onClick={() => setFormData(prev => ({...prev, imageFile: null, imagePreviewUrl: null}))} className="editor-button button-link remove-image-btn">
//                           Remove Image
//                       </button>
//                   )}
//                </div>
//             </div>

//             {/* Categories/Tags Card */}
//              <div className='editor-card sidebar-card'>
//                <h3 className='editor-section-title'>Categories / Tags</h3>
//                 <div className='editor-section no-margin-bottom'>
//                     <label htmlFor='categories' className='editor-label sr-only'>Categories or Tags</label>
//                     {/* Replace with a proper Tag Input component */}
//                     <TagInputPlaceholder value={formData.categories} onChange={handleInputChange} />
//                 </div>
//             </div>

//           </div> {/* End Sidebar Column */}
//         </div> {/* End Top Row */}

//         {/* --- Bottom Row: Author Details --- */}
//         <div className='editor-bottom-row'>
//           <div className='editor-card author-details-card'>
//              <h3 className='editor-section-title'>Author Details</h3>
//              <div className='author-fields-grid'> {/* Use grid for better layout */}
//                 {/* Author Name */}
//                 <div className='editor-section'>
//                     <label htmlFor='authorName' className='editor-label'>Author Name</label>
//                     <input
//                         type='text'
//                         id='authorName'
//                         name='authorName'
//                         className='editor-input'
//                         placeholder='Displayed author name'
//                         value={formData.authorName}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 {/* Author Bio */}
//                 <div className='editor-section'>
//                     <label htmlFor='authorBio' className='editor-label'>Author Bio (Optional)</label>
//                     <textarea
//                         id='authorBio'
//                         name='authorBio'
//                         className='editor-textarea'
//                         rows={3}
//                         placeholder='Short introduction about the author...'
//                         value={formData.authorBio}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 {/* Social Links */}
//                  <div className='editor-section'>
//                      <label className='editor-label'>Social Links (Optional)</label>
//                      <input type='url' name='socialTwitter' className='editor-input social-input' placeholder='Twitter URL' value={formData.socialTwitter} onChange={handleInputChange} />
//                      <input type='url' name='socialLinkedIn' className='editor-input social-input' placeholder='LinkedIn URL' value={formData.socialLinkedIn} onChange={handleInputChange} />
//                      <input type='url' name='socialGithub' className='editor-input social-input' placeholder='GitHub URL' value={formData.socialGithub} onChange={handleInputChange} />
//                  </div>
//              </div>
//           </div>
//         </div> {/* End Bottom Row */}

//       </form>
//     </div>
//   );
// };

// export default ArticleEditor;
// src/component/ArticleEditor/ArticleEditor.tsx
import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
 import dynamic from 'next/dynamic'
// --- IMPORT ReactQuill ---
// Removed static import of ReactQuill to avoid conflict with dynamic import
import 'react-quill/dist/quill.snow.css'; // Import Quill styles (includes toolbar)
// src/component/ArticleEditor/ArticleEditor.tsx
 import Image from 'next/image';
// import dynamic from 'next/dynamic' // <-- THIS IS COMMENTED OUT OR MISSING
 // --- IMPORT ReactQuill ---
 import 'react-quill/dist/quill.snow.css';
// --- REMOVE RichTextEditorPlaceholder ---
// const RichTextEditorPlaceholder = (...) => { ... }; // DELETE THIS

// Example: Simple Tag Input Placeholder (replace with a real library like react-tag-input)

const TagInputPlaceholder = ({ value, onChange }: { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <input
        type="text"
        className='editor-input'
        placeholder='Add tags, comma-separated'
        value={value}
        onChange={onChange}
        name="categories" // Ensure name matches state key
    />
);
// --------------------

interface FormData {
  title: string;
  description: string; // This will now store HTML from Quill
  authorName: string;
  authorBio: string;
  socialTwitter: string;
  socialLinkedIn: string;
  socialGithub: string;
  imageFile: File | null;
  imagePreviewUrl: string | null;
  status: 'Draft' | 'Published' | 'Scheduled';
  categories: string;
}
// --- Dynamically import ReactQuill, disable SSR ---
const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false, // <-- PREVENTS SERVER-SIDE RENDERING OF THIS COMPONENT
    loading: () => <p>Loading editor...</p> // Optional loading indicator
});

const ArticleEditor: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '', // Initial state is an empty string
    authorName: '',
    authorBio: '',
    socialTwitter: '',
    socialLinkedIn: '',
    socialGithub: '',
    imageFile: null,
    imagePreviewUrl: null,
    status: 'Draft',
    categories: '',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // This function now receives HTML content directly from Quill's onChange
  const handleDescriptionChange = (value: string) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        imagePreviewUrl: URL.createObjectURL(file),
      }));
       if(e.target) e.target.value = '';
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting Article Data:', {
        // ... (rest of the data logging is the same) ...
        description: formData.description, // This is now HTML content
         // ...
    });
    alert('Article data logged to console! (Check developer tools)');
  };

  // --- Quill Editor Modules Configuration (Optional but common) ---
  // You can customize the toolbar here
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }], // Headers
      ['bold', 'italic', 'underline', 'strike'], // Basic formatting
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], // Lists & Indent
      ['link', 'image', 'blockquote', 'code-block'], // Links, images, blocks
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'] // remove formatting button
    ],
     // Consider adding handlers for image uploads if needed:
     // handlers: { image: imageHandler }
  };

  const quillFormats = [ // List of formats Quill should handle
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image', 'color', 'background', 'align'
  ];
  // ---------------------------------------------------------------

  return (
    <div className='article-editor-container enhanced-editor'>
      <form onSubmit={handleSubmit} className='editor-form'>
        <div className='editor-top-row'>
          <div className='editor-main-column'>
            <div className='editor-card main-content-card'>
              {/* Title Input */}
              <div className='editor-section'>
                {/* ... title input ... */}
                 <label htmlFor='title' className='editor-label sr-only'>Article Title</label>
                 <input
                   type='text'
                   id='title'
                   name='title'
                   className='editor-input editor-title-input'
                   placeholder='Article Title...'
                   value={formData.title}
                   onChange={handleInputChange}
                   required
                   aria-label="Article Title"
                 />
              </div>

              {/* --- REPLACE Placeholder with ReactQuill --- */}
              <div className='editor-section content-section quill-wrapper'> {/* Add wrapper class */}
                 {/* REMOVE the old toolbar placeholder div */}
                 {/* <div className='editor-toolbar-placeholder'>...</div> */}

                 <label htmlFor='description' className='editor-label sr-only'>Article Content</label>
                  <ReactQuill
            theme="snow"
            value={formData.description}
            onChange={handleDescriptionChange}
            modules={quillModules}
            formats={quillFormats}
            className='editor-description-input'
            placeholder="Start writing your masterpiece..."
         />
              </div>
              {/* --- End of Replacement --- */}

            </div>
          </div> {/* End Main Column */}

          {/* --- Sidebar Column --- */}
           {/* ... (Sidebar code remains the same: Publish, Image, Categories) ... */}
          <div className='editor-sidebar-column'>
             {/* Publish Card */}
            <div className='editor-card sidebar-card'>
               <h3 className='editor-section-title'>Publish Settings</h3>
               <div className='editor-section'>
                 <label htmlFor='status' className='editor-label'>Status</label>
                 <select id="status" name="status" className='editor-input' value={formData.status} onChange={handleInputChange} >
                   <option value="Draft">Draft</option>
                   <option value="Published">Published</option>
                   <option value="Scheduled">Scheduled</option>
                 </select>
               </div>
               <div className='editor-actions'>
                  <button type='submit' className='editor-button button-primary'> Save / Update </button>
               </div>
             </div>
             {/* Image Upload Card */}
             <div className='editor-card sidebar-card'>
                 <h3 className='editor-section-title'>Featured Image</h3>
                 <div className='editor-section no-margin-bottom'>
                     <div className='image-upload-area' onClick={triggerImageUpload} title="Upload featured image">
                         <input type='file' accept='image/*' onChange={handleImageChange} ref={fileInputRef} className='image-upload-input' aria-label="Upload featured image" />
                         {formData.imagePreviewUrl ? (
                             <Image src={formData.imagePreviewUrl} alt="Selected image preview" fill className='image-preview' style={{ objectFit: 'cover' }} />
                         ) : (
                             <div className='image-upload-placeholder'><span>🖼️</span><span>Upload Image</span><small>(Click to browse)</small></div>
                         )}
                     </div>
                     {formData.imagePreviewUrl && (<button type="button" onClick={() => setFormData(prev => ({...prev, imageFile: null, imagePreviewUrl: null}))} className="editor-button button-link remove-image-btn">Remove Image</button>)}
                 </div>
             </div>
            {/* Categories/Tags Card */}
             <div className='editor-card sidebar-card'>
                 <h3 className='editor-section-title'>Categories / Tags</h3>
                 <div className='editor-section no-margin-bottom'>
                     <label htmlFor='categories' className='editor-label sr-only'>Categories or Tags</label>
                     <TagInputPlaceholder value={formData.categories} onChange={handleInputChange} />
                 </div>
             </div>
          </div> {/* End Sidebar */}

        </div> {/* End Top Row */}

         {/* --- Bottom Row: Author Details --- */}
         {/* ... (Author Details section remains the same) ... */}
          <div className='editor-bottom-row'>
            <div className='editor-card author-details-card'>
               <h3 className='editor-section-title'>Author Details</h3>
               <div className='author-fields-grid'>
                   {/* Author Name */}
                   <div className='editor-section'>
                       <label htmlFor='authorName' className='editor-label'>Author Name</label>
                       <input type='text' id='authorName' name='authorName' className='editor-input' placeholder='Displayed author name' value={formData.authorName} onChange={handleInputChange} />
                   </div>
                   {/* Author Bio */}
                   <div className='editor-section'>
                       <label htmlFor='authorBio' className='editor-label'>Author Bio (Optional)</label>
                       <textarea id='authorBio' name='authorBio' className='editor-textarea' rows={3} placeholder='Short introduction about the author...' value={formData.authorBio} onChange={handleInputChange} />
                   </div>
                   {/* Social Links */}
                   <div className='editor-section'>
                       <label className='editor-label'>Social Links (Optional)</label>
                       <input type='url' name='socialTwitter' className='editor-input social-input' placeholder='Twitter URL' value={formData.socialTwitter} onChange={handleInputChange} />
                       <input type='url' name='socialLinkedIn' className='editor-input social-input' placeholder='LinkedIn URL' value={formData.socialLinkedIn} onChange={handleInputChange} />
                       <input type='url' name='socialGithub' className='editor-input social-input' placeholder='GitHub URL' value={formData.socialGithub} onChange={handleInputChange} />
                   </div>
               </div>
            </div>
         </div> {/* End Bottom Row */}

      </form>
    </div>
  );
};

// --- IMPORTANT ---
// ReactQuill can be large. For production, consider dynamic import:
// import dynamic from 'next/dynamic';
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false, loading: () => <p>Loading Editor...</p> });
// Make sure to also conditionally load the CSS or include it globally.
// Using dynamic import requires adjusting how you use the component.

export default ArticleEditor;