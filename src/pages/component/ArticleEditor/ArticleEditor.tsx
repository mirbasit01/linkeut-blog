// // // src/component/ArticleEditor/ArticleEditor.tsx
// // import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
// // import Image from 'next/image';

// // // --- PLACEHOLDERS ---
// // // Replace with your actual Rich Text Editor
// // const RichTextEditorPlaceholder = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => (
// //   <textarea
// //     className='editor-textarea editor-description-input' // Use specific class
// //     rows={18} // Adjust height as needed
// //     placeholder="Write your article content here..."
// //     value={value}
// //     onChange={(e) => onChange(e.target.value)}
// //   />
// // );
// // // Example: Simple Tag Input Placeholder (replace with a real library like react-tag-input)
// // const TagInputPlaceholder = ({ value, onChange }: { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
// //     <input
// //         type="text"
// //         className='editor-input'
// //         placeholder='Add tags, comma-separated'
// //         value={value}
// //         onChange={onChange}
// //         name="categories" // Ensure name matches state key
// //     />
// // );
// // // --------------------

// // interface FormData {
// //   title: string;
// //   description: string;
// //   authorName: string;
// //   authorBio: string;
// //   socialTwitter: string;
// //   socialLinkedIn: string;
// //   socialGithub: string;
// //   imageFile: File | null;
// //   imagePreviewUrl: string | null;
// //   status: 'Draft' | 'Published' | 'Scheduled'; // Added status
// //   categories: string; // Simple string for comma-separated tags
// // }

// // const ArticleEditor: React.FC = () => {
// //   const [formData, setFormData] = useState<FormData>({
// //     title: '',
// //     description: '',
// //     authorName: '',
// //     authorBio: '',
// //     socialTwitter: '',
// //     socialLinkedIn: '',
// //     socialGithub: '',
// //     imageFile: null,
// //     imagePreviewUrl: null,
// //     status: 'Draft', // Default status
// //     categories: '',
// //   });

// //   const fileInputRef = useRef<HTMLInputElement>(null);

// //   const handleInputChange = (
// //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >
// //   ) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleDescriptionChange = (value: string) => {
// //     setFormData((prev) => ({ ...prev, description: value }));
// //   };

// //   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) {
// //       const file = e.target.files[0];
// //       // Optional: Add file size/type validation here
// //       setFormData((prev) => ({
// //         ...prev,
// //         imageFile: file,
// //         imagePreviewUrl: URL.createObjectURL(file),
// //       }));
// //       // Clear the input value so the same file can be selected again if needed
// //       if(e.target) e.target.value = '';
// //     }
// //   };

// //   const triggerImageUpload = () => {
// //     fileInputRef.current?.click();
// //   };

// //   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     console.log('Submitting Article Data:', {
// //         title: formData.title,
// //         description: formData.description, // In real app, this might be HTML/Markdown
// //         status: formData.status,
// //         categories: formData.categories.split(',').map(tag => tag.trim()).filter(tag => tag), // Basic tag parsing
// //         author: {
// //             name: formData.authorName,
// //             bio: formData.authorBio,
// //             socials: {
// //                 twitter: formData.socialTwitter,
// //                 linkedin: formData.socialLinkedIn,
// //                 github: formData.socialGithub,
// //             }
// //         },
// //         imageFile: formData.imageFile // Handle upload separately
// //     });
// //     alert('Article data logged to console! (Check developer tools)');
// //   };

// //   return (
// //     <div className='article-editor-container enhanced-editor'>
// //       <form onSubmit={handleSubmit} className='editor-form'>

// //         {/* --- Top Row: Main Content & Sidebar --- */}
// //         <div className='editor-top-row'>

// //           {/* --- Main Content Column --- */}
// //           <div className='editor-main-column'>
// //             <div className='editor-card main-content-card'> {/* Optional card styling */}
// //               {/* Title Input */}
// //               <div className='editor-section'>
// //                 <label htmlFor='title' className='editor-label sr-only'>Article Title</label>
// //                 <input
// //                   type='text'
// //                   id='title'
// //                   name='title'
// //                   className='editor-input editor-title-input' // Larger title input
// //                   placeholder='Article Title...'
// //                   value={formData.title}
// //                   onChange={handleInputChange}
// //                   required
// //                   aria-label="Article Title"
// //                 />
// //               </div>

// //               {/* Content Area with Toolbar Placeholder */}
// //               <div className='editor-section content-section'>
// //                 <div className='editor-toolbar-placeholder'>
// //                   {/* Placeholder: Add actual editor toolbar buttons here (Bold, Italic, etc.) */}
// //                   <span>B</span> <span>I</span> <span>U</span> <span>Link</span> <span>H2</span>
// //                 </div>
// //                 {/* <label htmlFor='description' className='editor-label sr-only'>Article Content</label> */}
// //                  {/* --- Replace with your actual Rich Text Editor Component --- */}
// //                 <RichTextEditorPlaceholder
// //                   value={formData.description}
// //                   onChange={handleDescriptionChange}
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* --- Sidebar Column --- */}
// //           <div className='editor-sidebar-column'>
// //             {/* Publish Card */}
// //             <div className='editor-card sidebar-card'>
// //               <h3 className='editor-section-title'>Publish Settings</h3>
// //               <div className='editor-section'>
// //                 <label htmlFor='status' className='editor-label'>Status</label>
// //                 <select
// //                   id="status"
// //                   name="status"
// //                   className='editor-input' // Use input styling for select
// //                   value={formData.status}
// //                   onChange={handleInputChange}
// //                 >
// //                   <option value="Draft">Draft</option>
// //                   <option value="Published">Published</option>
// //                   <option value="Scheduled">Scheduled</option>
// //                 </select>
// //               </div>
// //                {/* Add more settings like visibility, schedule date etc. here */}
// //               <div className='editor-actions'>
// //                  <button type='submit' className='editor-button button-primary'>
// //                     Save / Update
// //                  </button>
// //                  {/* Add maybe a "Preview" button */}
// //               </div>
// //             </div>

// //             {/* Image Upload Card */}
// //             <div className='editor-card sidebar-card'>
// //                <h3 className='editor-section-title'>Featured Image</h3>
// //                <div className='editor-section no-margin-bottom'> {/* Remove bottom margin for tight fit */}
// //                   <div className='image-upload-area' onClick={triggerImageUpload} title="Upload featured image">
// //                     <input
// //                       type='file'
// //                       accept='image/*'
// //                       onChange={handleImageChange}
// //                       ref={fileInputRef}
// //                       className='image-upload-input'
// //                       aria-label="Upload featured image"
// //                     />
// //                     {formData.imagePreviewUrl ? (
// //                       <Image
// //                           src={formData.imagePreviewUrl}
// //                           alt="Selected image preview"
// //                           fill // Use fill layout
// //                           className='image-preview'
// //                           style={{ objectFit: 'cover' }} // Style needed with fill
// //                       />
// //                     ) : (
// //                       <div className='image-upload-placeholder'>
// //                         {/* Add an Icon here e.g., using FontAwesome */}
// //                         <span>🖼️</span>
// //                         <span>Upload Image</span>
// //                         <small>(Click to browse)</small>
// //                       </div>
// //                     )}
// //                   </div>
// //                   {formData.imagePreviewUrl && (
// //                       <button type="button" onClick={() => setFormData(prev => ({...prev, imageFile: null, imagePreviewUrl: null}))} className="editor-button button-link remove-image-btn">
// //                           Remove Image
// //                       </button>
// //                   )}
// //                </div>
// //             </div>

// //             {/* Categories/Tags Card */}
// //              <div className='editor-card sidebar-card'>
// //                <h3 className='editor-section-title'>Categories / Tags</h3>
// //                 <div className='editor-section no-margin-bottom'>
// //                     <label htmlFor='categories' className='editor-label sr-only'>Categories or Tags</label>
// //                     {/* Replace with a proper Tag Input component */}
// //                     <TagInputPlaceholder value={formData.categories} onChange={handleInputChange} />
// //                 </div>
// //             </div>

// //           </div> {/* End Sidebar Column */}
// //         </div> {/* End Top Row */}

// //         {/* --- Bottom Row: Author Details --- */}
// //         <div className='editor-bottom-row'>
// //           <div className='editor-card author-details-card'>
// //              <h3 className='editor-section-title'>Author Details</h3>
// //              <div className='author-fields-grid'> {/* Use grid for better layout */}
// //                 {/* Author Name */}
// //                 <div className='editor-section'>
// //                     <label htmlFor='authorName' className='editor-label'>Author Name</label>
// //                     <input
// //                         type='text'
// //                         id='authorName'
// //                         name='authorName'
// //                         className='editor-input'
// //                         placeholder='Displayed author name'
// //                         value={formData.authorName}
// //                         onChange={handleInputChange}
// //                     />
// //                 </div>
// //                 {/* Author Bio */}
// //                 <div className='editor-section'>
// //                     <label htmlFor='authorBio' className='editor-label'>Author Bio (Optional)</label>
// //                     <textarea
// //                         id='authorBio'
// //                         name='authorBio'
// //                         className='editor-textarea'
// //                         rows={3}
// //                         placeholder='Short introduction about the author...'
// //                         value={formData.authorBio}
// //                         onChange={handleInputChange}
// //                     />
// //                 </div>
// //                 {/* Social Links */}
// //                  <div className='editor-section'>
// //                      <label className='editor-label'>Social Links (Optional)</label>
// //                      <input type='url' name='socialTwitter' className='editor-input social-input' placeholder='Twitter URL' value={formData.socialTwitter} onChange={handleInputChange} />
// //                      <input type='url' name='socialLinkedIn' className='editor-input social-input' placeholder='LinkedIn URL' value={formData.socialLinkedIn} onChange={handleInputChange} />
// //                      <input type='url' name='socialGithub' className='editor-input social-input' placeholder='GitHub URL' value={formData.socialGithub} onChange={handleInputChange} />
// //                  </div>
// //              </div>
// //           </div>
// //         </div> {/* End Bottom Row */}

// //       </form>
// //     </div>
// //   );
// // };

// // export default ArticleEditor; 
// "use client"

// import React, { useState, useRef, useEffect, type ChangeEvent, type FormEvent } from 'react';
// import Image from 'next/image';
// import { Editor } from '@tinymce/tinymce-react';


// // Example: Simple Tag Input Placeholder (replace with a real library like react-tag-input)
// const TagInputPlaceholder = ({
//   value,
//   onChange,
// }: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
//   <input
//     type="text"
//     className="editor-input"
//     placeholder="Add tags, comma-separated"
//     value={value}
//     onChange={onChange}
//     name="categories" // Ensure name matches state key
//   />
// );

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
//   status: "Draft" | "Published" | "Scheduled"; // Added status
//   categories: string; // Simple string for comma-separated tags
// }

// const ArticleEditor: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     title: "",
//     description: "",
//     authorName: "",
//     authorBio: "",
//     socialTwitter: "",
//     socialLinkedIn: "",
//     socialGithub: "",
//     imageFile: null,
//     imagePreviewUrl: null,
//     status: "Draft", // Default status
//     categories: "",
//   });

//   const editorRef = useRef<HTMLDivElement>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // Initialize editor content from formData
//   useEffect(() => {
//     if (editorRef.current && formData.description) {
//       editorRef.current.innerHTML = formData.description;
//     }
//   }, []);

//   // Update formData when editor content changes
//   const handleEditorChange = () => {
//     if (editorRef.current) {
//       setFormData((prev) => ({ ...prev, description: editorRef.current?.innerHTML || "" }));
//     }
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
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
//       if (e.target) e.target.value = "";
//     }
//   };

//   const triggerImageUpload = () => {
//     fileInputRef.current?.click();
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Submitting Article Data:", {
//       title: formData.title,
//       description: formData.description, // In real app, this might be HTML/Markdown
//       status: formData.status,
//       categories: formData.categories
//         .split(",")
//         .map((tag) => tag.trim())
//         .filter((tag) => tag), // Basic tag parsing
//       author: {
//         name: formData.authorName,
//         bio: formData.authorBio,
//         socials: {
//           twitter: formData.socialTwitter,
//           linkedin: formData.socialLinkedIn,
//           github: formData.socialGithub,
//         },
//       },
//       imageFile: formData.imageFile, // Handle upload separately
//     });
//     alert("Article data logged to console! (Check developer tools)");
//   };

//   // Editor formatting functions
//   const execFormatCommand = (command: string, value: string | undefined = undefined) => {
//     document.execCommand(command, false, value);
//     handleEditorChange();
//     editorRef.current?.focus();
//   };

//   const formatBold = () => execFormatCommand('bold');
//   const formatItalic = () => execFormatCommand('italic');
//   const formatUnderline = () => execFormatCommand('underline');
//   const formatLink = () => {
//     const url = prompt('Enter URL:');
//     if (url) execFormatCommand('createLink', url);
//   };
//   const formatH2 = () => execFormatCommand('formatBlock', '<h2>');
//   const formatParagraph = () => execFormatCommand('formatBlock', '<p>');
//   const formatOrderedList = () => execFormatCommand('insertOrderedList');
//   const formatUnorderedList = () => execFormatCommand('insertUnorderedList');

//   return (
//     <div className="article-editor-container enhanced-editor">
//       <form onSubmit={handleSubmit} className="editor-form">
//         {/* --- Top Row: Main Content & Sidebar --- */}
//         <div className="editor-top-row">
//           {/* --- Main Content Column --- */}
//           <div className="editor-main-column">
//             <div className="editor-card main-content-card">
//               {/* Title Input */}
//               <div className="editor-section">
//                 <label htmlFor="title" className="editor-label sr-only">
//                   Article Title
//                 </label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   className="editor-input editor-title-input" // Larger title input
//                   placeholder="Article Title..."
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   required
//                   aria-label="Article Title"
//                 />
//               </div>

//               {/* Content Area with Custom Editor */}
//               {/* <div className="editor-section content-section">
//                 <div className="custom-editor-wrapper">
//                   <div className="editor-toolbar">
//                     <button type="button" onClick={formatBold} className="toolbar-button" title="Bold">
//                       <strong>B</strong>
//                     </button>
//                     <button type="button" onClick={formatItalic} className="toolbar-button" title="Italic">
//                       <em>I</em>
//                     </button>
//                     <button type="button" onClick={formatUnderline} className="toolbar-button" title="Underline">
//                       <u>U</u>
//                     </button>
//                     <button type="button" onClick={formatLink} className="toolbar-button" title="Insert Link">
//                       Link
//                     </button>
//                     <button type="button" onClick={formatH2} className="toolbar-button" title="Heading 2">
//                       H2
//                     </button>
//                     <button type="button" onClick={formatParagraph} className="toolbar-button" title="Paragraph">
//                       P
//                     </button>
//                     <button type="button" onClick={formatOrderedList} className="toolbar-button" title="Ordered List">
//                       1.
//                     </button>
//                     <button type="button" onClick={formatUnorderedList} className="toolbar-button" title="Bullet List">
//                       •
//                     </button>
//                   </div>
                  
//                   <div
//                     ref={editorRef}
//                     className="editor-content"
//                     contentEditable
//                     onInput={handleEditorChange}
//                     onBlur={handleEditorChange}
//                     dangerouslySetInnerHTML={{ __html: formData.description }}
//                   />
//                 </div>
//               </div> */}
//               <Editor
//       apiKey='qqstn5ipvccjff3y7v2guncdnux0heha33j5ctqsumdckfia'
//       init={{
//         plugins: [
//           // Core editing features
//           'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
//           // Your account includes a free trial of TinyMCE premium features
//           // Try the most popular premium features until May 18, 2025:
//           'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
//         ],
//         toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//         tinycomments_mode: 'embedded',
//         tinycomments_author: 'Author name',
//         mergetags_list: [
//           { value: 'First.Name', title: 'First Name' },
//           { value: 'Email', title: 'Email' },
//         ],
//         ai_request: (request: unknown, respondWith: { string: (callback: () => Promise<string>) => void }) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
//       }}
//       initialValue="Welcome to TinyMCE!"
//     />
//             </div>
//           </div>

//           {/* --- Sidebar Column --- */}
//           <div className="editor-sidebar-column">
//             {/* Publish Card */}
//             <div className="editor-card sidebar-card">
//               <h3 className="editor-section-title">Publish Settings</h3>
//               <div className="editor-section">
//                 <label htmlFor="status" className="editor-label">
//                   Status
//                 </label>
//                 <select
//                   id="status"
//                   name="status"
//                   className="editor-input" // Use input styling for select
//                   value={formData.status}
//                   onChange={handleInputChange}
//                 >
//                   <option value="Draft">Draft</option>
//                   <option value="Published">Published</option>
//                   <option value="Scheduled">Scheduled</option>
//                 </select>
//               </div>
//               {/* Add more settings like visibility, schedule date etc. here */}
//               <div className="editor-actions">
//                 <button type="submit" className="editor-button button-primary">
//                   Save / Update
//                 </button>
//                 {/* Add maybe a "Preview" button */}
//               </div>
//             </div>

//             {/* Image Upload Card */}
//             <div className="editor-card sidebar-card">
//               <h3 className="editor-section-title">Featured Image</h3>
//               <div className="editor-section no-margin-bottom">
//                 {/* Remove bottom margin for tight fit */}
//                 <div className="image-upload-area" onClick={triggerImageUpload} title="Upload featured image">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     ref={fileInputRef}
//                     className="image-upload-input"
//                     aria-label="Upload featured image"
//                   />
//                   {formData.imagePreviewUrl ? (
//                     <Image
//                       src={formData.imagePreviewUrl || "/placeholder.svg"}
//                       alt="Selected image preview"
//                       fill // Use fill layout
//                       className="image-preview"
//                       style={{ objectFit: "cover" }} // Style needed with fill
//                     />
//                   ) : (
//                     <div className="image-upload-placeholder">
//                       {/* Add an Icon here e.g., using FontAwesome */}
//                       <span>🖼️</span>
//                       <span>Upload Image</span>
//                       <small>(Click to browse)</small>
//                     </div>
//                   )}
//                 </div>
//                 {formData.imagePreviewUrl && (
//                   <button
//                     type="button"
//                     onClick={() => setFormData((prev) => ({ ...prev, imageFile: null, imagePreviewUrl: null }))}
//                     className="editor-button button-link remove-image-btn"
//                   >
//                     Remove Image
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Categories/Tags Card */}
//             <div className="editor-card sidebar-card">
//               <h3 className="editor-section-title">Categories / Tags</h3>
//               <div className="editor-section no-margin-bottom">
//                 <label htmlFor="categories" className="editor-label sr-only">
//                   Categories or Tags
//                 </label>
//                 {/* Replace with a proper Tag Input component */}
//                 <TagInputPlaceholder value={formData.categories} onChange={handleInputChange} />
//               </div>
//             </div>
//           </div>
//           {/* End Sidebar Column */}
//         </div>
//         {/* End Top Row */}

//         {/* --- Bottom Row: Author Details --- */}
//         <div className="editor-bottom-row">
//           <div className="editor-card author-details-card">
//             <h3 className="editor-section-title">Author Details</h3>
//             <div className="author-fields-grid">
//               {/* Use grid for better layout */}
//               {/* Author Name */}
//               <div className="editor-section">
//                 <label htmlFor="authorName" className="editor-label">
//                   Author Name
//                 </label>
//                 <input
//                   type="text"
//                   id="authorName"
//                   name="authorName"
//                   className="editor-input"
//                   placeholder="Displayed author name"
//                   value={formData.authorName}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               {/* Author Bio */}
//               <div className="editor-section">
//                 <label htmlFor="authorBio" className="editor-label">
//                   Author Bio (Optional)
//                 </label>
//                 <textarea
//                   id="authorBio"
//                   name="authorBio"
//                   className="editor-textarea"
//                   rows={3}
//                   placeholder="Short introduction about the author..."
//                   value={formData.authorBio}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               {/* Social Links */}
//               <div className="editor-section">
//                 <label className="editor-label">Social Links (Optional)</label>
//                 <input
//                   type="url"
//                   name="socialTwitter"
//                   className="editor-input social-input"
//                   placeholder="Twitter URL"
//                   value={formData.socialTwitter}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="url"
//                   name="socialLinkedIn"
//                   className="editor-input social-input"
//                   placeholder="LinkedIn URL"
//                   value={formData.socialLinkedIn}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="url"
//                   name="socialGithub"
//                   className="editor-input social-input"
//                   placeholder="GitHub URL"
//                   value={formData.socialGithub}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* End Bottom Row */}
//       </form>
//     </div>
//   );
// };

// export default ArticleEditor;



"use client"

import type React from "react"
import { useState, useRef, useEffect, type ChangeEvent, type FormEvent } from "react"
import Image from "next/image"
import { Editor } from '@tinymce/tinymce-react';

// Example: Simple Tag Input Placeholder (replace with a real library like react-tag-input)
const TagInputPlaceholder = ({
  value,
  onChange,
}: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <input
    type="text"
    className="editor-input"
    placeholder="Add tags, comma-separated"
    value={value}
    onChange={onChange}
    name="categories" // Ensure name matches state key
  />
)

interface FormData {
  title: string
  description: string
  authorName: string
  authorBio: string
  socialTwitter: string
  socialLinkedIn: string
  socialGithub: string
  imageFile: File | null
  imagePreviewUrl: string | null
  status: "Draft" | "Published" | "Scheduled" // Added status
  categories: string // Simple string for comma-separated tags
}

const ArticleEditor: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    authorName: "",
    authorBio: "",
    socialTwitter: "",
    socialLinkedIn: "",
    socialGithub: "",
    imageFile: null,
    imagePreviewUrl: null,
    status: "Draft", // Default status
    categories: "",
  })

  

   const editorRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Initialize editor content from formData
  useEffect(() => {
    if (editorRef.current && formData.description) {
      editorRef.current.innerHTML = formData.description
    }
  }, [])

  // Update formData when editor content changes
  const handleEditorChange = () => {
    if (editorRef.current) {
      setFormData((prev) => ({ ...prev, description: editorRef.current?.innerHTML || "" }))
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      // Optional: Add file size/type validation here
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        imagePreviewUrl: URL.createObjectURL(file),
      }))
      // Clear the input value so the same file can be selected again if needed
      if (e.target) e.target.value = ""
    }
  }

  const triggerImageUpload = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Make sure we have the latest content from the editor
    let currentContent = formData.description;
    if (editorRef.current) {
      currentContent = editorRef.current.getContent();
      // Update the state with the latest content
      setFormData(prev => ({ ...prev, description: currentContent }));
    }
  
    console.log("Submitting Article Data:", {
      title: formData.title,
      description: currentContent, // Use the latest content
      status: formData.status,
      categories: formData.categories
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag), // Basic tag parsing
      author: {
        name: formData.authorName,
        bio: formData.authorBio,
        socials: {
          twitter: formData.socialTwitter,
          linkedin: formData.socialLinkedIn,
          github: formData.socialGithub,
        },
      },
      imageFile: formData.imageFile, // Handle upload separately
    })
    alert("Article data logged to console! (Check developer tools)");
  };

  // Editor formatting functions
  const execFormatCommand = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value)
    handleEditorChange()
    editorRef.current?.focus()
  }

  const formatBold = () => execFormatCommand("bold")
  const formatItalic = () => execFormatCommand("italic")
  const formatUnderline = () => execFormatCommand("underline")
  const formatLink = () => {
    const url = prompt("Enter URL:")
    if (url) execFormatCommand("createLink", url)
  }
  const formatH2 = () => execFormatCommand("formatBlock", "<h2>")
  const formatParagraph = () => execFormatCommand("formatBlock", "<p>")
  const formatOrderedList = () => execFormatCommand("insertOrderedList")
  const formatUnorderedList = () => execFormatCommand("insertUnorderedList")

  return (
    <div className="article-editor-container enhanced-editor">
      <form onSubmit={handleSubmit} className="editor-form">
        {/* --- Top Row: Main Content & Sidebar --- */}
        <div className="editor-top-row">
          {/* --- Main Content Column --- */}
          <div className="editor-main-column">
            <div className="editor-card main-content-card">
              {/* Title Input */}
              <div className="editor-section">
                <label htmlFor="title" className="editor-label sr-only">
                  Article Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="editor-input editor-title-input" // Larger title input
                  placeholder="Article Title..."
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  aria-label="Article Title"
                />
              </div>

              {/* Content Area with Custom Editor */}
              <div className="editor-section content-section">
                <div className="custom-editor-wrapper">
                  <Editor
                    apiKey='qqstn5ipvccjff3y7v2guncdnux0heha33j5ctqsumdckfia'
                    onInit={(evt, editor) => {
                      // Store editor reference for later use
                      editorRef.current = editor;
                    }}
                    onEditorChange={(content) => {
                      // Update formData when editor content changes
                      setFormData(prev => ({ ...prev, description: content }));
                    }}
                    value={formData.description}
                    init={{
                      height: 500,
                      plugins: [
                        // Core editing features
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                        // Your account includes a free trial of TinyMCE premium features
                        // Try the most popular premium features until May 18, 2025:
                        'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
                      ],
                      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                      tinycomments_mode: 'embedded',
                      tinycomments_author: 'Author name',
                      mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                      ],
                      ai_request: (request: unknown, respondWith: { string: (callback: () => Promise<string>) => void }) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- Sidebar Column --- */}
          <div className="editor-sidebar-column">
            {/* Publish Card */}
            <div className="editor-card sidebar-card">
              <h3 className="editor-section-title">Publish Settings</h3>
              <div className="editor-section">
                <label htmlFor="status" className="editor-label">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="editor-input" // Use input styling for select
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                  <option value="Scheduled">Scheduled</option>
                </select>
              </div>
              {/* Add more settings like visibility, schedule date etc. here */}
              <div className="editor-actions">
                <button type="submit" className="editor-button button-primary">
                  Save / Update
                </button>
                <button 
                  type="button" 
                  className="editor-button button-secondary"
                  onClick={() => {
                    if (editorRef.current) {
                      const content = editorRef.current.getContent();
                      console.log("Creating article with content:", content);
                      // You can trigger your API call here
                      alert("Article created successfully!");
                    }
                  }}
                >
                  Create Article
                </button>
              </div>
            </div>

            {/* Image Upload Card */}
            <div className="editor-card sidebar-card">
              <h3 className="editor-section-title">Featured Image</h3>
              <div className="editor-section no-margin-bottom">
                {/* Remove bottom margin for tight fit */}
                <div className="image-upload-area" onClick={triggerImageUpload} title="Upload featured image">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    className="image-upload-input"
                    aria-label="Upload featured image"
                  />
                  {formData.imagePreviewUrl ? (
                    <Image
                      src={formData.imagePreviewUrl || "/placeholder.svg"}
                      alt="Selected image preview"
                      fill // Use fill layout
                      className="image-preview"
                      style={{ objectFit: "cover" }} // Style needed with fill
                    />
                  ) : (
                    <div className="image-upload-placeholder">
                      {/* Add an Icon here e.g., using FontAwesome */}
                      <span>🖼️</span>
                      <span>Upload Image</span>
                      <small>(Click to browse)</small>
                    </div>
                  )}
                </div>
                {formData.imagePreviewUrl && (
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, imageFile: null, imagePreviewUrl: null }))}
                    className="editor-button button-link remove-image-btn"
                  >
                    Remove Image
                  </button>
                )}
              </div>
            </div>

            {/* Categories/Tags Card */}
            <div className="editor-card sidebar-card">
              <h3 className="editor-section-title">Categories / Tags</h3>
              <div className="editor-section no-margin-bottom">
                <label htmlFor="categories" className="editor-label sr-only">
                  Categories or Tags
                </label>
                {/* Replace with a proper Tag Input component */}
                <TagInputPlaceholder value={formData.categories} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          {/* End Sidebar Column */}
        </div>
        {/* End Top Row */}

        {/* --- Bottom Row: Author Details --- */}
        <div className="editor-bottom-row">
          <div className="editor-card author-details-card">
            <h3 className="editor-section-title">Author Details</h3>
            <div className="author-fields-grid">
              {/* Use grid for better layout */}
              {/* Author Name */}
              <div className="editor-section">
                <label htmlFor="authorName" className="editor-label">
                  Author Name
                </label>
                <input
                  type="text"
                  id="authorName"
                  name="authorName"
                  className="editor-input"
                  placeholder="Displayed author name"
                  value={formData.authorName}
                  onChange={handleInputChange}
                />
              </div>
              {/* Author Bio */}
              <div className="editor-section">
                <label htmlFor="authorBio" className="editor-label">
                  Author Bio (Optional)
                </label>
                <textarea
                  id="authorBio"
                  name="authorBio"
                  className="editor-textarea"
                  rows={3}
                  placeholder="Short introduction about the author..."
                  value={formData.authorBio}
                  onChange={handleInputChange}
                />
              </div>
              {/* Social Links */}
              <div className="editor-section">
                <label className="editor-label">Social Links (Optional)</label>
                <input
                  type="url"
                  name="socialTwitter"
                  className="editor-input social-input"
                  placeholder="Twitter URL"
                  value={formData.socialTwitter}
                  onChange={handleInputChange}
                />
                <input
                  type="url"
                  name="socialLinkedIn"
                  className="editor-input social-input"
                  placeholder="LinkedIn URL"
                  value={formData.socialLinkedIn}
                  onChange={handleInputChange}
                />
                <input
                  type="url"
                  name="socialGithub"
                  className="editor-input social-input"
                  placeholder="GitHub URL"
                  value={formData.socialGithub}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Bottom Row */}
      </form>
    </div>
  )
}

export default ArticleEditor
