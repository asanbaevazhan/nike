import React from 'react'
import './HeadlineTwo.css'

function HeadlineTwo({title1, title2, title3, title4, title5, title6}) {
  return (
    <div className='block2'>
			<p className='headline-two-title1'>{title1}</p>

      <div className='one-store'>
          <span className='headline-two-title2'>{title2}</span>
          <span className='headline-two-title3'>{title3}</span>
      </div>

      <div className="every-team">
          <span className='headline-two-title4'>{title4}</span>
          <span className='headline-two-title5'>{title5}</span>
      </div>


      <p className='headline-two-title6'>{title6}</p>
	</div>
  )
}

export default HeadlineTwo