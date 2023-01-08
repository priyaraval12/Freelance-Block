import React from 'react'

import './metamaskconnected.css'
import img from './assets/transparent.png'
import img1 from './assets/Rectangle.png'

const Metamaskconnected = (props) => {
  return (
    <div>
      <div className="metamaskconnected-metamaskconnected">
        <span className="metamaskconnected-text">
          <span>BLOCKS.</span>
        </span>
        <img
          src={img}
          alt="transparentblock12065"
          className="metamaskconnected-transparentblock1"
        />
        <img
          src={img1}
          alt="Rectangle12065"
          className="metamaskconnected-rectangle1"
        />
        <span className="metamaskconnected-text2">
          <span>MINT</span>
        </span>
      </div>
    </div>
  )
}

export default Metamaskconnected
