import React, { useState, useEffect } from "react"

function BaseButton({children}){
  let bgcolor = "rebeccapurple"
  let color = "#ffffff"
  let padd = "10px 60px"
  let border = "none"
  let borderRadius = "50px"
  let fontSize = "20px"
  let fontWeight = "500"
  let mar = "5px 0 5px 0"
  
  const [colorCode, setColor] = useState('');
  useEffect(() => {
    setColor(bgcolor, color, padd, border, borderRadius, fontSize, fontWeight, mar);
  })

  return(

    <div>
      <button style={{background: colorCode, color, padding: padd, border, borderRadius, fontSize, fontWeight, margin: mar}}>
        {children}
      </button>
    </div>
  )
}

export default BaseButton;