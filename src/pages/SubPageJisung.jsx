import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../css/nav.css';

const SubPageHoeun = () => {
  return (
    <div className="main-container2">
      {/* Header */}
      <div className="section header2">
        <img src={require('../img/pic4.jpeg')} alt="Background" className="header-image2" />
        <h1>해커</h1>
        <p>#딸기 매니아 #알콜프리 #헬린이</p>
      </div>

      {/* Profile */}
      <div className="section2">
        <div className="profile-section2">
          {/* Left */}
          <div className="about-section2">
            <h2>ABOUT</h2>
            <div className="emoji-circle2">
              <img src={require('../img/KJS.png')} alt="Profile" className="profile-image2" />
            </div>
            <h3>PM, Infra</h3>
            <p className="name2">김지성</p>
            <span className="tag2">#INFJ</span>
          </div>

          {/* Right */}
          <div className="info-section2">
            <div className="profile-info2">
              <h2>PROFILE</h2>
              <ul>
                <li>
                     🎓 전공 : SW
                </li>
                <li>
                    🎂 생일 : 2000.08.16
                </li>
                <li>
                     📍 사는 곳 : YONG-IN
                </li>
              </ul>
            </div>

            <div className="contact-info2">
              <h2>CONTACT</h2>
              <a href="https://github.com/Fragarian " target="_blank" rel="noopener noreferrer">
                <img src={require('../img/GitHub.png')} alt="GitHub" className="icon-image2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="section2">
        <div className="skills-section2">
          <h2>SKILLS</h2>
          <div className="skill-list2">
            <span className="skill-item2 highlight">Python</span>
            <span className="skill-item2 highlight">JS</span>
            <span className="skill-item2 highlight">JAVA</span>
            <span className="skill-item2 highlight">C</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer2">
        © 2025, HIGHFIVE. All Rights Reserved
      </footer>
    </div>
  );
};

export default SubPageHoeun;
