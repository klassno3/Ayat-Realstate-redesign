import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


  const rightCardAnimate = {
    offScreen: {
      x: 100,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1,
     transition :{ 
              type: "spring",
       bounce: .5,
              duration:2,
            } }
}
const leftCardAnimate = {
      
    offScreen: {
      x: -100,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1,
     transition :{ 
              type: "spring",
       bounce: .5,
              duration:2,
            } }
}
  


const Card = ({item}) => {
  return (
    <div>
      
          <motion.div id="card" className='bg-white px-8 py-5 rounded-md shadow-xl text-secondary-100 w-full md:px-10 lg:px-14 sm:mx-auto sm:w-3/4 lg:w-full mt-20 '
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
     >
            
            <motion.div
          variants={ item.id % 2 === 0 ? rightCardAnimate : leftCardAnimate} >
         
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    
                    <path fill="#F2F4F8" d="M57.9,-48C71.3,-29.4,75.8,-5.6,69.3,13C62.8,31.5,45.3,44.7,26.6,52.7C7.9,60.7,-12,63.5,-27.6,56.4C-43.2,49.2,-54.4,32.1,-56,15.5C-57.5,-1,-49.5,-17,-38.5,-35C-27.6,-53,-13.8,-73,4.2,-76.4C22.3,-79.8,44.6,-66.6,57.9,-48Z" transform="translate(100 100)" />
                    
                  </clipPath>

                </defs>
                 <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                  xlinkHref={item.imageLink}
                  clipPath="url(#user-space)" />
              </svg>
              

            </motion.div>
            <div className="flex flex-col gap-5">

              <motion.button className='text-center flex justify-center mx-auto text-secondary-200 text-xl tracking-widest font-semibold hover:text-primary-300'
                variants={  item.id % 2 === 0 ? rightCardAnimate : leftCardAnimate}
              >SHARE</motion.button>
              <div>
                
                <motion.h1 className='text-center text-lg font-bold flex justify-center md:text-xl '
                variants={ item.id % 2 === 0 ? rightCardAnimate : leftCardAnimate}
            >{ item.title}</motion.h1>
         <div className='border-b-4 mt-2  border-b-primary-200 rounded mx-auto w-1/4'></div>
         </div>
              <motion.p className='text-center flex justify-center'
                 variants={ item.id % 2 === 0 ? rightCardAnimate : leftCardAnimate}
          >{ item.description }</motion.p>
          <motion.div
            variants={  item.id % 2 === 0 ? rightCardAnimate : leftCardAnimate }>
            
              <Link to={item.Link} className='rounded-md flex justify-center tracking-widest font-semibold bg-primary-200 text-secondary-100  my-6  px-8 py-4  mx-auto  lg:w-3/4  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
                variants={ item.id % 2 === 0 ? rightCardAnimate : leftCardAnimate }
                >LEARN MORE</Link>
                </motion.div>
            </div>
          </motion.div>
    </div>
  )
}

export default Card
