import React from 'react'
import './HeadlineFive.css'

function HeadlineFive(props) {
  return (
    <div className='block5'>
		<p className='headline-five-title1'>{props.title1}</p>

      <div className='team-usa'>
        <span className='headline-five-title2'>{props.title2}</span>
        <span className='headline-five-title3'>{props.title3}</span>
      </div>

      <div className="authentic-edition">
          <span className='headline-five-title4'>{props.title4}</span>
      </div>

        <p className='headline-five-title5'>{props.title5}</p>
        <p className='headline-five-title6'>{props.title6}</p>
	</div>
  )
}

export default HeadlineFive