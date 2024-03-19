// AboutUs.jsx

import React from 'react';
import '../assets/css/About.css';
import Home from './Home';
import Footer from './Footer';

function About() {
  return (
    <div><Home/>
    <div className="about-us-container">
      <h1 className="about-us-title">About Senior Care</h1>
      <div className="about-us-content">
        <p>
        we pride ourselves on offering unparalleled hospitality and care for senior citizens in their golden years. Our mission is to create a nurturing and supportive environment where seniors can thrive, feel valued, and enjoy a high quality of life.
        </p>
        <h2>Our Philosophy</h2>
        <p>
        We believe that every senior deserves to age with dignity and respect. Our philosophy revolves around holistic care, addressing not only the physical needs of our residents but also their emotional, social, and spiritual well-being. We strive to foster a sense of belonging and purpose, creating a warm and welcoming community where seniors can form meaningful connections and lead fulfilling lives.
        </p>
        <h2>Compassionate Care</h2>
        <p>
        At the heart of our approach is compassionate care. Our dedicated team of caregivers is passionate about providing personalized support tailored to the unique needs of each resident. From assistance with daily activities to medical care and emotional support, we are committed to going above and beyond to ensure the comfort and well-being of those entrusted to our care.
        </p>
        <h2>Services and Amenities</h2>
        <p>
        We offer a comprehensive range of services and amenities designed to enhance the lives of our residents. From delicious and nutritious meals prepared by our skilled culinary team to engaging activities and outings that promote socialization and stimulation, we strive to provide an enriching and fulfilling experience for all.


        </p>
        <h2>Safe and Comfortable Environment</h2>
        <p>
        The safety and comfort of our residents are of utmost importance to us. Our facilities are meticulously maintained and equipped with state-of-the-art security features to ensure a secure living environment. Whether in our cozy residential suites or our inviting communal spaces, residents can feel at ease knowing that they are in a safe and welcoming environment.
        </p>
        <h2>Family-Centered Approach</h2>
        <p>
        We recognize the importance of family in the lives of our residents. That's why we encourage family involvement and collaboration in the care process. We view families as valued partners and work closely with them to ensure that their loved ones receive the support and attention they deserve.
        </p>
      </div>
    </div>
    <Footer/></div>
  );
}

export default About;
