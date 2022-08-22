import React from 'react'
import './HeadlineFour.css'

function HeadlineFour(props) {
  return (
    <div className='block-four'>
			<p className='four-title1'>{props.title1}</p>
			<p className='four-title2'>{props.title2}</p>
			<p className='four-title3'>{props.title3}</p>
      <p className='four-title4'>{props.title4}</p>
      <p className='four-title5'>{props.title5}</p>
	</div>
  )
}

export default HeadlineFour