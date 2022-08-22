import React from 'react'
import './Hero.css'
import dot from '../../img/Ellipse 1.png'
import logo2 from '../../img/Group 1.png'
import heropic from '../../img/Pict.png'

function Hero() {
  return (
    <div>
        <div className='dot'>
           <p> <img className='dot1' src={dot}/> Jersey <img className='dot2' src={dot}/>  Nike & NBA Collaboration </p>
        </div>
        
        <div className='headline'>
            <h1> Jersey <img src={logo2} /> NBA </h1>
        </div>

        <div className='nba-team'>
            <p>whichever <span className='nba'>nba</span> <span className='team'>team</span>  your support, get your jersey here today.</p>
        </div>

        <div className='hero-pic'>
            <img src={heropic} alt="" />
        </div>

    </div>
  )
}

export default Hero