import React from "react";
import "./Stock.css";
import stock from "../../assets/images/stock.img.png";
import strelka from "../../assets/images/strelka.png";
import right_strelka from "../../assets/images/right_strelka.png";
import selectionpic from "../../assets/images/slection_pic.png";

const Stock = () => {
  return (
    <div className="stock-container">
      <h2 className="aktion">Акции</h2>
      <img src={stock} alt="stock image" className="stock-image" />
      <img src={strelka} alt="" className="left_image" />
      <img src={right_strelka} alt="" className="right_image" />
      <img src={selectionpic} alt="" className="selection_pic"/>
    </div>
  );
};

export default Stock;
