import React from 'react'
import HeadlineThree from '../../components/HeadlineThree/HeadlineThree';
import './SectionThree.css'

import jersey1 from '../../img/jersey1.png'
import jersey2 from '../../img/jersey2.png'
import jersey3 from '../../img/jersey3.png'
import line from '../../img/Line.png'
import Card from '../../components/Card/Card';

const titles = [
	{
		title1: 'Jerseys kobe bryant', 
		title2: 'kobe',
    title3: 'bryant',	
		title4: 'Authentic edition',	
    title5: 'Kobe bryant: a basketball legend. bryant crafted a storied career',	
		title6: 'In his 20 seasons with the lakers. the lagacy of kobe bryant was a far-reaching one.'
        
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

function SectionThree() {
  
    return (
      <div className='three'>
         <div className='titles'>
            {titles.map(title => (
             <HeadlineThree
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

export default SectionThree;
