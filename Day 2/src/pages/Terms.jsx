// Terms.jsx

import React from 'react';
import '../assets/css/Terms.css';
import Home from './Home';
import Footer from './Footer';

function Terms() {
  return (
    <div><Home/>
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <div className="terms-content">
        <p>
        We are delighted to welcome you to our senior care hospitality community. Here, we prioritize your comfort, well-being, and happiness above all else. As you embark on this journey with us, please take a moment to familiarize yourself with the terms and conditions outlined below.
        </p>
        <p>
        These guidelines are designed to ensure a safe, supportive, and fulfilling environment for all residents. Should you have any questions or concerns, our dedicated team is here to assist you every step of the way. Once again, welcome to our family – we're honored to have you here.







        </p>
        <h2>Admission Criteria</h2>
        <p>
        Prospective residents must meet our admission criteria, which may include age requirements, health assessments, and compatibility with our community environment. 
        </p>
        <h2>Rights and Responsibilities</h2>
        <p>Residents have the right to dignity, privacy, autonomy, and quality care. They are responsible for respecting the rights of other residents and staff, adhering to facility rules and regulations, and cooperating with staff in their care.
        </p>
      
        <h2>Payment Terms</h2>
        <p>
        Residents are responsible for payment of fees as outlined in the Residency Agreement. Fees may include monthly accommodation fees, additional services fees, and any applicable one-time fees. Payment terms and methods will be specified in the agreement.
        </p>
        <p>
          We accept payment via credit card, PayPal, or bank transfer. Any fees associated with
          payments are the responsibility of the payer.
        </p>
        <h2>Visitor Policy</h2>
        <p>
        We welcome visitors to our facility but require adherence to visitor policies for the safety and well-being of residents. Visitors must sign in and out, comply with visitation hours, and respect resident privacy and comfort.
        </p>
        <p>
          To request a refund, please contact our support team with your order details. Refunds will
          be processed within 5 business days.
        </p>
        </div>
    </div><Footer/>
    </div>
  );
}

export default Terms;
