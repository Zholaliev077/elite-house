import React from "react";
import "./Partner.css";
import barterLogo from "../../assets/images/partner.png";

const Partners = () => {
  return (
    <section className="partners container">
      <h1 className="section_title">Наши партнёры</h1>
      <div className="partners_info">
        <a href="#" className="partner">
          <div>
            <img src={barterLogo} alt="logo of Barter" />
            <p>Подробнее</p>
          </div>
        </a>
        <a href="#" className="partner">
          <div>
            <img src={barterLogo} alt="logo of Barter" />
            <p>Подробнее</p>
          </div>
        </a>
        <a href="#" className="partner">
          <div>
            <img src={barterLogo} alt="logo of Barter" />
            <p>Подробнее</p>
          </div>
        </a>
        <a href="#" className="partner">
          <div>
            <img src={barterLogo} alt="logo of Barter" />
            <p>Подробнее</p>
          </div>
        </a>
        <a href="#" className="partner">
          <div>
            <img src={barterLogo} alt="logo of Barter" />
            <p>Подробнее</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Partners;
