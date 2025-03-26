import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../css/nav.css';

const SubPageHoeun = () => {
  return (
    <div className="main-container2">
      {/* Header */}
      <div className="section header2">
        <img src={require('../img/pic8.png')} alt="Background" className="header-image2" />
        <h1>개발자 호소인</h1>
        <p>#프로 밤샘러 #코드 리뷰 미친자 #매일 1교시 통학러</p>
      </div>

      {/* Profile */}
      <div className="section2">
        <div className="profile-section2">
          {/* Left */}
          <div className="about-section2">
            <h2>ABOUT</h2>
            <div className="emoji-circle2">
              <img src={require('../img/HSH.png')} alt="Profile" className="profile-image2" />
            </div>
            <h3>Backend</h3>
            <p className="name2">한승현</p>
            <span className="tag2">#ISFP</span>
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
                    🎂 생일 : 2001.06.15
                </li>
                <li>
                     📍 사는 곳 : SUWON
                </li>
              </ul>
            </div>

            <div className="contact-info2">
              <h2>CONTACT</h2>
              <a href="https://github.com/1winhyun " target="_blank" rel="noopener noreferrer">
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
            <span className="skill-item2 highlight">Kotlin</span>
            <span className="skill-item2 highlight">Spring</span>
            <span className="skill-item2 highlight">JAVA</span>
            <span className="skill-item2">MYSQL</span>
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
