import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../css/nav.css';

const SubPageHoeun = () => {
  return (
    <div className="main-container2">
      {/* Header */}
      <div className="section header2">
        <img src={require('../img/pic6.jpeg')} alt="Background" className="header-image2" />
        <h1>냥이 집사</h1>
        <p>#긍정왕 #커피 사랑꾼 #동물 애호가</p>
      </div>

      {/* Profile */}
      <div className="section2">
        <div className="profile-section2">
          {/* Left */}
          <div className="about-section2">
            <h2>ABOUT</h2>
            <div className="emoji-circle2">
              <img src={require('../img/PSW.png')} alt="Profile" className="profile-image2" />
            </div>
            <h3>Backend</h3>
            <p className="name2">박상우</p>
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
                    🎂 생일 : 1999.10.17
                </li>
                <li>
                     📍 사는 곳 : SEOUL
                </li>
              </ul>
            </div>

            <div className="contact-info2">
              <h2>CONTACT</h2>
              <a href="https://github.com/swp1017 " target="_blank" rel="noopener noreferrer">
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
            <span className="skill-item2 highlight">Spring</span>
            <span className="skill-item2 highlight">Python</span>
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
