import React from 'react'
import './HeadlineThree.css'

function HeadlineThree({title1, title2, title3, title4, title5, title6}) {
  return (
    <div className='block2'>
		<p className='headline-three-title1'>{title1}</p>

      <div className='kobe-bryant'>
        <span className='headline-three-title2'>{title2}</span>
        <span className='headline-three-title3'>{title3}</span>
      </div>

      <div className="authentic">
          <span className='headline-three-title4'>{title4}</span>
      </div>

        <p className='headline-three-title5'>{title5}</p>
        <p className='headline-three-title6'>{title6}</p>
	</div>
  )
}

export default HeadlineThree