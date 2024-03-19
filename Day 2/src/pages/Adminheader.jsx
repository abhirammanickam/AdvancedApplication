import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Adminheader.css";
import Eventcards from "./Eventcards";


function Home({ registeredEmail, isLoggedIn }) {
    const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/adminhome">Home</Link>
            </li>
            <li>
              <Link to="/adminstudent">Patient Details</Link>
            </li>
            <li>
              <Link to="/enroll">Availiability</Link>
            </li>
            
          </ul>
        </nav>
        <div className="logout-icon">
        <div onClick={() => navigate('/')}>
          {isLoggedIn ? (
            <FontAwesomeIcon icon={faUser} />
            
            ) : registeredEmail ? (
                <p>{registeredEmail}</p>
                ) : (
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    )}
                    </div>
        </div>
      </header>
      
    </div>
    
  );
}

export default Home;
