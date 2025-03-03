import React from 'react';
import '../App.css';

/* E */
const PrivacyPolicy = () => {
  return (
    <div className="background-gradient h-screen flex flex-col justify-center items-center text-center">
      <div className="privacy-container">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-700 mb-4">
        Dont worry, we don't store any of your data.
        All photos taken are processed locally on your device and are not uploaded or saved to any external server.
      </p>
      <p className="text-lg text-gray-700 mb-4">
      We respect your privacy and are committed to protecting it. No cookies or trackers are used on this site.
      </p>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
