import React, { useState } from 'react'
import Form from "../../component/form/Form"


import {
  FaIdCard, FaParking, FaRoad, FaTrashAlt, FaBolt,
  FaStore, FaTrain, FaHotel, FaGasPump, FaMailBulk, FaUtensilSpoon,
} from "react-icons/fa"
import { GrElevator } from "react-icons/gr"

import { motion} from "framer-motion"


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
       
              duration:2,
            } }
  }

const CmcApartment = () => {
  const [ open, setOpen ] = useState( false )
 
  return (
    <div className=''>
        <div className='bg-tertiary-100 py-14'>

      <div className='flex flex-col-reverse  px-3 mx-auto items-start relative pb-24 md:flex-row md:gap-0 md:mt-8 md:w-11/12 '>

          <motion.div className='md:pt-24 w-full lg:w-3/4'
            transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        animate={ "onScreen" }
          >
      <motion.h1 className=' text-4xl flex  justify-center tracking-widetext-secondary-100 lg:text-5xl xl:text-7xl md:justify-start'
      variants={leftCardAnimate}
      >Cmc Apartment</motion.h1>
          <motion.p className=' text mt-8 flex justify-start   text-secondary-200  text-center md:text-lg md:text-left'
          variants={leftCardAnimate}
          >These apartments located in CCE-CMC are spacious residential units that reflects the magical merging of inspiration and architecture. The project, a masterpiece of design and craftsmanship, consists of 61 residential complexes parked in a 15th floor high rises. Erected in a variety with a view to bring a high-end community right to the midst of Addis. The charming and quiet environment, far from the hassle of the down town part of the city, belies the convenient access it has to the main roads leading to Megenagna and other key locations.</motion.p>
            
              
          {  open &&  <div  className=" text-secondary-200 md:text-lg  mt-5  text-center md:text-left">
              <p>Residential units in this location with choices of 2 to 4 bedrooms and with variety
                of floor plans to choose from are available. The space for the 3 bedrooms unit ranges from
                100m2 to 145m2, and the 4 bedrooms unit come in 150m2 and 161m2. Accompanied by an elegant
                formal dinning room, cozy and handy kitchen, den/family room with a marble fireplace, your
                future home is superbly well configured.</p>
              <p>All of our spacious apartments come with an additional maid room and a reserved parking
                space. The grand entry way with a sweeping staircase draws you into a voluminous living
                room. Beautifully designed and fitted out with carefully selected color schemes
                , the property captures authentic mountain and city views. If you are one looking to live
                a quiet and peaceful life with an affordable price tag this is for you. The available
                payment options which include long term payment plans are designed to suit different
                payment preferences. Our staff are at your service if further detail is needed.</p>
         

            </div> }
            <motion.div className="flex text-sm mt-5  justify-between sm:text-lg md:gap-2 md:flex-col md:justify-center"
            variants={leftCardAnimate}
            >
              <h1 className=' text-secondary-100 font-semibold '>Property : <span className=' font-normal'>Forsale</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Property Type: <span className=' font-normal'> Residential</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Location: <span className=' font-normal'> CCE-CMC</span></h1>  
            </motion.div>
            
            <motion.button onClick={ () => setOpen( !open ) } className='bg-primary-100 text-secondary-100 px-10 py-2 tracking-widest flex justify-center mx-auto my-10 font-semibold focus:outline-none rounded md:mx-0 md:justify-start  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05] '
            variants={leftCardAnimate}
            >
                    READ<span>{ open ? " LESS ": " MORE"}</span> 
            </motion.button>
           
      </motion.div>
      
          <div className='w-full pt-12  flex justify-center mx-auto sm:w-1/2'>
          
         
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    
  <path fill="#F2F4F8" d="M57.9,-48C71.3,-29.4,75.8,-5.6,69.3,13C62.8,31.5,45.3,44.7,26.6,52.7C7.9,60.7,-12,63.5,-27.6,56.4C-43.2,49.2,-54.4,32.1,-56,15.5C-57.5,-1,-49.5,-17,-38.5,-35C-27.6,-53,-13.8,-73,4.2,-76.4C22.3,-79.8,44.6,-66.6,57.9,-48Z" transform="translate(100 100)" />
                  </clipPath>
                </defs>
              <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                xlinkHref="https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" clip-path="url(#user-space)" />
</svg>
         
          </div>
        </div>
     <div className=" bg-primary-100">

          <div className="text-secondary-100 py-10  w-10/12 mx-auto ">
            <h1 className='text-3xl text-secondary-100 mx-auto flex justify-center '>Amenities</h1>
            <div className='grid grid-cols-1 gap-y-10 justify-between my-10 flex-wrap sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6'>
            <div className='flex flex-col items-center gap-3'>
              <FaBolt size={25}/>
              <p className='uppercase  text-center'>backup generated</p>
            </div>
           
            <div  className='flex flex-col items-center gap-3'>
              <FaTrain size={25}/>
              <p className='uppercase text-center '>train station</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaTrashAlt size={25}/>
              <p className='uppercase  text-center'>garbage chunk</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaParking size={25}/>
              <p className='uppercase  text-center'>reserved parking space</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaRoad size={25}/>
              <p className='uppercase  text-center'>mainroad access</p>
              </div>
               <div  className='flex flex-col items-center gap-3'>
              <GrElevator size={25}/>
              <p className='uppercase  text-center'>elevator </p>
              </div>
              
            
            </div >  
          
          </div>
          
        </div>
        <div className="bg-secondary-100 py-10">
          <div className='w-10/12 mx-auto '>
            <h1 className='text-3xl text-tertiary-100 mx-auto flex justify-center '>Package</h1>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-1 ">

            <div className='grid grid-cols-1 gap-x-5 gap-y-5 justify-between mx-auto mt-10 lg:grid-cols-8'>
              <div className='bg-tertiary-100 px-8  text-xl text-secondary-100  font-semibold flex items-center py-3 uppercase  rounded'>
                cash
              </div>
              <div className="flex flex-col w-[1/8px] bg-tertiary-100 text-secondary-100  px-6 py-3 items-center  rounded">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200'>Signing Contract</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-6 py-3 items-center  rounded">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200'>Ground Floor</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-6 py-3 items-center  rounded">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200'>4th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-6  py-3 items-center  rounded">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200'>10th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100 px-6 py-3 items-center  rounded">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200'>Roof is Done</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-6  py-3 items-center  rounded">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200'>Block Work </p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-6  py-3 items-center  rounded">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200'>Hand Over </p>
              </div>
            </div>


            <div className='grid grid-cols-1 gap-x-5 gap-y-5 justify-between mx-auto mt-10 lg:grid-cols-8'>
              <div className='bg-tertiary-100 px-8  text-xl text-secondary-100  font-semibold flex flex-col items-center py-3 uppercase  rounded'>
                <h1>credit</h1>
                <p>(40%)</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200'>Signing Contract</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200'>Ground Floor</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>8%</p>
                <p className='text-secondary-200'>4th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>7%</p>
                <p className='text-secondary-200'>10th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100 px-4 py-3 items-center  rounded">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200'>Roof is Done</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>2%</p>
                <p className='text-secondary-200'>Block Work </p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200'>Hand Over </p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>40%</p>
                <p className='text-secondary-200'>10-30 years </p>
              </div>
            </div>
          </div>
            </div>
          <button className='bg-primary-100 px-8 py-4 mx-auto flex justify-center text-secondary-100 tracking-widest uppercase rounded font font-semibold mt-14  hover:bg-tertiary-100 hover:text-secondary-100 duration-200 hover:scale-[1.05]'> Download Price Information</button>
        </div>
     
      </div>
        
  <div className=" bg-secondary-100 ">

          <div className="text-tertiary-100 py-10  px-3 md:w-11/12 mx-auto ">
            <h1 className='text-3xl text-tertiary-100 mx-auto flex justify-center '>What is Near you</h1>
            <div className=' mt-14 grid grid-cols-1 gap-y-10 justify-between my-10 flex-wrap sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6'>
            <div className='flex flex-col items-center gap-3'>
              <FaMailBulk size={25}/>
              <p className='uppercase '>post office</p>
            </div>
           
            <div  className='flex flex-col items-center gap-3'>
              <FaStore size={25}/>
              <p className='uppercase '>store</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaHotel size={25}/>
              <p className='uppercase '>hotel</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaUtensilSpoon size={25}/>
              <p className='uppercase '>restaurant</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaGasPump size={25}/>
              <p className='uppercase '>pertol station</p>
              </div>
               <div  className='flex flex-col items-center gap-3'>
              <FaIdCard size={25}/>
              <p className='uppercase '>atm </p>
              </div>
              
            
            </div >  
          
          </div>
          
        </div>
       
      <div className='bg-tertiary-100 py-14 px-3'>
        <h1 className='text-3xl flex  justify-center mx-auto mb-10'>Contact Agent</h1>

      <Form />
    </div>    
     
    </div>
  )
}

export default CmcApartment
