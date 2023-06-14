import React, { useState} from 'react'

import Form from "../../component/form/Form"
import { motion} from "framer-motion"



import {
  FaIdCard, FaParking, FaRoad, FaTrashAlt, FaBolt,
  FaStore, FaTrain, FaHotel, FaGasPump, FaMailBulk, FaUtensilSpoon,} from "react-icons/fa"
import {GrElevator} from "react-icons/gr"


const AyatHill = () => {
  const [ open, setOpen ] = useState( false )
  

  
  
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
 
  
  return (
    <div className=''>
        <div className='bg-tertiary-100 py-14'>

      <div className='flex flex-col-reverse  px-3 mx-auto items-start relative pb-24 md:flex-row md:gap-0 md:mt-8 md:w-11/12'>

          <motion.div className='md:pt-24 w-full lg:w-3/4'
           transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        animate={ "onScreen" }
        
          >
            <motion.h1 className='  text-4xl flex  justify-center tracking-wide font-garmound text-secondary-100 lg:text-5xl xl:text-7xl md:justify-start'
            variants={leftCardAnimate}
            >Ayat Hill Bottom</motion.h1>
            <motion.p className='  text mt-8 flex justify-start   text-secondary-200  text-center md:text-lg md:text-left '
            variants={leftCardAnimate}
            >Located at Ayat settlement, at Ayat county, which, not incidentally, lent its name to a far wider place in the
                area than actually developed by Ayat ® , these six Ayat apartments and business outlets complexes provide
              its residents a potent mix of tranquility and liveability. The fifteen floored 
                Ayat apartment/business/outlet complex offers luxury apartments for sale starting from floor level four and above. 
        
              </motion.p>
            
              
          {  open &&  <div className=" text-secondary-200 text-lg  mt-5  text-center md:text-left">
                <p></p>
              <p>       As the community of Ayat settlements has been growing for more than two decades it attracted 
              a multitude of facilities setup by opportune businessmen near by, thus providing services that
              are perfectly aligned to the needs of the luxury lifestyle clients of the hamlets .Of those highly acclaimed/regarded facilities the fitness centers and shopping outfits
                are within walking distance of the apartmentsThe magnificent location of Hill bottom apartment/business
                outlets complex coupled with the above creature comforts enable residents and businessmen to enjoy incomparable access and opportunity to many of the localities natural environ. In another tack, the outlets could be configured to different business ends: supermarkets, restaurants, emporiums, store, boutiques, shops etc, and entertainment facilities.</p>
              <p>The road leading to Megenagna and the city center also happens to cut through the property,
                thus providing accesses to one of the main arteries of the city’s road system. The metro station,
                also know as Ayat, again the wider area of southern Addis taking the name from our well known real
                estate company, starts, right across the street, providing residents that choose to commute a complement
                of convenient transport links. Ayat also has a number of payment plans for its clients to provide them an opportunity to own their dream home. The payment options which include long term payment, are crafted to suit different financial readiness of its potential clients.</p>
              <p>Beneath the luxury residential units of the Hill bottom apartment residences
                is the spacious public territory that could be partitioned to different sizes that are selling
                rapidly for various business ends. The economically well - heeled community, which inhabits the
                above residential units, will bring to any business that owns these outfits a wider custom base with
                a deep pocket. The spacious commercial territories are positioned on four floors (ground/street level
                and 1st , 2nd floors and 3rd floor) while the remaining nine and sixteen floors are reserved for
                residential units. Clients have the pleasure of picking their preferred perfect business space size
                ranging from 20m2 up to ….. Depending on the buyers choice the commercial space available here could
                easily apportioned to</p>
              

            </div> }
            <motion.div className="flex  mt-5  justify-between md:gap-2 md:flex-col md:justify-center"
            variants={leftCardAnimate}
            >
              <h1 className=' text-secondary-100 font-semibold '>Property : <span className=' font-normal'>Forsale</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Property Type: <span className=' font-normal'> Residential</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Location: <span className=' font-normal'> Ayat</span></h1>  
            </motion.div>
            
            <motion.button onClick={ () => setOpen( !open ) } className='bg-primary-100 text-secondary-100 px-10 py-2 tracking-widest flex justify-center mx-auto my-10 font-semibold focus:outline-none rounded md:mx-0 md:justify-start  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
            variants={leftCardAnimate}
            >
                    READ<span>{ open ? " LESS ": " MORE"}</span> 
            </motion.button>
           
      </motion.div>
      
          <div className='w-full pt-12  flex justify-center mx-auto sm:w-1/2'
          
          >
          
         
            <motion.svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
              variants={ leftCardAnimate}
            >
                <defs>
                  <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    
  <path fill="#F2F4F8" d="M57.9,-48C71.3,-29.4,75.8,-5.6,69.3,13C62.8,31.5,45.3,44.7,26.6,52.7C7.9,60.7,-12,63.5,-27.6,56.4C-43.2,49.2,-54.4,32.1,-56,15.5C-57.5,-1,-49.5,-17,-38.5,-35C-27.6,-53,-13.8,-73,4.2,-76.4C22.3,-79.8,44.6,-66.6,57.9,-48Z" transform="translate(100 100)" />
                  </clipPath>
                </defs>
              <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                xlinkHref="https://ayatrealestate.com/wp-content/uploads/2019/06/ayat-shoping-mall.jpg" clip-path="url(#user-space)" />
            </motion.svg>
            

         
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
              <h1 className='text-3xl text-tertiary-100 mx-auto flex justify-center '>Package</h1>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-1 ">
            <div className='grid grid-cols-1 gap-x-5 gap-y-5 justify-between mx-auto mt-10 lg:grid-cols-8'>
              <div className='bg-tertiary-100 px-8  text-xl text-secondary-100 justify-center font-semibold flex items-center py-3 uppercase rounded'>
                cash
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded ">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200 text-center'>Signing Contract</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded ">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200 text-center'>Ground Floor</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded ">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200 text-center'>4th Slab</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded ">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200 text-center'>10th Slab</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded ">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200 text-center'>Roof is Done</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded ">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200 text-center'>Block Work </p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded ">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200 text-center'>Hand Over </p>
              </div>
            </div>


            <div className='grid grid-cols-1 gap-x-5 gap-y-5 justify-between mx-auto mt-10 lg:grid-cols-8'>
              <div className='bg-tertiary-100 px-8  text-xl text-secondary-100  font-semibold flex flex-col justify-center items-center py-3 uppercase  rounded'>
                <h1>credit</h1>
                <p>(40%)</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded ">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200 text-center'>Signing Contract</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded ">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200 text-center'>Ground Floor</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded ">
                <p className='text-xl'>8%</p>
                <p className='text-secondary-200 text-center'>4th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-4  py-3 items-center  rounded ">
                <p className='text-xl'>7%</p>
                <p className='text-secondary-200 text-center'>10th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100 px-4 py-3 items-center  rounded ">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200 text-center'>Roof is Done</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded ">
                <p className='text-xl'>2%</p>
                <p className='text-secondary-200 text-center'>Block Work </p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded ">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200 text-center'>Hand Over </p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded ">
                <p className='text-xl'>40%</p>
                <p className='text-secondary-200 text-center'>10-30 years </p>
              </div>
            </div>

            </div>
          </div>
          <button className='bg-primary-100 px-8 py-4 mx-auto flex justify-center text-secondary-100 tracking-widest uppercase rounded font font-semibold mt-14  hover:bg-tertiary-100 hover:text-secondary-100 duration-200 hover:scale-[1.03]'> Download Price Information</button>
        </div>
        

      
              
   
       <div className=" bg-secondary-100 mt-8">

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
       
 <div className='bg-tertiary-100  px-3 py-14'>
        <h1 className='text-3xl flex  justify-center mx-auto mb-10'>Contact Agent</h1>

      <Form />
    </div>
     
    </div>
  )
}

export default AyatHill
