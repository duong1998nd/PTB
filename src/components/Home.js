import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

/* A */
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="background-gradient h-screen flex  flex-col justify-center items-center text-center">
      <div className="home-container"> 
        <h1 className="text-5xl font-bold text-pink-600 mb-4">Personal photobooth</h1> 
        <p className="text-lg text-gray-700 mb-6">
          This is your personal photobooth at home.
        </p>      
          
        <img src="/strip.JPG" alt="photobooth strip" className="photobooth-strip"/>
        
        <button onClick={() => navigate("/welcome")} className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
          START
        </button>

        <footer className="mt-8 text-sm text-gray-600">
          <p>
            follow me{" "}
            <a
              href="https://www.facebook.com/duong1998nd" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "pink", textDecoration: "none" }}>
              Nguyễn Quang Đương
              </a>
            </p>
        </footer>
      </div>
    </div>
    );
  };

export default Home;
