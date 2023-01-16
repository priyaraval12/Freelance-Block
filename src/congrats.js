import React from 'react'

import './congrats.css'
import img from './assets/dobey.png'
import img2 from './assets/billy.png'
import img3 from'./assets/frame.png'

const Congrats = (props) => {
  return (
    <div>
      <div className="congrats-congrats">
        <span className="congrats-text">
          Team and collaborators
        </span>
        <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 80 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 40px'
        }}>
        <img
          src={img}
          alt="dobey12411"
          className="congrats-dobey1"
          />
          <span className="congrats-username">
            @DobeyDick
          </span>
        <span className="congrats-text02">
         Partnership Lead
        </span>
          </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 40px'
        }}>
        <img
          src={img2}
          alt="dobey12411"
          className="congrats-dobey1"
          />
          <span className="congrats-username">
          @BillyTheBilder
          </span>
        <span className="congrats-text02">
        Strategy Lead
        </span>
          </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 40px'
        }}>
        <img
          src={img3}
          alt="dobey12411"
          className="congrats-dobey1"
          />
          <span className="congrats-username">
          @HashCase
          </span>
        <span className="congrats-text02">
        Tech Lead
        </span>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Congrats
