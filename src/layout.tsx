// app/layout.tsx
import type { Metadata } from 'next';

// Option 1: Metadata Object (Recommended)
export const metadata: Metadata = {
  title: 'Linkeut Blog',
  description: 'Discover the latest articles and insights',
  icons: {
    icon: '/your-icon.png', // or an array for multiple types/sizes
    shortcut: '/shortcut-icon.png', // Example
    apple: '/apple-icon.png',       // Example
    other: { // Example for custom links
      rel: 'custom-icon',
      url: '/custom-icon.png',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Option 2: Direct <link> tags */}
      {/* <head> */}
        {/* <link rel="icon" href="/your-icon.png" type="image/png" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      {/* </head> */}
      <body>{children}</body>
    </html>
  );
}