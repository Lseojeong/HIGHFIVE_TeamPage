import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../css/nav.css';

const SubPageHoeun = () => {
  return (
    <div className="main-container2">
      {/* Header */}
      <div className="section header2">
        <img src={require('../img/pic5.jpeg')} alt="Background" className="header-image2" />
        <h1>열정만 있는 사람</h1>
        <p>#AI 분야 #집사 2호 #기숙사 4년차</p>
      </div>

      {/* Profile */}
      <div className="section2">
        <div className="profile-section2">
          {/* Left */}
          <div className="about-section2">
            <h2>ABOUT</h2>
            <div className="emoji-circle2">
              <img src={require('../img/SMJ.png')} alt="Profile" className="profile-image2" />
            </div>
            <h3>AI</h3>
            <p className="name2">서민재</p>
            <span className="tag2">#ISTP</span>
          </div>

          {/* Right */}
          <div className="info-section2">
            <div className="profile-info2">
              <h2>PROFILE</h2>
              <ul>
                <li>
                     🎓 전공 : CSE
                </li>
                <li>
                    🎂 생일 : 2001.09.06
                </li>
                <li>
                     📍 사는 곳 : INCHEON
                </li>
              </ul>
            </div>

            <div className="contact-info2">
              <h2>CONTACT</h2>
              <a href="https://github.com/seominjae1 " target="_blank" rel="noopener noreferrer">
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
            <span className="skill-item2">C</span>
            <span className="skill-item2">Python</span>
            <span className="skill-item2 highlight">JAVA</span>
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
