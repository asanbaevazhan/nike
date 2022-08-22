import React from 'react'
import './SectionSix.css'
import HeadlineSix from '../../components/HeadlineSix/HeadlineSix'
import nike from '../../img/nike.png'
import line from '../../img/Line.png'

const titles = [
	{
		title1: 'The application',
		title2: 'The nike',
		title3: 'App',	
		title4: 'Here you can find many interesting and useful from nike.',
        title5: 'Download the application from nike.'
	}
]

function SectionSix() {
  return (
    <div className='six'>
        <div className="title-four">
            {titles.map(title => (
                <HeadlineSix
                    title1={title.title1}
                    title2={title.title2}
                    title3={title.title3}
                    title4={title.title4}
                    title5={title.title5}
                />
            ))}
        </div>

        <div className="nike">
            <img src={nike} alt="" />
        </div>

        <div className="txt">
            <p className='club'>Nike Traning Club</p>
            <p className='wo'>Home workouts & fitness plans</p>
        </div>

        <div className="line6-footer">
            <span>View All</span>
            <img src={line} alt="" />
        </div>

    </div>
  )
}

export default SectionSix