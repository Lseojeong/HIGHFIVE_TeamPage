import React from "react";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage"; // MainPage import 추가

function App() {
  return (
    <div>
      <Nav /> {/* 네비게이션 바 추가 */}
      <MainPage /> {/* 메인 페이지 렌더링 */}
    </div>
  );
}

export default App;
