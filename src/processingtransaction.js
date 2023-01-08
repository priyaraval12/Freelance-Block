import React from 'react'

import './processingtransaction.css'
import img from './assets/transparent2.png'
const Processingtransaction = (props) => {
  return (
    <div>
      <div className="processingtransaction-processingtransaction">
        <img
          src={img}
          alt="transparentblock22087"
          className="processingtransaction-transparentblock2"
        />
        <span className="processingtransaction-text">
          <span>Minting...</span>
        </span>
      </div>
    </div>
  )
}

export default Processingtransaction
