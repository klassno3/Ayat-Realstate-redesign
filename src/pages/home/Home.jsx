import React, {useState} from 'react';
import {FaEye} from "react-icons/fa"
import HomePortfolio from '../../component/homePortfolio/HomePortfolio';
import Background from "../../images/Background (2).png"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Home = () => {
  const [ open, setOpen ] = useState( false )
    
 
  const heroAnimate = {
    offScreen:{x:-100},
    onScreen: {
      x:0,
     transition :{ 
              type: "spring",
              duration:2,
            } }
  }

  const aboutAnimate = {
    offScreen:{y:100,opacity:0},
    onScreen: {
      y: 0,
      opacity: 1,
     transition :{ 
              type: "spring",
       
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
       
              duration:2,
            } }
  }
  const middleCardAnimate = {
    offScreen: {
      y: 100,
      opacity: 0
    },
    onScreen: {
      y: 0,
      opacity: 1,
     transition :{ 
              type: "spring",
       
              duration:2,
            } }
  }
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
       
              duration:2,
            } }
  }
  
  return (

    <div>
       
      {/* ***************************************************HERO****************************************************** */ }
      <div className='bg-secondary-100 '>

      <div className='relative px-3 pt-36 pb-20 lg:w-11/12 lg:mx-auto  md:pt-48 lg:pt-56 lg:pb-28'>
          <motion.div className='flex justify-center '
            transition={ {staggerChildren:0.1} }
            initial={"offScreen"}
            animate={"onScreen" }
          
       >
      <div>
              <motion.h1 className='  text-4xl flex mx-auto text-center justify-center  tracking-widest font-cinzel text-tertiary-100  sm:text-5xl xl:text-7xl lg:justify-start'
               
            variants={heroAnimate}
              >AYAT REALSTATE</motion.h1>
              <motion.p className='  mt-5 flex  justify-center w-4/5 mx-auto text-center  text-tertiary-200  font-lato lg:w-1/2 lg:justify-start lg:text-left lg:mx-0  xl:text-xl'
               
                variants={ heroAnimate }
              >Welcome to Ayat share Company, a fully legislated real estate 
        company based in Addis Ababa.Has handed 7,000+ Homes and Has handed 7,000+ Homes</motion.p>
              <motion.div className="flex flex-col mt-8 gap-8 justify-center w-3/4 mx-auto sm:flex-row lg:justify-start sm:w-full xl:mt-10"
               
                variants={ heroAnimate }
              >
            <Link to="/register" className="bg-tertiary-100 border-2 border-tertiary-100  flex justify-center text-secondary-100 px-5 py-3 tracking-widest font-semibold focus:outline-none rounded-md xl:px-14 hover:bg-primary-100 hover:border-primary-100 duration-200 hover:scale-[1.03]">REGISTER NOW</Link>
            <Link to="/priceinfo"className='border-2 border-tertiary-100  flex justify-center text-tertiary-100 px-5 py-3 tracking-widest font-semibold focus:outline-none rounded-md xl:px-14 hover:bg-primary-100 hover:border-primary-100 duration-200 hover:scale-[1.03]'>SHARE FORM</Link>
     
      </motion.div>
      </div>
          </motion.div>
          <div className='hidden lg:block '>
          
            <img src={ Background } alt="" className='w-2/5 pt-32  absolute top-5 right-0 ' />
            
          </div>
          
        </div>
      </div>
     

          {/* ***************************************************ABOUT****************************************************** */}
      
      

        
      <motion.div className=' bg-tertiary-100 py-20 '
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
        
          
      
      >

      <div className="px-3 mx-auto text-secondary-100">
          <motion.h1 className="text-4xl mb-5 flex  mx-auto justify-center font-cinzel "
          variants={aboutAnimate}
          >About Us</motion.h1>
          <motion.p className='text-center  w-11/12 mx-auto flex justify-center text-secondary-100 font-lato'
            variants={ aboutAnimate }
          >Ayat® enjoys the distinction of being a trailblazer in the real estate industry, especially focusing on the construction of residential houses. With a groundbreaking and highly effective mix of Real Estate Development, Real Estate Construction, and Real Estate Finance, Ayat® is miles ahead of the competition. Given the risks taken during the pioneering years, in the virtually unknown market of realty and the rough and tumble of the followed twenty plus years, no wonder Ayat® is proud not only for being the torchbearer of the real estate industry but also for the solid experience it has in its pack.</motion.p>
          { open && ( <div className="text-center w-11/12 mx-auto  text-secondary-100"
           
          >
        <motion.p className="my-5 ">Ayat®, a fully Ethiopian owned and managed company, has made tens of hundreds of Ethiopians and Ethiopian diasporas, at home and abroad, proud homeowners in their native country. Envisages to put roof over the heads of thousands more in the years ahead. In the previous years, Ayat®has handed over more than 7,000 residential homes, 1,000 commercial outlets and created job opportunities for more than 15,000 Ethiopians</motion.p>
        <motion.p className="my-5 ">The Developer is pleased to offer luxurious new apartments to potential home owners and create communities in some of the most sought after locations in Addis Ababa. With hundreds of villas, residential apartments, malls and tens of business outlets with various designs and styles to choose from located in Addis’s top school districts, business and residential area customers have more choice than they ever imagined. All buildings that have the touch of Ayat are thoughtfully designed, constructed and fitted with the wide range of needs and tastes in mind. Ayat® is not only known for building homes but for also creating, a rare occurrence by any standard, a very fulfilling community for its home buyers.</motion.p>
          </div> ) }

          <button onClick={ () => setOpen( !open ) } className=' duration-200 hover:scale-[1.03] font-lato  tracking-widest mt-5 font-semibold focus:outline-none flex justify-center mx-auto  items-center text-secondary-100   hover:text-secondary-200 lg:mb-28 '
            
         
          >
                  <div className='flex justify-center  items-center gap-4 hover:text-primary-100'>
             
              <FaEye size={ 20 } />
              <span className=''>
              
                READ<span>{ open ? " LESS ": " MORE"}</span> 
              </span>
          </div>
            
            </button>
   
        </div>
      </motion.div>
      
      <motion.div className='bg-primary-100 py-8 overflow-hidden'
       transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
        >
        

        <div className="flex flex-col justify-between gap-10 px-3 mx-auto  text-secondary-100 lg:w-11/12 lg:flex-row "
       
        >
          <motion.div className='box w-full p-10 rounded-md shadow-xl  text-center -translate-y-1/2 bg-white/80  md:mx-auto md:w-3/4 lg:w-full '
            variants={ leftCardAnimate }
          >
            <h3 className='text-2xl font-semibold tracking-wide'>VISION</h3>
            <p className='w-3/2 tracking-wide  pt-3 mx-auto text-center flex justify-center  text-secondary-200'>To become a well-known, Africa wide Real Estate developer and a leading multi-disciplinary national company</p>
          </motion.div>
          
          <motion.div className='box w-full p-10 rounded-md shadow-xl  text-center -translate-y-1/2 bg-white/80  md:mx-auto md:w-3/4 lg:w-full'
            variants={ middleCardAnimate }

          >
            <h3 className='text-2xl  font-semibold tracking-wide'>MISSION</h3>
            <p className='w-3/2 tracking-wide pt-3 mx-auto text-center flex justify-center  text-secondary-200'>
              To create memorable real estate and lasting relationships with the goal of creating new, urbanist, walkable city with high quality of life, high design, beautiful architecture, and sense of place in culture-driven backdrop.</p>
          </motion.div >
          <motion.div className='box  w-full p-10 rounded-md shadow-xl  text-center -translate-y-1/2 bg-white/80  md:mx-auto md:w-3/4 lg:w-full'
            variants={ rightCardAnimate }
          >
            <h3 className='text-2xl  font-semibold tracking-wide'>VALUES</h3>
            <ul className=' pt-3 tracking-wide  text-secondary-200 '>
              <li>Customer satisfaction</li>
              <li>Meeting goal and commitments</li>
              <li>Responsibility and accountability</li>
              <li>Teamwork and cooperation</li>
              <li>Environmental friendliness</li>
            
            </ul>
            </motion.div>
          
        </div>
      </motion.div>
      
          {/* ***************************************************PORTFOLIO****************************************************** */}
      <HomePortfolio/>  
      
      {/* ***************************************************NEWS****************************************************** */ }
      
      


      <div>
    
      </div>

        </div>
        

  )
}


export default Home;
