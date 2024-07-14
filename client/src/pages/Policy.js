import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/ProductDetailsStyles.css";


const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="container mt-5 policy">
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy describes how The Timepiece Gallery collects, uses, and discloses your personal information when
          you use our app ("Service") and the choices you have associated
          with that data.
        </p>
        {/* Add sections for: */}
        <h2>Information We Collect</h2>
        <p>
          We may collect a variety of information when you use our Service,
          including:
        </p>
        <ul>
          <li>Personal information you provide directly (e.g., name, email address, billing information)</li>
          <li>Device data (e.g., device type, operating system, IP address)</li>
          <li>Usage data (e.g., browsing history, purchase information, search queries)</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>
          We may use your information for various purposes, including:
        </p>
        <ul>
          <li>To provide and improve our Service</li>
          <li>To personalize your experience (e.g., recommend products, display relevant content)</li>
          <li>To process your transactions (e.g., fulfill orders, handle payments)</li>
          <li>To send you marketing communications (with your consent)</li>
          <li>To analyze trends and improve our app's functionality</li>
        </ul>
        <h2>Sharing Your Information</h2>
        <p>
          We may share your information with third-party service providers who
          assist us in operating our Service. These providers are obligated to
          protect your information and use it only for the purposes we specify.
          We will not share your information with any other third parties without
          your consent.
        </p>
        <h2>Your Choices and Rights</h2>
        <p>
          You have certain choices regarding your information, including:
        </p>
        <ul>
          <li>The ability to access and update your information</li>
          <li>The ability to opt-out of marketing communications</li>
          <li>The ability to request that we delete your information (subject to certain limitations)</li>
        </ul>
        <h2>Data Retention</h2>
        <p>
          We will retain your information for as long as necessary to fulfill
          the purposes described in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
        <h2>Security</h2>
        <p>
          We take reasonable steps to protect your information from unauthorized
          access, disclosure, alteration, or destruction. These steps include
          using secure servers, encryption technologies, and access controls.
          However, no internet transmission or electronic storage is ever completely secure.
        </p>
        <h2>Children's Privacy</h2>
        <p>
          Our Service is not directed to children under the age of 13. We do not
          knowingly collect personal information from children under 13. If you
          are a parent or guardian and you believe your child has provided us
          with personal information, please contact us.
        </p>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on our Service.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at help@TheTimepieceGallery.com.
        </p>
      </div>
    </Layout>
  );
};

export default Policy;
