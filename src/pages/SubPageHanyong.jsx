import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../css/nav.css';

const SubPageHoeun = () => {
  return (
    <div className="main-container2">
      {/* Header */}
      <div className="section header2">
        <img src={require('../img/pic2.jpeg')} alt="Background" className="header-image2" />
        <h1>E가 부러운 I</h1>
        <p>#얼리어답터 #잠만보 #삼전 8층 투숙객</p>
      </div>

      {/* Profile */}
      <div className="section2">
        <div className="profile-section2">
          {/* Left */}
          <div className="about-section2">
            <h2>ABOUT</h2>
            <div className="emoji-circle2">
                <div className = "hy">
              <img src={require('../img/LHY.png')} alt="Profile" className="profile-image2" />
              </div>
            </div>
            <h3>Backend</h3>
            <p className="name2">이한용</p>
            <span className="tag2">#ISTJ</span>
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
                    🎂 생일 : 2000.02.03
                </li>
                <li>
                     📍 사는 곳 : HANAM
                </li>
              </ul>
            </div>

            <div className="contact-info2">
              <h2>CONTACT</h2>
              <a href="https://github.com/yong203" target="_blank" rel="noopener noreferrer">
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
            <span className="skill-item2 highlight">Java</span>
            <span className="skill-item2 highlight">Python</span>
            <span className="skill-item2 highlight">Spring</span>
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
