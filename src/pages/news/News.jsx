import React, { useState } from 'react'
import Credit from "../../images/Credit.jpg"
import Mall from "../../images/mall.jpg"
import Upcomming from "../../images/upcomming.jpg"
import Office from "../../images/office-relocation.jpg"
import Website from "../../images/Website.jpg"
import { motion} from "framer-motion"



const New = () => {
  // const [openOffice,SetOpenOffice] = useState(false)
  const [openMall,SetOpenMall] = useState(false)
  const [openNew,SetOpenNew] = useState(false)
  const [openUpcomming,SetOpenUpcomming] = useState(false)
  const [ openCredit, SetOpenCredit ] = useState( false )
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
  return (
    <div  className='overflow-x-hidden'>
      <div className='px-3  mx-auto md:w-11/12'>
        
        <h1 className='mx-auto text-4xl flex mt-10 justify-center'>News</h1>

        <motion.div className='flex flex-col mt-20 gap-14 md:mx-auto md:w-3/4 lg:w-full lg:flex-row'
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
        >
          <motion.div className="border-4 border-primary-200 rounded-md hidden lg:block"
            variants={ leftCardAnimate}
          ></motion.div>
          <motion.div className='w-3/4 lg:w-1/2'
          variants={leftCardAnimate}
          >
            <div className="relative">
            <img src={ Office } alt="" className='h-62' />
            <div className="w-full h-full bg-secondary-100/60 absolute top-0 left-0"></div>
            </div>
          </motion.div>
          <div className='w-full lg:w-1/2'>
            <motion.h1 className='text-3xl'
            variants={rightCardAnimate}
            >Office Relocation</motion.h1>
            <motion.p className='text-md mt-3 w-3/4'
              variants={rightCardAnimate}
            >

            We are pleased to announce that 22 Sales office, Merkato Sales office and Lideta Sales office have been relocated to Kazanchise Ayat City center 1st Floor, next to Intercontinental Hotel As of November 28, 2019. we are looking forward to seeing you at our new office.
            </motion.p>
            <motion.button className='bg-primary-100 text-secondary-100 px-10 py-3 tracking-widest my-10 font-semibold focus:outline-none rounded  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
              variants={rightCardAnimate}
            >READ MORE</motion.button>
          </div>
        </motion.div>
      </div>
      
      <div className="bg-secondary-100 mt-24 py-14">
        <motion.div className=' px-3 mx-auto md:w-11/12'
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
        >

          <div className='flex flex-col  gap-14 md:mx-auto md:w-3/4 lg:w-full lg:flex-row-reverse '>
            
            <motion.div className='w-3/4 lg:w-1/2'
            variants={rightCardAnimate}
            >
            <div className="relative">
            <img src={ Credit } alt="" className='h-62' />
            <div className="w-full h-full bg-secondary-100/60 absolute top-0 left-0"></div>
            </div>
            </motion.div>
            
          <div className='w-full  text-tertiary-100 lg:w-1/2'>
              <motion.h1 className='text-3xl capitalize'
              variants={leftCardAnimate}
              > New Credit For Those Purchasing In Birr</motion.h1>
              <motion.p className='text-md mt-3 w-3/4'
              variants={leftCardAnimate}
              >
                Are you paying in Birr? No worries, Ayat has come up with new credit facility that is here to help those trying to purchase a home using Birr. It has made the 70%, 60%, 40%, and 25% credit options available. This is a method that allows clients to purchase a home by making a deposit as low as 30% and the remaining amount within 20 years. Interest rates can be as low as 9%
                
              </motion.p>
              <p className={openCredit ? "block w-3/4" :"hidden" }>If you are one to pay in foreign currency there is an option for you to make a 20% down payment with an interest rate as low as 8.5% and make the payment of the remaining 80% within 20 years.</p>
              <motion.button onClick={ () => SetOpenCredit( !openCredit ) }
                className='bg-primary-100 text-secondary-100 px-10 py-3 tracking-widest my-10 font-semibold focus:outline-none rounded  hover:bg-tertiary-100 hover:text-secondary-100 duration-200 hover:scale-[1.05]'
              variants={leftCardAnimate}
              >READ <span>{ openCredit ? " LESS" : " MORE" }</span></motion.button> 
          </div>
            <motion.div className="border-4 border-primary-200 rounded-md hidden lg:block"
            variants={leftCardAnimate}
            ></motion.div>
        </div>
        </motion.div>
      </div>
      <div className=' px-3 mx-auto md:w-11/12'>

        <motion.div className='flex flex-col gap-14 mt-20 md:mx-auto md:w-3/4 lg:w-full lg:flex-row'
            
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
        >
          <motion.div className="border-4 border-primary-200 rounded-md hidden lg:block"
          variants={leftCardAnimate}
          ></motion.div>

          <motion.div className='w-3/4 lg:w-1/2 '
          variants={leftCardAnimate}
          >
            <div className="relative">
            <img src={Upcomming } alt="" className='h-62' />
            <div className="w-full h-full bg-secondary-100/60 absolute top-0 left-0"></div>
            </div>
          </motion.div>
          <div className='w-full lg:w-1/2'>
            <motion.h1 className='text-3xl'
            variants={rightCardAnimate}
            > Ayat Upcoming New Community </motion.h1>
            <motion.p className='text-md mt-3 w-3/4'
            variants={rightCardAnimate}
            >

           We are also proud to announce our new project that is currently building and selling, a project expected to put a roof under many local Ethiopians and the Ethiopian diaspora community. Locating in one of Addiss’ top residential district, Ayat and CMC, this project is designed to suite different expectations of different home buyers.
            </motion.p>
            <p className={openUpcomming ? "block w-3/4" :"hidden" }>This project has variety of building plans such as residential, mixed use, and G+1 Apartments. The residential buildings are 15 floored buildings where all floors are built for residential use only. The mixed use buildings are 15 floored buildings which are used for both residential and commercial use, floors ground to 3rd are used for commercial purposes where the remaining floors are used for residential. The G+1 apartment buildings are duplex units, all used for residential. As our project keeps to blossom, Ayat is working hard towards the delivery of more than 1000 units. Ayat invites you to be part of it community. Clients who are looking to be part of this community can purchase their homes at Ayats sales offices or at an official agent offices.</p>
            <motion.button onClick={ () => SetOpenUpcomming( !openUpcomming ) }
              className='bg-primary-100 text-secondary-100 px-10 py-3 tracking-widest my-10 font-semibold focus:outline-none rounded  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
            variants={rightCardAnimate}
            >READ <span>{ openUpcomming ? " LESS" : " MORE" }</span></motion.button>
          </div>
        </motion.div>
      </div>
      <motion.div className="bg-secondary-100 mt-24 py-14"
            
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
      >
        <div className=' px-3 mx-auto md:w-11/12'>

          <div className='flex flex-col gap-14 md:mx-auto lg:flex-row-reverse  lg:w-full md:w-3/4 '>
            
            <motion.div className='w-3/4 lg:w-1/2'
            variants={rightCardAnimate}
            >
            <div className="relative">
            <img src={ Mall } alt="" className='h-full' />
            <div className="w-full h-full bg-secondary-100/60 absolute top-0 left-0"></div>
            </div>
            </motion.div>
            
          <div className='w-full text-tertiary-100 lg:w-1/2'>
            <motion.h1 className='text-3xl capitalize'
            variants={leftCardAnimate}
            >  Kazanchis Mall Sold Out</motion.h1>
            <motion.p className='text-md mt-3 w-3/4'
            variants={leftCardAnimate}
            >
                Ayat is well known for building and delivering homes and now it has made its community proud once again. It has built and delivered a mall at the top business district in Addis. A building located at Kazanchis; A great business location surrounded by high class international hotels and diplomatic residence.
                
              </motion.p>
              <p className={openMall ? "block w-3/4" :"hidden" }> Ayat is in great awe to inform the community that this Kazanchis mall is now sold out.</p>
              <motion.button onClick={ () => SetOpenMall( !openMall ) } className='bg-primary-100 text-secondary-100 px-10 py-3 tracking-widest my-10 font-semibold focus:outline-none rounded  hover:bg-tertiary-100 hover:text-secondary-100 duration-200 hover:scale-[1.05] '
              variants={leftCardAnimate}
              >READ <span>{ openMall ? " LESS" : " MORE" }</span></motion.button>
            
          </div>
            <motion.div className="border-4 border-primary-200 rounded-md hidden lg:block"
            variants={leftCardAnimate}
            ></motion.div>
        </div>
        </div>
      </motion.div>
       <div className=' px-3 mx-auto md:w-11/12'>

        <motion.div className='flex flex-col justify-center gap-14 mt-20 md:mx-auto md:w-3/4 lg:w-full lg:flex-row mb-14'
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
        >
          <motion.div className="border-4 border-primary-200 rounded-md hidden lg:block"
          variants={leftCardAnimate}
          ></motion.div>

          <motion.div className='w-3/4 lg:w-1/2 '
          variants={leftCardAnimate}
          >
            <div className="relative">
            <img src={Website } alt="" className='h-62' />
            <div className="w-full h-[100%] bg-secondary-100/60 absolute top-0 left-0"></div>
            </div>
          </motion.div>
          <div className='w-full lg:w-1/2'>
            <motion.h1 className='text-3xl'
            variants={rightCardAnimate}
            > Ayat New Website Launch </motion.h1>
            <motion.p className='text-md mt-3 w-3/4'
            variants={rightCardAnimate}
            >

          Ayat is excited to announce its new website launch, built by REVO Solutions PLC. In order to increase its digital channel Ayat has brought its client a website made easy to navigate and a site where clients can get all necessary information about their future home.
            </motion.p>
            <p className={openNew ? "block w-3/4" :"hidden" }>The website has Floor plans showing different designs for different units, 3D videos showing both the interior and exterior of units that are selling, construction updates explaining the current construction stage, available products, all news on Ayat Real Estate and our contact information.</p>
            <motion.button onClick={ () => SetOpenNew( !openNew ) } className='bg-primary-100 text-secondary-100 px-10 py-3 tracking-widest my-10 font-semibold focus:outline-none rounded  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
            variants={rightCardAnimate}
            >READ<span> { openNew ? " LESS" : " MORE" }</span></motion.button>
          </div>
        </motion.div>
      </div>

    </div>
  )
}


export default New
