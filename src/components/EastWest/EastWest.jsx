import React from 'react'
import './EastWest.css'

function EastWest(props) {
  return (
    <div className='eastwest-block' >
        <img src={props.img} className="east-west-img"  alt='' />
    </div>
  )
}

export default EastWest