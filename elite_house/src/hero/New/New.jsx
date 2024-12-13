import React from "react";
import "./New.css";
import house1 from "../../assets/images/house-1.png";
import house2 from "../../assets/images/house-2.png";
import house3 from "../../assets/images/house-3.png";
import house4 from "../../assets/images/house-4.png";
import house5 from "../../assets/images/house-5.png";
import house6 from "../../assets/images/house-6.png";
import logo from "../../assets/images/Union (1).png";
import logo2 from "../../assets/images/Union (2).png";
import logo3 from "../../assets/images/Union.png";

const New = () => {
  return (
    <section className="new">
      <button className="new-button">Новые</button>

      <div className="wrapper">
        <div className="house">
          <img src={house1} alt="" />
          <div className="info">
            <h2>Александрия</h2>
            <img src={logo} alt="" />
          </div>
          <span className="line"></span>
          <div className="info2">
            <img src="" alt="" />
            <h3>ул.Токтогула/Исанова</h3>
          </div>
        </div>
        <div className="house">
          <img src={house2} alt="" />
          <div className="info">
            <h2>Эль Классик</h2>
            <img src={logo2} alt="" />
          </div>
          <span className="line"></span>
          <div>
            <h3>ул. Коенкозова/ул. Чуйкова</h3>
          </div>
        </div>
        <div className="house">
          <img src={house3} alt="" />
          <div className="info">
            <h2>Эль Классик Плюс</h2>
            <img src={logo3} alt="" />
          </div>

          <span className="line"></span>
          <div>
            <h3>ул.Токтогула/Исанова</h3>
          </div>
        </div>
        <div className="house">
          <img src={house4} alt="" />
          <div className="info">
            <h2>Итальянский квартал</h2>
            <img src={logo2} alt="" />
          </div>
          <span className="line"></span>
          <div>
            <h3>ул.Токтогула/Исанова</h3>
          </div>
        </div>
        <div className="house">
          <img src={house5} alt="" />
          <div className="info">
            <h2>Асанбай ордо</h2>
            <img src={logo2} alt="" />
          </div>
          <span className="line"></span>
          <div>
            <h3>ул.Токтогула/Исанова</h3>
          </div>
        </div>
        <div className="house">
          <img src={house6} alt="" />
          <div className="info">
            <h2>Континенталь</h2>
            <img src={logo2} alt="" />
          </div>
          <span className="line"></span>
          <div>
            <h3>ул.Токтогула/Исанова</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
