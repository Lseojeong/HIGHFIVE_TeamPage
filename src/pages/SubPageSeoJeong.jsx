import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import '../css/nav.css';

const SubPageHoeun = () => {
  return (
    <div className="main-container2">
      {/* Header */}
      <div className="section header2">
        <img src={require('../img/pic7.png')} alt="Background" className="header-image2" />
        <h1>'어떻게든 해냄'</h1>
        <p>#곰돌이 제작자 #집순이 #게으른 완벽주의자</p>
      </div>

      {/* Profile */}
      <div className="section2">
        <div className="profile-section2">
          {/* Left */}
          <div className="about-section2">
            <h2>ABOUT</h2>
            <div className="emoji-circle2">
              <img src={require('../img/LSJ.png')} alt="Profile" className="profile-image2" />
            </div>
            <h3>Front, Infra</h3>
            <p className="name2">이서정</p>
            <span className="tag2">#ISFP</span>
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
                    🎂 생일 : 2003.03.14
                </li>
                <li>
                     📍 사는 곳 : INCHEON
                </li>
              </ul>
            </div>

            <div className="contact-info2">
              <h2>CONTACT</h2>
              <a href="https://github.com/Lseojeong" target="_blank" rel="noopener noreferrer">
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
            <span className="skill-item2 highlight">HTML</span>
            <span className="skill-item2">CSS</span>
            <span className="skill-item2">JS</span>
            <span className="skill-item2 highlight">React</span>
            <span className="skill-item2">Android</span>
            <span className="skill-item2 highlight">Figma</span>
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
