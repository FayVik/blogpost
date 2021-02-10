import React from "react";
import Button from "../base/BaseButton";
import style from "../style/Home.module.css";
import image from "../image/vick.png";

function Home({ pageProps }) {
  return (
    <div className={style.container}>
      <div className="flex flex-wrap">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Button {...pageProps}>Meat</Button>
        </div>
        <div className="bg-teal-500 md:bg-red-500 lg:bg-teal-500">
          <img src={image} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
