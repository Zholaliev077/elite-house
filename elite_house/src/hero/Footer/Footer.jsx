import React from "react";
import "./Footer.css";
import apps2 from "../../assets/images/apps2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav2">
        <a href="#about">О нас</a>
        <a href="#projects">Объекты</a>
        <a href="#online-camera">Онлайн-камеры</a>
        <a href="news">Новости</a>
        <a href="#media">Медиа</a>
        <a href="#vacation">Вакансии</a>
        <a href="#carebyclients">Забота о клиентах</a>
      </nav>

      <nav className="nav3">
        <a href="#">Управляющая компания</a>
        <a href="#">Агентская программа</a>
        <a href="#">Способы оплаты</a>
        <a href="#">Barter.kg</a>
        <a href="#">Контакты</a>
        <a href="#">Офисы продаж</a>
      </nav>

      <nav className="nav4">
        <a href="#">
          Адрес: г.Бишкек, ул. Абдрахманова, 170/1, бизнес-центр «Ордо», 7 этаж
        </a>
        <br />
        <a href="#">elithouse@gmail.com</a>
        <br />
        <img src={apps2} alt="" className="apps2" />
      </nav>

      <nav className="nav3">
        <a href="#">Телефон: </a>
        <a href="#">0 (555) 555 - 555</a>
        <a href="#">0 (555) 555 - 555</a>
      </nav>
    </footer>
  );
};

export default Footer;
