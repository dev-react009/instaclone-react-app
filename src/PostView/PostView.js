import React from "react";
import homeImg from "../Mock-data/home.png";
import "../App.css";
import { Link } from "react-router-dom";

export default function PostView() {
    return (
        <div className="parent-css">
            <div className="child-css">
                <div className="left-css">
                    <img src={homeImg} alt="homeImg" width="100%" height="100%" />
                </div>
            <div className="right-css">
                    <h1 className="title">Welcome to the Future of Social Media</h1>
                    <p className="subtitle">Discover and share amazing moments with friends.</p>
                    <Link to="/LandingPage" style={{ textDecoration: "none" }}>
                        <button className="enter-btn">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
