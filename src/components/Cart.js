import React from 'react'
import delet from '../images/icon-delete.svg'

const Cart = ({view, total, clear, success}) => {


	

	return (
		<div clasName='relative'>
		<div className='absolute  drop-shadow-2xl rounded-lg bg-slate-100 top-10 right-0 p-3 w-full sm:w-80 '>
		<h2 className='text-2xl'>Cart</h2>
			<div className='w-full h-1 bg-orange-300'></div>

			<div className='mt-5 flex items-center gap-4'>
				<img className='w-10 rounded-lg'  src={view} alt="photo" />
				<div className=''>
					<p className='text-gray-700'>Fall Limited Edition Sneakers</p>
					<span className='text-lg text-gray-700'>$125 x {total}    </span>
					<span className='mx-5 text-lg font-bold'> ${125 * total }    </span>
				</div>
				

				
					<img className=''  src={delet} alt="delet" onClick={clear} />
				
			</div>
			<button className='mt-5 bg-orange-500 p-2 w-full rounded-lg' onClick={success}>Checkout</button>
		</div>
			
		</div>
	)
}

export default Cart