import React from "react";
// import Button from "../base/BaseButton";
import style from "../style/Home.module.css";
import image from "../image/vick.png";

function Home({ pageProps }) {
  return (
    <div className={style.container, "border"}>
      <div className="row align-items-center justify-content-center p-0 m-0 hero">
        <div className={`${style.width}, col-lg-6 border`}>
          <div className="bg-red flex-1">
            {/* <Button {...pageProps}>Meat</Button> */}
          </div>
        </div>
        <div className={`${style.width}, col-lg-6 text-center border`}>
          <img src={image} className={`${style.width}`} alt="My logo"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
