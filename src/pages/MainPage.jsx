import React from "react";
import '../css/main.css';
import { Link } from "react-router-dom";

const MainPage = () => {
  const teamMembers = [
    {
      path: "/kimjisung",
      imgSrc: "/img/emoji_jisung.png",
      alt: "김지성 이모지",
      role: "PM, Infra",
      name: "김지성",
      mbti: "#INFJ",
    },
    {
      path: "/seominjae",
      imgSrc: "/img/emoji_minjae.png",
      alt: "서민재 이모지",
      role: "AI",
      name: "서민재",
      mbti: "#ISTP",
    },
    {
      path: "/leehanyong",
      imgSrc: "/img/emoji_hanyong.png",
      alt: "이한용 이모지",
      role: "BackEnd",
      name: "이한용",
      mbti: "#ISTJ",
    },
    {
      path: "/hanseunghyun",
      imgSrc: "/img/emoji_seunghyun.png",
      alt: "한승현 이모지",
      role: "BackEnd, Infra",
      name: "한승현",
      mbti: "#ISFP",
    },
    {
      path: "/jeonghyeongpyo",
      imgSrc: "/img/emoji_hyeongpyo.png",
      alt: "정형표 이모지",
      role: "AI",
      name: "정형표",
      mbti: "#INTP",
    },
    {
      path: "/parksangwoo",
      imgSrc: "/img/emoji_sangwoo.png",
      alt: "박상우 이모지",
      role: "BackEnd",
      name: "박상우",
      mbti: "#INFJ",
    },
    {
      path: "/choohoeun",
      imgSrc: "/img/emoji_hoeun.png",
      alt: "추호은 이모지",
      role: "FrontEnd, Infra",
      name: "추호은",
      mbti: "#INTJ",
    },
    {
      path: "/leeseojeong",
      imgSrc: "/img/emoji_seojeong.png",
      alt: "이서정 이모지",
      role: "FrontEnd",
      name: "이서정",
      mbti: "#ISFP",
    },
  ];
  
  return (
    <>
      {/* 1단: 메인 화면 */}
      <div className="main-container">
        <h1 className="title">HIGH FIVE</h1>
        <img 
          src="/img/img_highfive.png" 
          alt="High Five" 
          className="highfive-image"
        />
        <h2 className="slogan">
          <div className="line">
            <span className="text-behind">COde TOgether</span>
            <span className="text-front">COde TOgether</span>
          </div>
          <div className="line">
            <span className="text-behind">Arrive TOgether</span>
            <span className="text-front">Arrive TOgether</span>
          </div>
        </h2>
      </div>

      {/* 2단: 마르키(이름) */}
      <div className="white-section">
        <div className="marquee">
          <div className="marquee-content">
            KIM JI SUNG &nbsp;&nbsp; SEO MIN JAE &nbsp;&nbsp; LEE HAN YONG &nbsp;&nbsp; HAN SEUNG HYUN &nbsp;&nbsp; 
            JEONG HYEONG PYO &nbsp;&nbsp; PARK SANG WOO &nbsp;&nbsp; CHOO HO EUN &nbsp;&nbsp; LEE SEO JEONG &nbsp;&nbsp;
            KIM JI SUNG &nbsp;&nbsp; SEO MIN JAE &nbsp;&nbsp; LEE HAN YONG &nbsp;&nbsp; HAN SEUNG HYUN &nbsp;&nbsp; 
            JEONG HYEONG PYO &nbsp;&nbsp; PARK SANG WOO &nbsp;&nbsp; CHOO HO EUN &nbsp;&nbsp; LEE SEO JEONG
          </div>
        </div>
      </div>

      {/* 팀 섹션 */}
      <div className="team-section">
        <div className="team-photo-wrapper">
          <img src="/img/img_groupphoto.png" alt="팀 단체 사진" className="team-photo" />
        </div>
      </div>

      {/* 멤버 카드 섹션 */}
      <div className="white-background">
        <div className="member-cards">
          {teamMembers.map((member, index) => (
            <div
              // 배열의 "첫 4명"만 overlap-photo 클래스 부여
              className={`member-card ${index < 4 ? "overlap-photo" : ""}`}
              key={index}
            >
              <div className="emoji-circle">
                <img
                  src={member.imgSrc}
                  alt={member.alt}
                  className={`emoji ${member.name === "이한용" ? "emoji-large" : ""}`}
                />
              </div>
              <div className="role">{member.role}</div>
              <div className="name">
                <Link to={member.path}>{member.name}</Link>
              </div>
              <div className="mbti-container">
                <div className="mbti">{member.mbti}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 푸터 영역 */}
      <footer className="footer">
        <img src="/img/logo.png" alt="HIGHFIVE 로고" className="footer-logo" />
        <p className="footer-text">© 2025, HIGHFIVE. All Rights Reserved</p>
      </footer>
    </>
  );
};

export default MainPage;
