import { useState } from "react";
import "../css/nav.css";
import Menu from "./Menu";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav-container">
      {/* 로고 */}
      <img src="/img/logo.png" alt="Logo" className="logo" />

      {/* 햄버거 버튼 */}
      <button onClick={toggleMenu} className="menu-button">
        <img src="/img/ic_menu.png" alt="Menu" className="menu-icon" />
      </button>

      {/* 서브 메뉴 컴포넌트 */}
      <Menu isOpen={isOpen} onClose={closeMenu} />
    </nav>
  );
}
