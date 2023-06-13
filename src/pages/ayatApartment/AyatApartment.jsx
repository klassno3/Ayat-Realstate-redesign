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
       bounce: .5,
              duration:2,
            } }
  }
 

const CmcApartment = () => {
  const [open,setOpen] =useState(false)
  return (
    <div>
        <div className='bg-tertiary-100 py-14'>

      <div className='flex flex-col-reverse  px-3 mx-auto items-start relative pb-24 md:flex-row md:gap-0 md:mt-8 md:w-11/12'>

          <motion.div className='md:pt-24 w-full lg:w-3/4'
            transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        animate={ "onScreen" }
          >
            <motion.h1 className='  text-4xl flex  justify-center tracking-wide font-garmound text-secondary-100 lg:text-5xl xl:text-7xl md:justify-start'
            variants={leftCardAnimate}
            >Ayat Apartment</motion.h1>
            <motion.p className='  text mt-8 flex justify-start   text-secondary-200  text-center md:text-lg md:text-left '
            variants={leftCardAnimate}
            >Welcome to the AYAT Apartments, a development within the Ayat hamlet that offers active and
              dynamic living experience in a suburbia setting in Addis Ababa. These fifty one complex apartments, each G+4 are considered a whole community on their own. With all the required lifestyle amenities and immediate access to the metro station and the newly
              renovated Hill Bottom Recreation and spa center, residents can enjoy a range of recreational facilities in the sprawling green undulating space.</motion.p>
            
              
          {  open &&  <div className=" text-secondary-200 text-lg  mt-5  text-center md:text-left">
              <p>Ayat strives to create the best possible comfort to its AYAT Apartments residents a community with a
                sense of place by focusing not on building and disposing but also creating private space, thus
                serenity, within the bustle of communality. As all of the fifty one complexes are sold out, the
                residents are living witnesses to testify about the truthfulness of the foregoing statement. The
                complexes are also testimonials to the reputation of the on time delivery capability
                of Ayat real estate, the first of its type in being an institutional quality Developer.</p>
              <p>These and the other apartment complexes of Ayat are inspired by the handshake and old-school
                principles, yet forward thinking in respect to design, marketing, concept, development, and place
                making. The luxurious 3 and 4 bedroom apartments every detail was carefully selected and quality
                crafted. If you are excited enough to look forward to be part of this community, we have Apartments
                that are being built next to these same apartments, equipped with all urban life style facilities that
                makes them much covetable. Within the apartments the sliding glass doors in the dinning area show case
                views while allowing themselves to be bathed by natural light and washed by fresh, living air.
                The top-of-the line kitchen is clad with premium finishes and fixtures including cabinets and counters. The awe
                inspiring terrace that is accessible from any room of the apartment is a heavenly bonus to home owners.</p>
         

            </div> }
            <motion.div className="flex  mt-5  justify-between md:gap-2 md:flex-col md:justify-center"
            variants={leftCardAnimate}
            >
              <h1 className=' text-secondary-100 font-semibold '>Property : <span className=' font-normal'>Forsale</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Property Type: <span className=' font-normal'> Residential</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Location: <span className=' font-normal'> Ayat</span></h1>  
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
                  xlinkHref="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                clip-path="url(#user-space)" />
</svg>
         
          </div>
      </div>
        </div>
         <div className=" bg-primary-100">

          <div className="text-secondary-100 py-10  w-10/12 mx-auto ">
            <h1 className='text-3xl text-secondary-100 mx-auto flex justify-center '>Amenities</h1>
            <div className='grid grid-cols-1 gap-y-10 justify-between my-10 flex-wrap sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-6'>
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
            <h1 className='text-3xl text-tertiary-100 mx-auto flex justify-center'>Package</h1>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-1 ">
              
            <div className='grid grid-cols-1 gap-x-5 gap-y-5 justify-between mx-auto mt-10 lg:grid-cols-8'>
              <div className='bg-tertiary-100 px-8  text-xl text-secondary-100  font-semibold flex items-center py-3 uppercase  rounded '>
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


            <div  className='grid grid-cols-1 gap-x-5 gap-y-5 justify-between mx-auto mt-10 lg:grid-cols-8'>
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
                <p className='text-xl'>3%</p>
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
    
        

      
  <div className=" bg-secondary-100 ">

          <div className="text-tertiary-100 py-10  w-10/12 mx-auto ">
            <h1 className='text-3xl text-tertiary-100 mx-auto flex justify-center '>What is Near you</h1>
            <div className=' mt-14 grid grid-cols-1 gap-y-10 justify-between my-10 flex-wrap sm:grid-cols-2 xl:grid-cols-6'>
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
