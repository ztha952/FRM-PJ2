import React from 'react'
import Image from './Image.js'
const Card = ({cp}) => {
	return (
		<div  >
			<img className='rounded-lg' src={cp} alt="" />
		</div>
	)
}

export default Card