import '../SectionOne/SectionOne.css'
import React from 'react'
import Card from '../../components/Card/Card.jsx'

import jersey1 from '../../img/jersey1.png'
import jersey2 from '../../img/jersey2.png'
import jersey3 from '../../img/jersey3.png'
import footer from '../../img/footer-logo.png'
import line from '../../img/Line.png'
import HeadlineOne from '../../components/HeadlineOne/HeadlineOne'



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


const titles = [
	{
		title1: 'Jerseys bestsellers',
		title2: 'bestsellers',
		title3: 'Collection',	
		title4: 'The jerseys of the best nba players of the regular seasons.'
	}
]

function SectionOne() {
  
    return (
      <main className='one'>
          <div className='titles'>
            {titles.map(title => (
              <HeadlineOne 
              title1={title.title1}
              title2={title.title2}
              title3={title.title3}
              title4={title.title4}
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
          
  
        <div className='footer'>
          <div className="line">
            <span>View all</span>
            <img src={line} alt="" />
          </div>
  
          <div className='footer-logo'>
            <img src={footer} alt="" />
          </div>
          
        </div>
  
        </main>
    )
  }

  export default SectionOne;
