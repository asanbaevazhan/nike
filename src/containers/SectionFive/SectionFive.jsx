import React from 'react'
import HeadlineFive from '../../components/HeadlineFive/HeadlineFive.jsx'
import './SectionFive.css'

import jersey1 from '../../img/jersey1.png'
import jersey2 from '../../img/jersey2.png'
import jersey3 from '../../img/jersey3.png'
import line from '../../img/Line.png'
import Card from '../../components/Card/Card';

const titles = [
	{
		title1: 'Jerseys 1992 team usa', 
		title2: '1992',
        title3: 'Team USA',	
		title4: 'Authentic edition',	
        title5: 'Jerseys of the united sates mans olympics basketball team,',	
		title6: 'which represented the us of a in the 1992 summer olympics in barcelona.'
        
	}
]

const products = [
	{
		title: 'Kobe Bryant Laker Authentic Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$290',	
		img: jersey1
	},
	{
		title: 'LeBron James Lakers City Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$130',
		img: jersey2
	},
	{
		title: 'Los Angeles Lakers Diamond Icon Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$470',
		img: jersey3
	},
  {
		title: 'Kobe Bryant Laker Authentic Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$290',	
		img: jersey1
	},
	{
		title: 'LeBron James Lakers City Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$130',
		img: jersey2
	},
	{
		title: 'Los Angeles Lakers Diamond Icon Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$470',
		img: jersey3
	}
	
]

function SectionFive() {
  return (
    <div className='five'>
        <div className="titles">
            {titles.map(title =>(
                <HeadlineFive
                title1={title.title1}
                title2={title.title2}
                title3={title.title3}
                title4={title.title4}
                title5={title.title5}
                title6={title.title6}
                />
            ))}
        </div>

        <div className='card-block'>
                <div className='card-container'>
                  {products.map(product => (
                    <Card 
                      title={product.title} 
                      description={product.description} 
                      price={product.price}
                      img={product.img}
                    />
                  ))}
                </div>
              </div>
  
          <div className="line3">
            <span>View all</span>
            <img src={line} alt="" />
          </div>


    </div>
  )
}

export default SectionFive