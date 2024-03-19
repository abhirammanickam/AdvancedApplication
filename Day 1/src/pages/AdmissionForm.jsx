import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/AdmissionForm.css";
import Home from "./Home";
import Footer from "./Footer";

function AdmissionForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const levelRef = useRef();
  const trainingModeRef = useRef();
  const emailRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // Validation
    if (!firstNameRef.current.value || !lastNameRef.current.value || !levelRef.current.value || !trainingModeRef.current.value || !emailRef.current.value) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!validateEmail(emailRef.current.value)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // If all fields are valid, submit the form
    // Here you can handle form submission logic (e.g., API request)
    // For this example, let's just display a success message
    toast.success("Admission form submitted successfully!");
    // Reset the form fields
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    levelRef.current.value = "";
    trainingModeRef.current.value = "";
    emailRef.current.value = "";
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div className="back"><Home/>
    <div className="admission-form-container">
      <center><h2>Admission Form</h2></center>
      <form onSubmit={handleSubmit} className="admission-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" ref={firstNameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" ref={lastNameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="Specialist">Specialists:</label>
          <select id="Specialist" ref={levelRef}>
            <option value="">Select</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
            <option value="Nephrologist">Nephrologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Anesthesiologist">Anesthesiologist</option>
            <option value="cardiologist">cardiologist</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="timingMode">Preferred Mode:</label>
          <select id="trainingMode" ref={trainingModeRef}>
            <option value="">Select Mode of Timing</option>
            <option value="Alt">10Am-2PM</option>
            <option value="Alt">3Pm-8Pm</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div><center>
        <button type="submit">Submit</button></center>
      </form>
      <ToastContainer />
    </div>
    
      <Footer/>
    
    </div>
  );
}

export default AdmissionForm;
