import React from "react";
import Button from "../base/BaseButton";
import style from "../style/Home.module.css";
import image from "../image/vick.png";

function Home({ pageProps }) {
  return (
    <div className={style.container}>
      <div className="flex flex-wrap items-center justify-center">
        <div className={style.width}>
          <div className="bg-red">
            <Button {...pageProps}>Meat</Button>
          </div>
        </div>
        <div className={style.width}>
          <img src={image}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
