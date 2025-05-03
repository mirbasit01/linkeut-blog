// src/pages/login.tsx
import React from 'react';
import Image from 'next/image';
import styles from './login.module.css'; // <--- This import is correct here
import Link from 'next/link'; // <--- IMPORT Link

// Remove react-icons import if you are not using an icon
// import { BsGridFill } from 'react-icons/bs';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Left Side - Image */}
      <div className={styles.leftPanel}>
        <div className={styles.imageContainer}>
          <Image
src="/login-illustration.png"   
         alt="Woman reading on a stack of books"
            width={500}
            height={500}
            priority
            className={styles.illustrationImage}
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className={styles.rightPanel}>
        <div className={styles.formContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            {/* Optional: Icon
            <BsGridFill className={styles.logoIcon} />
            */}
            Blogify
          </div>

          {/* Login Form */}
          <form onSubmit={(e) => e.preventDefault()} className={styles.loginForm}>
            {/* Email Input Group */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className={styles.input}
              />
            </div>

            {/* Password Input Group */}
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className={styles.input}
              />
            </div>

            {/* Remember Me Row */}
            <div className={styles.rememberRow}>
              <div className={styles.checkboxGroup}>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className={styles.checkbox}
                />
                <label htmlFor="remember-me" className={styles.checkboxLabel}>
                  Keep me logged in
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Link href='/admin/create-article' >
            <button
              type="submit"
              className={styles.submitButton}
            >
              Log In
            </button>
            </Link>
             <p className={styles.switchFormLink}>
              Dont have an account?
               <Link href="/signup" className={styles.linkAction}>
                 Sign Up
              </Link>
             </p>

          </form>
        </div>
      </div>
    </div>
  );
};

// Export the component so Next.js can use it as a page
export default LoginPage;