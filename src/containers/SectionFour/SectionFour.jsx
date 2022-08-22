import React from 'react'


import HeadlineFour from '../../components/HeadlineFour/HeadlineFour.jsx'
import Slider from '../../components/Slider/Slider.jsx'
import line from '../../img/Line.png'
import './SectionFour.css'

const titles4 = [
	{
		title1: 'Hall of fame',
		title2: 'BAsketball',
		title3: 'Hall of fame',	
		title4: 'The naismith memorial basketball hall of fame is home to more than',
    title5: 'Four nundred iductees and more than 40 000 square feet of basketball history.'
	}
]

function SectionFour() {
  return (
    <div className='four'>
        <div className="title-four">
            {titles4.map(title => (
                <HeadlineFour
                    title1={title.title1}
                    title2={title.title2}
                    title3={title.title3}
                    title4={title.title4}
                    title5={title.title5}
                />
            ))}
        </div>
       
       <div className='years'>
        <p>2005</p>
        <p>2006</p>
        <p>2007</p>
        <p>2008</p>
        <p className='nine'>2009</p>
        <p>2010</p>
        <p>2011</p>
        <p>2012</p>
       </div>

        <div className='slider'>
          <p className='number-one'>1959</p>
          <Slider />
          <p className='number-two'>2019</p>
        </div>
        
        <div className="jordan">
          <h2> <span className='michael'>Michael</span>  jordan</h2>
          <div className="line4">
            <span>View all</span>
            <img src={line} alt="" />
          </div>
        </div>

        <div className="robinson">
        <h2> <span className='david'>David</span> Robinson</h2>
          <div className="line4">
            <span>View all</span>
            <img src={line} alt="" />
          </div>
        </div>

        <div className="stockton">
          <h2>John stockton</h2>
          <div className="line4">
            <span>View all</span>
            <img src={line} alt="" />
          </div>
        </div>

        <div className="line4-footer">
            <span>Official Site</span>
            <img src={line} alt="" />
          </div>
    </div>
  )
}

export default SectionFour
