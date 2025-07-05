import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
     <h1 className="text-3xl mb-6 text-center"><span  className="text-gray-500">Privacy</span>{' '}
     <span className='text-gray-600 font-semibold'>Policy</span></h1>


      <p className="mb-6">
        At HelixCure, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our doctor appointment services.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-2">We collect the following types of information when you use our services:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Personal details (name, age, contact information, etc.).</li>
        <li>Medical history and appointment details.</li>
        <li>Payment and transaction details (if applicable).</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
      <p className="mb-2">Your data is used for the following purposes:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Scheduling and managing doctor appointments.</li>
        <li>Providing personalized healthcare services.</li>
        <li>Processing payments and maintaining records.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
      <p className="mb-6">
        We implement security measures to ensure that your personal data remains protected. We do not share your information with third parties unless required by law.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
      <p className="mb-6">
        You have the right to access, update, or delete your personal information. Contact us at <a href="mailto:helixcure@gmail.com" className="text-blue-600 font-medium">helixcure@gmail.com</a> for any privacy-related inquiries.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Changes to Privacy Policy</h2>
      <p className="mb-6">
        HelixCure reserves the right to update this Privacy Policy. Any changes will be reflected on this page.
      </p>

      <p className="text-center mt-10">
        For any concerns, contact us at <a href="mailto:helixcure@gmail.com" className="text-blue-600 font-medium">helixcure@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
