import React, { Component } from "react"
import { render } from "react-dom"

import Fat from "../../src"

const quote = `
LE RAP
C'ETAIT
MIEUX
AVANT
`

const Demo = () => (
  <div
    style={{
      margin: "0 auto",
      width: "100%",
      textAlign: 'center'
    }}
  >
    <div
      style={{
        borderTop: '20px solid rgb(226,33,33)',
        borderBottom: '20px solid rgb(226,33,33)',
        background:'#111',
        color:'white',
        fontSize: "2em",
        fontFamily: "Impact",
        verticalAlign: "top",
        lineHeight: "0.9", // relative to fontSize
        padding: '10px 20px',
        margin: "0 auto",
        width: "60%",
        maxWidth: 500,
        boxSizing: "border-box"
      }}
    >
      <Fat>{quote}</Fat>
    </div>
  </div>
)

render(<Demo />, document.querySelector("#demo"))
