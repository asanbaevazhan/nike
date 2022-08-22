import React from 'react'
import './HeadlineSix.css'

function HeadlineSix(props) {
  return (
    <div className='block-six'>
			<p className='six-title1'>{props.title1}</p>
			<p className='six-title2'>{props.title2}</p>
			<p className='six-title3'>{props.title3}</p>
            <p className='six-title4'>{props.title4}</p>
            <p className='six-title5'>{props.title5}</p>
	</div>
  )
}

export default HeadlineSix