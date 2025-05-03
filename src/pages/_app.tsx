import AuthProvider from "@/context/AuthProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../styles/BlogDetail.css';
import '../styles/Landing.css'
import '../styles/dashboard.css'; // <-- ADD THIS LINE
 import "@/styles/article-editor.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </>
   )
}
