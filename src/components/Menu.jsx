import "../css/menu.css";
import { NavLink } from "react-router-dom";

export default function Menu({ isOpen, onClose }) {
  return (
    <>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kimjisung"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              KIM JI SUNG
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/seominjae"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              SEO MIN JAE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leehanyong"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              LEE HAN YONG
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hanseunghyun"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HAN SEUNG HYUN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jeonghyeongpyo"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              JEONG HYEONG PYO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/parksangwoo"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PARK SANG WOO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/choohoeun"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CHOO HO EUN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leeseojeong"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              LEE SEO JEONG
            </NavLink>
          </li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={onClose} />}
    </>
  );
}
