import React from 'react';
import { motion } from "motion/react"
import tree1 from '../../assets/tree/6418665.jpg'
import tree2 from '../../assets/tree/8917368.jpg'


const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row">
 <div className='flex-1'>
       <motion.img
      src={tree1}
      animate={{y:[50,100,50]}}
      transition={{duration:5, repeat:Infinity}}
      className="max-w-sm w-full sm:40px border-green-800 border-s-6 border-b-6 rounded-t-[40px]  rounded-br-[40px] shadow-2xl"
    />
         <motion.img
      src={tree2}
      animate={{x:[50,100,50]}}
      transition={{duration: 10, delay:5, repeat:Infinity}}
      className="w-full sm:40px max-w-sm border-green-800 border-s-6 border-b-6 rounded-t-[40px]  rounded-br-[40px] shadow-2xl"
    />
 </div>
    <div className='flex-1'>
      <motion.h1 className=" font-bold sm:text-3xl lg:text-5xl">Save 

        <motion.span animate={{
            color:['#00ff40','#00ff00','#bf00ff'],
            transition:{duration:2,repeat:Infinity}

        }}>
            Our Planet
        </motion.span>
       Together!</motion.h1>
      <p className="py-6  sm:text-sm lg:text-lg">
        Safe Global Earth & Explore How Our Tree Planting Efforts Contribute to A Safe world!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;



