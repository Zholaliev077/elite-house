import React from "react";
import Header from "./hero/Header/Header";
import Main from "./hero/Main/Main";
import Footer from "./hero/Footer/Footer";
import About from "./hero/About/About";
import New from "./hero/New/New";
import Stock from "./hero/Stock/Stock";
import Media from "./hero/Media/Media";
import Usoficce from "./hero/Usoficce/Usoficce";
import Partner from "./hero/Partners/Partner";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <New />
      <Stock />
      <Media />
      <Usoficce />
      <Partner />
      <Footer />
    </div>
  );
};

export default App;
