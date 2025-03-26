import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../css/nav.css';

const SubPageHoeun = () => {
  return (
    <div className="main-container2">
      {/* Header */}
      <div className="section header2">
        <img src={require('../img/pic3.png')} alt="Background" className="header-image2" />
        <h1>도파민 수집사</h1>
        <p>#커피 맛있어 #게으른 뱅이 #개미</p>
      </div>

      {/* Profile */}
      <div className="section2">
        <div className="profile-section2">
          {/* Left */}
          <div className="about-section2">
            <h2>ABOUT</h2>
            <div className="emoji-circle2">
              <img src={require('../img/JHP.png')} alt="Profile" className="profile-image2" />
            </div>
            <h3>AI</h3>
            <p className="name2">정형표</p>
            <span className="tag2">#INTP</span>
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
                    🎂 생일 : 2000.01.09
                </li>
                <li>
                     📍 사는 곳 : ANSAN
                </li>
              </ul>
            </div>

            <div className="contact-info2">
              <h2>CONTACT</h2>
              <a href="https://github.com/urusekai?tab=repositories" target="_blank" rel="noopener noreferrer">
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
            <span className="skill-item2 highlight">js</span>
            <span className="skill-item2 highlight">react</span>
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
