import React from 'react'
import './HeadlineOne.css'

function HeadlineOne({title1, title2, title3, title4}) {
  return (
    <div className='block'>
			<p className='title1'>{title1}</p>
			<p className='title2'>{title2}</p>
			<p className='title3'>{title3}</p>
      <p className='title4'>{title4}</p>
		</div>
  )
}

export default HeadlineOne


		


