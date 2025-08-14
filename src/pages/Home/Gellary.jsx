import React from 'react';
import tree4 from '../../assets/tree/6368342.jpg'
import tree5 from '../../assets/tree/6417852.jpg'
import tree6 from '../../assets/tree/6432892.jpg'
import tree7 from '../../assets/tree/6432897.jpg'
import { div } from 'motion/react-client';


const Gellary = () => {
    return (
<div className='mb-20'>
  <div className="container mx-auto p-4 my-6 space-y-2 text-center">
    <h2 className="text-5xl font-bold">Explore our happiness!</h2>
  </div>
          <section className="py-6 bg-base-200 shadow-2xl ">
	<div className="container flex flex-col justify-center p-4 mx-auto ">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 ">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square border-1 rounded" src={tree4} />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square border-1" src={tree5} />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square border-1" src={tree6} />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square border-1" src={tree7} />
		</div>
	</div>
</section>
</div>
    );
};

export default Gellary;