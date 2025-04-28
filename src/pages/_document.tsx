// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* --- ENSURE THIS IS COMMENTED OUT OR DELETED --- */}
        {/* <link rel="icon" href="/favicon.ico" /> */}

        {/* --- ENSURE THIS PATH IS CORRECT --- */}
        <link rel="icon" href="/linkeut-icon.svg" type="image/svg+xml" />

        {/* Remove this apple touch icon link if you didn't create the file */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}

        {/* Your Font Awesome Link */}
        {/* <link rel="stylesheet" href="..."/> */}
    {/* ... other head elements ... */}
    <link rel="icon" href="/linkeut-icon.png" type="image/png" />
    <link rel="icon" href="/linkeut-icon.svg" type="image/svg+xml" />
    {/* ... other head elements ... */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}