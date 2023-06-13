import React from 'react'
import Form from "../../component/form/Form"

import {useState} from 'react'

import {
  FaIdCard, FaParking, FaRoad, FaTrashAlt, FaBolt,
  FaStore, FaTrain, FaHotel, FaGasPump, FaMailBulk, FaUtensilSpoon,
} from "react-icons/fa"
import {GrElevator} from "react-icons/gr"
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
       bounce: .5,
              duration:2,
            } }
  }

const CmcBusiness = () => {
   const [open,setOpen] =useState(false)
  return (
    <div>
      <div className='bg-tertiary-100 py-14'>

      <div className='flex flex-col-reverse  px-3 mx-auto items-start relative pb-24 md:flex-row md:gap-0 md:mt-8 md:w-11/12 '>

          <motion.div className='md:pt-24 w-full lg:w-3/4'
            transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        animate={ "onScreen" }
          >
      <motion.h1 className=' text-4xl flex  justify-center tracking-widetext-secondary-100 lg:text-5xl xl:text-7xl md:justify-start'
      variants={leftCardAnimate}
      > Cmc Business Outlets</motion.h1>
          <motion.p className=' text mt-8 flex justify-start   text-secondary-200  text-center md:text-lg md:text-left'
          variants={leftCardAnimate}
          > 
        In this apartment-cum-business building, offices’ and other businesses’ conducting space is available at four floors, from ground-street level-up. These space is designed with cutting-edge, inspirational and supportive format in order to maximize buyers convenience. With shared restrooms, and vehicle access and ample parking, no potential owners'/lessees' wants to pass the opportunity of owning it. As the building situated in an affluent area of the city and in a multi tenanted floors, business and other endeavors are easily facilitated among and between residents and businessmen who decides to purchase their desired lot before sales runs out.
          </motion.p>
            
              
          {  open &&  <div className=" text-secondary-200 md:text-lg  mt-5  text-center md:text-left">
              <p>If you are looking for commercial space, comfort and even a touch of luxury, then you needn’t have to
                look further. Ayat is there for you to provide all. The area where this commercial space for rent is
                available is a business locality where banks, other financial institutions and businesses has made home for some time. Thus, by owning this commercial business available
                for sale, you will not, exactly, be a ground breaker let it alones a loner! </p>
         
              
              

            </div> }
            <motion.div className="flex text-sm mt-5  justify-between sm:text-lg md:gap-2 md:flex-col md:justify-center"
            variants={leftCardAnimate}
            >
              <h1 className=' text-secondary-100 font-semibold '>Property : <span className=' font-normal'>Forsale</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Property Type: <span className=' font-normal'> Commercial</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Location: <span className=' font-normal'> CCE-CMC</span></h1>  
            </motion.div>
            
            <motion.button onClick={ () => setOpen( !open ) } className='bg-primary-100 text-secondary-100 px-10 py-2 tracking-widest flex justify-center mx-auto my-10 font-semibold focus:outline-none rounded md:mx-0 md:justify-start  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
            variants={leftCardAnimate}
            >
                    READ<span>{ open ? " LESS ": "  MORE"}</span> 
            </motion.button>
           
      </motion.div>
      
         
          
            <div className='w-full pt-12  flex justify-center mx-auto sm:w-1/2'>
         
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    
  <path fill="#F2F4F8" d="M57.9,-48C71.3,-29.4,75.8,-5.6,69.3,13C62.8,31.5,45.3,44.7,26.6,52.7C7.9,60.7,-12,63.5,-27.6,56.4C-43.2,49.2,-54.4,32.1,-56,15.5C-57.5,-1,-49.5,-17,-38.5,-35C-27.6,-53,-13.8,-73,4.2,-76.4C22.3,-79.8,44.6,-66.6,57.9,-48Z" transform="translate(100 100)" />
                  </clipPath>
                </defs>
                 <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref="https://i.pinimg.com/564x/bb/92/6d/bb926def24d47ef1ff90be968ebe268f.jpg" clip-path="url(#user-space)"/>
              </svg>
              

            </div>
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
          <div className='w-11/12 mx-auto '>
            <h1 className='text-3xl text-tertiary-100 mx-auto flex justify-center '>Package</h1>
             <div className='grid grid-cols-1 gap-x-5 gap-y-5 justify-between mx-auto mt-10 lg:grid-cols-8'>
              <div className='bg-tertiary-100 px-8  text-xl text-secondary-100 justify-center font-semibold flex items-center py-3 uppercase rounded mx-auto w-1/2 lg:w-full'>
                cash
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded mx-auto w-1/2 lg:w-full">
                <p className='text-xl'>35%</p>
                <p className='text-secondary-200 text-center'>Signing Contract</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded  mx-auto w-1/2 lg:w-full">
                <p className='text-xl'>25%</p>
                <p className='text-secondary-200 text-center'>5 month</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded   mx-auto w-1/2 lg:w-full">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200 text-center'>10 month</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded   mx-auto w-1/2 lg:w-full">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200 text-center'>15 month</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded  mx-auto w-1/2 lg:w-full ">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200 text-center'>18th month</p>
              </div>
             
            </div>
          


         
          </div>
          <button className='bg-primary-100 px-8 py-4 mx-auto flex justify-center text-secondary-100 tracking-widest uppercase rounded font font-semibold mt-14  hover:bg-tertiary-100 hover:text-secondary-100 duration-200 hover:scale-[1.05]'> Download Price Information</button>
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

export default CmcBusiness
