import React from 'react'

import HeadlineTwo from '../../components/HeadlineTwo/HeadlineTwo'
import './SectionTwo.css'
import EastWest from '../../components/EastWest/EastWest.jsx'

import line from '../../img/Line.png'

// EAST
import east1 from '../../img/east-west/east1.png'
import east2 from '../../img/east-west/east2.png'
import east3 from '../../img/east-west/east3.png'
import east4 from '../../img/east-west/east4.png'
import east5 from '../../img/east-west/east5.png'
import east6 from '../../img/east-west/east6.png'
import east7 from '../../img/east-west/east7.png'
import east8 from '../../img/east-west/east8.png'
import east9 from '../../img/east-west/east9.png'
import east10 from '../../img/east-west/east10.png'
import east11 from '../../img/east-west/east11.png'
import east12 from '../../img/east-west/east12.png'
import east13 from '../../img/east-west/east13.png'
import east14 from '../../img/east-west/east14.png'
import east15 from '../../img/east-west/east15.png'

// WEST
import west1 from '../../img/east-west/west1.png'
import west2 from '../../img/east-west/west2.png'
import west3 from '../../img/east-west/west3.png'
import west4 from '../../img/east-west/west4.png'
import west5 from '../../img/east-west/west5.png'
import west6 from '../../img/east-west/west6.png'
import west7 from '../../img/east-west/west7.png'
import west8 from '../../img/east-west/west8.png'
import west9 from '../../img/east-west/west9.png'
import west10 from '../../img/east-west/west10.png'
import west11 from '../../img/east-west/west11.png'
import west12 from '../../img/east-west/west12.png'
import west13 from '../../img/east-west/west13.png'
import west14 from '../../img/east-west/west14.png'
import west15 from '../../img/east-west/west15.png'

const titles = [
	{
		title1: 'Every team', 
		title2: 'One',
    title3: 'store',	
		title4: 'Every',	
    title5: 'team',	
		title6: 'Select your favorite team to view it’s jersys.'
	}
]

const easts = [
	{
		img: east1
	},
  {
		img: east2
	},
  {
		img: east3
	},
  {
		img: east4
	},
  {
		img: east5
	},
  {
		img: east6
	},
  {
		img: east7
	},
  {
		img: east8
	},
  {
		img: east9
	},
  {
		img: east10
	},
  {
		img: east11
	},
  {
		img: east12
	},
  {
		img: east13
	},
  {
		img: east14
	},
  {
		img: east15
	}
]


const wests = [
	{
		img: west1
	},
  {
		img: west2
	},
  {
		img: west3
	},
  {
		img: west4
	},
  {
		img: west5
	},
  {
		img: west6
	},
  {
		img: west7
	},
  {
		img: west8
	},
  {
		img: west9
	},
  {
		img: west10
	},
  {
		img: west11
	},
  {
		img: west12
	},
  {
		img: west13
	},
  {
		img: west14
	},
  {
		img: west15
	}
]

function SectionTwo() {
 
  return (
    <div className='section-two'>
        <div className='titles'>
            {titles.map(title => (
              <HeadlineTwo 
                title1={title.title1}
                title2={title.title2}
                title3={title.title3}
                title4={title.title4}
                title5={title.title5}
                title6={title.title6}
              />
            ))}
          </div>

          <div className='east-west'>
            <span className='east'>EAST</span> 
            
            <span className='west'>WEST</span>
          </div>

        <div className='east-or-west'>
          <div className='east-img'>
            {easts.map(east => (
                <EastWest
                  img={east.img}
                />
              ))}
          </div>

          <div className='west-img'>
            {wests.map(west => (
              <EastWest
              img={west.img}
              />
            ))}
          </div>
       
        </div>

       <div className="line2">
            <span>About Team</span>
            <img src={line} alt="" />
          </div>
          
    </div>
    
  )
}

export default SectionTwo