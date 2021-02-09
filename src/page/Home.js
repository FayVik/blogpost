import React from 'react'
import Button from "../base/BaseButton"
import style from "../style/Home.module.css"

function Home({pageProps}) {
  return (
    <div className={style.container}> 
      <div className="row m-0 p-0 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          {/* <Button {...pageProps}>Meat</Button> */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src="../../image/vick.JPG" width="400"/>
        </div>
        
      </div>
    </div>
  )
}

export default Home
