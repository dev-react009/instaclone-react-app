import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import Navbar from "./Navbar.js";

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("http://localhost:8083/api/get/post");
        let data = await response.json();
        setUsers(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false if there's an error
      }
    }

    fetchData();
  }, []);

  const noUsersStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    fontSize: '1.5rem',
    color: '#555'
  };

  return (
    <div className="site-container">
      <Navbar />
      <div className="container">
        {loading ? ( // Check if the data is still loading
          <p style={noUsersStyle}>Loading...</p>
        ) : users.length > 0 ? (
          users.map((obj, idx) => <Card key={"Sree" + idx} obj={obj} />)
        ) : (
          <p style={noUsersStyle}>No users found</p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
