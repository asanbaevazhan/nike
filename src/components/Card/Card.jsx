import React from 'react'

import './Card.css'

const Card = ({title, description, price, img}) => {
	return (
		<div className='card'>
      		<div className="card-element">
        		<div className="card-about">
                    <img src={img} alt='' className='card__image' />
                    <p className='card__desc'>{description}</p>
                    <p className='card__title'>{title}</p>
                    <p className='card__price'>{price}</p>
    			</div>
        </div>
    </div>
	)
}

export default Card