import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../css/nav.css';

const SubPageHoeun = () => {
  return (
    <div className="main-container2">
      {/* Header */}
      <div className="section header2">
        <img src={require('../img/pic1.png')} alt="Background" className="header-image2" />
        <h1>열정 Girl</h1>
        <p>#질문왕 #스벅2년차 #프론트0년차 #보안1년차</p>
      </div>

      {/* Profile */}
      <div className="section2">
        <div className="profile-section2">
          {/* Left */}
          <div className="about-section2">
            <h2>ABOUT</h2>
            <div className="emoji-circle2">
              <img src={require('../img/Choo.png')} alt="Profile" className="profile-image2" />
            </div>
            <h3>Front, Infra</h3>
            <p className="name2">추호은</p>
            <span className="tag2">#INTJ</span>
          </div>

          {/* Right */}
          <div className="info-section2">
            <div className="profile-info2">
              <h2>PROFILE</h2>
              <ul>
                <li>
                  <span className="icon-image2"></span> 🎓 전공 : AI
                </li>
                <li>
                  <span className="icon-image2"></span> 🎂 생일 : 2002.01.02
                </li>
                <li>
                  <span className="icon-image2"></span> 📍 사는 곳 : INCHEON
                </li>
              </ul>
            </div>

            <div className="contact-info2">
              <h2>CONTACT</h2>
              <a href="https://github.com/Choohoeun" target="_blank" rel="noopener noreferrer">
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
            <span className="skill-item2 highlight">C</span>
            <span className="skill-item2 highlight">UNITY</span>
            <span className="skill-item2">JAVA</span>
            <span className="skill-item2 highlight">NXP</span>
            <span className="skill-item2">Figma</span>
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
