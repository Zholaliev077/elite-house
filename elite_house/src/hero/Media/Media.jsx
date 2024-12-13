import React from "react";
import "./Media.css";
import black1 from "../../assets/images/pic1.png";
import black2 from "../../assets/images/pic2.png";
import black3 from "../../assets/images/pic3.png";

const Media = () => {
  return (
    <section className="media">
      <h2 className="h2media">Медиа</h2>
      <div className="wrapper2">
        <div className="blackpic">
          <img src={black1} alt="" />
          <h2>Новые офисы</h2>
          <span className="line1"></span>
          <p>
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более...
          </p>
        </div>

        <div className="blackpic">
          <img src={black2} alt="" />
          <h2>Новые офисы</h2>
          <span className="line1"></span>
          <p>
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более...
          </p>
        </div>

        <div className="blackpic">
          <img src={black3} alt="" />
          <h2>Новые офисы</h2>
          <span className="line1"></span>
          <p>
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Media;
