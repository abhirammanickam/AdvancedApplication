import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Home.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Home({ registeredEmail, isLoggedIn }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            <header className="main-header">
                <div>
                   <h2>
                   SCHospital
                   </h2>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/homepage">Home</Link>
                        </li>
                        <li>
                            <Link to="/admissionform">Appointments</Link>
                        </li>
                        <li>
                            <Link to="/course">Bookings</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="profile-icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    {isLoggedIn ? (
                        <FontAwesomeIcon icon={faUser} />
                    ) : registeredEmail ? (
                        <p>{registeredEmail}</p>
                    ) : (
                        <FontAwesomeIcon icon={faUser} />
                    )}
                </div>
            </header>

            <Sidebar isOpen={isSidebarOpen} />

            <Footer />
        </div>
    );
}

export default Home;
