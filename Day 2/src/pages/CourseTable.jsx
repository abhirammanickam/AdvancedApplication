import React from 'react';
import '../assets/css/CourseTable.css'; // Import your CSS file
import Home from './Home';
import Footer from './Footer';

function CourseTable() {
  return (
    <div>
      <Home />
      <div className="table-container">
        <table className="course-table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Timing</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr.Vs(cardiologist)</td>
              <td>Monday, Wednesday, Friday 5:00 PM - 7:00 PM</td>
              <td>Rejected</td>
            </tr>
            <tr>
              <td>Dr.Aravind(Anesthesiologist)</td>
              <td>Tuesday, Thursday 3:00 PM - 5:00 PM</td>
              <td>Accepted</td>
            </tr>
            <tr>
              <td>Dr.midhun(Dermatologist)</td>
              <td>Monday, Wednesday 1:00 PM - 3:00 PM</td>
              <td>Accepted</td>
            </tr>
            <tr>
              <td>Dr.kathrick(Nephrologis)</td>
              <td>Thursday 11:00 AM - 1:00 PM</td>
              <td>Rejected</td>
            </tr>
            <tr>
              <td>Dr.Mohan(Gastroenterologist)</td>
              <td>Tuesday 9:00 AM - 11:00 AM</td>
              <td>Rejected</td>
            </tr>
            <tr>
              <td>Dr.kabilan(Neurologist)</td>
              <td>Monday 7:00 AM - 9:00 AM</td>
              <td>Accepted</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default CourseTable;
