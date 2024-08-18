import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import Navbar from "./Navbar.js";

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://instaclone-express-app.vercel.app/api/get/post",{method:"GET"});
        let data = await response.json();
        setUsers(data.reverse());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
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
        {loading ? ( 
          <p style={noUsersStyle}>Loading...</p>
        ) : users.length > 0 ? (
          users.map((obj, idx) => <Card key={"Sree" + idx} obj={obj} />)
        ) : (
          <p style={noUsersStyle}>No Users Found</p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
