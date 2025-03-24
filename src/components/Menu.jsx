import "../css/menu.css";

export default function Menu({ isOpen, onClose }) {
  return (
    <>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li className="active">HOME</li>
          <li>KIM JI SUNG</li>
          <li>SEO MIN JAE</li>
          <li>LEE HAN YONG</li>
          <li>HAN SEUNG HYUN</li>
          <li>JEONG HYEONG PYO</li>
          <li>PARK SANG WOO</li>
          <li>CHOO HO EUN</li>
          <li>LEE SEO JEONG</li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={onClose} />}
    </>
  );
}
