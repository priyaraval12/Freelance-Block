import React from 'react'

import './frame3.css'
import img from './assets/custom1.png'

const Frame3 = (props) => {
  return (
    <div>
      <div className="frame3-frame3">
        <div style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          marginRight:100,
        }}>
            <span style={{
              color:"#FFF",
              fontSize:48,
              textAlign:'center',
              fontWeight:'bold',
            }}>1 BLOCK = 1 BLOCK</span>

            <span style={{
              color:"#FFF",
              fontSize:20,
              textAlign:'center',
              marginTop: 20,
            }}>BLOCKS IS AN ARTISTIC PROJECT.<br />0 ROADMAP</span>
            <span style={{
              color:"#FFF",
              fontSize:20,
              textAlign:'center',
              marginTop: 20,
            }}>ONLY ART.</span>
        </div>
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
        }}>
        <img
          src={img}
          alt="custom112052"
          className="frame3-custom11"
        />
        <span style={{
              color:"#FFF",
              fontSize:32,
              textAlign:'center',
              fontWeight:'bold',
              marginTop: 20,
            }}>0.027Ξ</span>
        </div>
      </div>
    </div>
  )
}

export default Frame3
