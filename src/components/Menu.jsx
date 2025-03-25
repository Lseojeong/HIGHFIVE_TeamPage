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
              to="/kim-ji-sung"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              KIM JI SUNG
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/seo-min-jae"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              SEO MIN JAE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lee-han-yong"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              LEE HAN YONG
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/han-seung-hyun"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HAN SEUNG HYUN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jeong-hyeong-pyo"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              JEONG HYEONG PYO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/park-sang-woo"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PARK SANG WOO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/choo-ho-eun"
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CHOO HO EUN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lee-seo-jeong"
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
