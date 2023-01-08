import React from 'react'

import './concept.css'
import img from './assets/custom2.png'
const Concept = (props) => {
  return (
    <div>
      <div className="concept-concept">
        <div className="concept-text-container">
          <span className="concept-text">
            &quot;The art was generated inspired by the merkle parent principle,
            generating all the blocks from the first cubic form (0,0,0) creating
            a root of artworks and variations in colors.&quot;
          </span>
        </div>
        <img
          src={img}
          alt="untitled212064"
          className="concept-untitled21"
        />
      </div>
    </div>
  )
}

export default Concept
