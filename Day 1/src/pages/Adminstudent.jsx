import React from 'react';
import '../assets/css/Adminstudent.css';
import Adminheader from './Adminheader';

function Adminstudent() {
  return (
    <div><Adminheader/>
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Treatment</th>
            <th>Timing</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>cardiologist</td>
          <td>5PM-7PM</td>
        </tr>
        <tr>
          <td>John </td>
          <td>doe@example.com</td>
          <td>Anesthesiologist</td>
          <td>3PM-5PM</td>
        </tr>
        <tr>
          <td>aanand</td>
          <td>aanand@example.com</td>
          <td>Dermatologist</td>
          <td>1PM-3PM</td>
        </tr>
        <tr>
          <td>krish</td>
          <td>krish@example.com</td>
          <td>Nephrologist</td>
          <td>11AM-1PM</td>
        </tr>
        <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
            <td>Gastroenterologist</td>
            <td>9AM-11AM</td>
          </tr>
          
        </tbody>
      </table>
    </div></div>
  );
}

export default Adminstudent;
