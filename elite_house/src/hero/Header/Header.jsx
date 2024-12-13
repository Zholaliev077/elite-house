import React from "react";
import "./Header.css";
import logo from "../../assets/images/elite_first.png";
import apps from "../../assets/images/apps.png.png";
import what from "../../assets/images/whatsap.png";
import num from "../../assets/images/num.png.png";
import sun from "../../assets/images/sun.png.png";

const Header = () => {
  return (
    <header className="header">
      <div className="partname">
        <img src={logo} alt="" className="logo" />
      </div>
      <nav className="nav">
        <a href="#about">О нас</a>
        <a href="#projects">Объекты</a>
        <a href="#news">Новости</a>
        <a href="#contacts">Контакты</a>
      </nav>
       <div className="pic">
      <img src={apps} alt="" className="apps" />
      <img src={what} alt="" className="what" />
      <img src={num} alt="" className="num" />
      <img src={sun} alt="" className="sun" />
      </div>
    </header>
  );
};

export default Header;
