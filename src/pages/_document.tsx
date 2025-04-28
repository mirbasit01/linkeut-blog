// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
      

//       <body className="antialiased">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add Font Awesome CDN link here */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" // Use a specific version or latest stable
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" // Update integrity hash if you change the version
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Other head elements like favicons, meta tags can go here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}