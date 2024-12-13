import React from "react";
import "./About.css";
// import Logo from "../../assets/images/logo_1.png";
import Logo from "../../assets/images/text.png.png";
import Logo2 from "../../assets/images/logo_2.png";
import Logo3 from "../../assets/images/logo_3.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>О нас</h2>
        <p>
          Строительная компания Elite House была основана в 2013 году и является
          одним из лидеров строительной отрасли Кыргызстана. Компания Elite
          House не привлекает займы и работает исключительно на собственные
          средства.
        </p>
        <p>
          По итогам 2019 года компания Elite House была признана «Лучшей
          компанией по строительству многоэтажных домов премиум-класса в
          Кыргызстане».
        </p>
      </div>
      <div className="about-stats">
        <div className="stat-item">
          <div className="key">
            <img src={Logo} alt="" />
          </div>
          <div>
            <h3>1000</h3>
            <p>и более дольщиков</p>
          </div>
        </div>
        <div className="stat-item">
          <div>
            <img src={Logo2} alt="" />
          </div>
          <div>
            <h3>#1</h3>
            <p>Выбор года 2019</p>
          </div>
        </div>
        <div className="stat-item">
          <div>
            <img src={Logo3} alt="" />
          </div>  
          <div>
            <h3>7</h3>
            <p>Лет на рынке</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
