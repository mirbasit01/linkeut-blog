// src/pages/signup.tsx
import React from 'react';
import Image from 'next/image';
import styles from './signup.module.css'; // Import the corresponding CSS module
import Link from 'next/link'; // <--- IMPORT Link

// Optional: Import an icon if you want one for the logo
// import { BsGridFill } from 'react-icons/bs';

const SignUpPage: React.FC = () => {
  // Basic submit handler placeholder (add actual logic later)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add form validation and submission logic here
    // - Check if passwords match
    // - Send data to backend API
    console.log('Signup form submitted');
  };

  return (
    <div className={styles.container}>
      {/* Left Side - Image (Reusing the same illustration for consistency) */}
      <div className={styles.leftPanel}>
        <div className={styles.imageContainer}>
          <Image
            // Using the same image, update path if you have a different one
            src="/login-illustration.png"
            alt="Illustration for signup" // Slightly updated alt text
            width={500} // Adjust dimensions if needed for your image
            height={500}
            priority // Prioritize loading for LCP
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
            Blogify {/* Or your actual Blog name */}
          </div>

          {/* Signup Form */}
          <h2 className={styles.formTitle}>Create Account</h2> {/* Added a title */}
          <form onSubmit={handleSubmit} className={styles.loginForm}> {/* Reuse loginForm style */}

            {/* First Name Input Group */}
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
                className={styles.input}
              />
            </div>

            {/* Last Name Input Group */}
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
                className={styles.input}
              />
            </div>

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

             {/* Phone Number Input Group */}
             <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number <span className={styles.optional}>(Optional)</span> {/* Mark as optional if needed */}
              </label>
              <input
                type="tel" // Use 'tel' type for phone numbers
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Optional: Add pattern for specific format
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
                placeholder="Create a password"
                required
                minLength={8} // Example: Add minLength requirement
                className={styles.input}
              />
            </div>

            {/* Confirm Password Input Group */}
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                 minLength={8}
                className={styles.input}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={styles.submitButton}
            >
              Sign Up
            </button>

             {/* Link to Login */}
            <p className={styles.switchFormLink}>
              Already have an account?{' '}
              {/* --- V V V --- REPLACE 'a' tag with Link --- V V V --- */}
              <Link href="/login" className={styles.linkAction}>
                 Log In
              </Link>
              {/* --- ^ ^ ^ --- END REPLACEMENT --- ^ ^ ^ --- */}
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;