import React from "react";
import "./Usoficce.css";
import map from '../../assets/images/map.png'

const Usoficce = () => {
  return (
    <div className="office">
      <h2 className="officeh1">Наши офисы</h2>
      <img src={map} alt="" className="picmap" />
    </div>
  );
};

export default Usoficce;
