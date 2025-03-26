import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import KimJiSung from "./pages/SubPageJisung";
import SeoMinJae from "./pages/SubPageMinjae";
import LeeHanYong from "./pages/SubPageHanyong";
import HanSeungHyun from "./pages/SubPageSeunghyun";
import JeongHyeongPyo from "./pages/SubPageHyeongpyo";
import ParkSangWoo from "./pages/SubPageSangwoo";
import ChooHoEun from "./pages/SubPageHoeun";
import LeeSeoJeong from "./pages/SubPageSeoJeong";

function App() {
  return (
    <Router>
      <Nav /> {/* 네비게이션 바 */}
      <Routes>
        {/* 기본 메인 페이지 */}
        <Route path="/" element={<MainPage />} />

        {/* 서브 페이지 경로 */}
        <Route path="/kimjisung" element={<KimJiSung />} />
        <Route path="/seominjae" element={<SeoMinJae />} />
        <Route path="/leehanyong" element={<LeeHanYong />} />
        <Route path="/hanseunghyun" element={<HanSeungHyun />} />
        <Route path="/jeonghyeongpyo" element={<JeongHyeongPyo />} />
        <Route path="/parksangwoo" element={<ParkSangWoo />} />
        <Route path="/choohoeun" element={<ChooHoEun />} />
        <Route path="/leeseojeong" element={<LeeSeoJeong />} />
      </Routes>
    </Router>
  );
}

export default App;
