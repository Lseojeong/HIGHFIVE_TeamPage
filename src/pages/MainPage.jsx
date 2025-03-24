import React from "react";
import '../css/main.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <h1 className="title">HIGH FIVE</h1>
      
      <img 
        src="/img/img_highfive.png" 
        alt="High Five" 
        className="highfive-image"
      />

        <h2 className="slogan">
        <span className="text-behind">COde Together</span>
        <span className="text-front">COde Together</span><br />
        <span className="text-behind">Arrive TOgether</span>
        <span className="text-front">Arrive TOgether</span>
        </h2>

    </div>
  );
};

export default MainPage;
