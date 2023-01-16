import React from 'react'

import './Nav.css'
import img2 from './assets/Twitter.png'
import img1 from './assets/logo 1.png'

const Nav = (props) => {
  return (
    <div>
      <div className="congrats1">
        <img
          alt="logo12121"
          src={img1}
          className="congrats-logo1"
        />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        
        }}>
          <a href='https://twitter.com/harto_fr' style={{
            fontSize: 40,
            color:"#FFF",
            marginRight: 20
          }}>Join us on</a>
          <img
          // alt="Twitterlogo12224"
          src={img2}
          style={{
            width: 50,
            height: 50,
          }}
          // className="congrats-twitterlogo1"
        />
        </div>
      </div>
    </div>
  )
}

export default Nav
