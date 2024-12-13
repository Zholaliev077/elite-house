import React from "react";
import "./Main.css";
import building from "../../assets/images/elite.png.png";

const Main = () => {
  return (
    <main className="main">
      <img src={building} alt="Building" className="main-image" />
      <button className="apply-button">Оставить заявку</button>
    </main>
  );
};

export default Main;
