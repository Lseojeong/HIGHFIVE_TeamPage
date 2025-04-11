import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../css/nav.css';

const SubPageHoeun = () => {
  return (
    <div className="main-container">
      {/* Header */}
      <div className="section header">
        <img src={require('../img/pic1.png')} alt="Background" className="header-image" />
        <h1>열정 Girl</h1>
        <p>#질문왕 #스벅2년차 #프론트0년차 #보안1년차</p>
      </div>

      {/* Profile */}
      <div className="section">
        <div className="profile-section">
          {/* Left  */}
          <div className="about-section">
            <h2>ABOUT</h2>
            <div className="emoji-circle">
            <img src={require('../img/Choo.png')} alt="Profile" className="profile-image" />
            </div>
            <h3>Front, Infra</h3>
            <p className="name">추호은</p>
            <span className="tag">#INTJ</span>
          </div>
            

          {/* Right*/}
          <div className="info-section">
            <div className="profile-info">
              <h2>PROFILE</h2>
              <ul>
                <li>
                  <span className="icon">🎓</span> 전공 : AI
                </li>
                <li>
                  <span className="icon">🎂</span> 생일 : 2002.01.02
                </li>
                <li>
                  <span className="icon">📍</span> 사는 곳 : INCHEON
                </li>
              </ul>
            </div>

            <div className="contact-info">
              <h2>CONTACT</h2>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={require('../img/GitHub.png')} alt="GitHub" className="icon-image" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="section">
        <div className="skills-section">
          <h2>SKILLS</h2>
          <div className="skill-list">
            <span className="skill-item">C</span>
            <span className="skill-item highlight">UNITY</span>
            <span className="skill-item">JAVA</span>
            <span className="skill-item highlight">NXP</span>
            <span className="skill-item highlight">Figma</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2025, HIGHFIVE. All Rights Reserved
      </footer>
    </div>
  );
};

export default SubPageHoeun;
