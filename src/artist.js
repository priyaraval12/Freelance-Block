import React from 'react'

import './artist.css'
import img from './assets/harto.png'

const Artist = (props) => {
  return (
    <div>
      <div className="artist-artist">
        <div className='artist-bio'>
          <span className='artist-name'>Harto</span>
          <span className='artist-sub'>Meet the artist.</span>
          <span className='artist-label'>Arturo Fernández Rodríguez, alias Harto (Barcelona,Spain b. 1993) is a multidisciplinary 
          artist and designer inspired by nature, theater and new technologies.Graduated in industrial
          design and prototyping in 2016, he will work as a creator of art installations and street shows,
           working on international shows until 2020.</span>

           <span className='artist-label'> In 2020, Harto decides to fully immerse himself in digital creation and the world of NFTs, where a few 
          months later he will achieve some exhibitions in international marketplaces and galleries.</span>

          <span className='artist-label'>Highlights include works exhibited in New York, Miami, Hong Kong and a project with 50 international
          artists that took the first NFT into space thanks to the Rakia mission, supported by Space X and NASA.
          </span>
           </div>
        <div><img
          src={img}
          alt="hartotransparent12416"
          className="artist-hartotransparent1"
        /></div>
        
      </div>
    </div>
  )
}

export default Artist
