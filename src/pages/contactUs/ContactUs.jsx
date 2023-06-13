import React from 'react'
import { FaFacebook,FaTwitter,FaYoutube,FaMailBulk,FaPhone, } from "react-icons/fa"
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className='bg-tertiary-100  mt-20 py-14 '>
      <div className='px-3 mx-auto lg:w-11/12'>
        <h1 className='text-2xl text-secondary-100 text-center mx-auto lg:text-4xl'>Get In Touch</h1>
        <p className='text-center w-3/4 text-secondary-200 mx-auto mt-5 lg:text-xl sm:w-1/2'>Thank you for visiting AYAT REAL ESTATE. Please complete the form below, so we can provide a quick and efficient service. If this is an urgent matter please Contact our lines:</p>
      <div className='flex mt-8 mb-14 justify-center gap-4'>

            <a href="https://www.facebook.com/ayatshareco/"  target="_blank" rel="noopener noreferrer" >
            <FaFacebook className="text-secondary-100 hover:text-primary-300 hover:scale-110 duration-100 transition-all" size={ 25 } />
            </a>
      
             <a href="https://twitter.com/ayat_share_co?lang=en"  target="_blank" rel="noopener noreferrer" >
            <FaTwitter  className="text-secondary-100 hover:text-primary-300 hover:scale-110 duration-100 transition-all" size={25}/>
            </a>
             <a href="https://www.youtube.com/@AyatRealEstate" target="_blank" rel="noopener noreferrer"  >
            <FaYoutube  className="text-secondary-100 hover:text-primary-300 hover:scale-110 duration-100 transition-all" size={25}/>
            </a>
          </div>
        <div className='text-center mx-auto'>
          <h2 className='text-center text-xl text-secondary-200 uppercase tracking-widest'>Working Hours</h2>
          <p className='text-secondary-300 text-center'>Monday – Saturday</p>
          <p className='text-secondary-300 '>8:30 AM – 5:30 PM</p>
        </div>
        <div className='grid grid-cols-1 grid-rows-9 gap-12 mt-20 justify-between md:mx-auto md:w-3/4 lg:w-full sm:grid-cols-2 lg:grid-cols-3 '>
         
          
          <div className='flex flex-col items-center text-center lg:text-left lg:items-start gap-1'>
            <h1 className='text-secondary-100 text-md font-semibold uppercase'> Ras Hotel  Sales  Office</h1>
            <p className='text-secondary-200'>Inside Ras hotel</p>
            <p className='text-secondary-200'>Addis Ababa, Ethiopia</p>
            <div className='flex gap-2 items-center text-secondary-200 '>
              <FaPhone size={15} className='text-secondary-200' />
            <p className='text-secondary-200'>251 (0) 977 60 60 60</p>
            </div>
            <div className='flex gap-2 items-center text-secondary-200'>
              <FaMailBulk size={15} className='text-secondary-200' />
          <a href="mailto:sales@ayatsc.com">sales@ayatsc.com</a>
            </div>
          </div>
          
          <div className='flex flex-col items-center  text-center lg:text-left lg:items-start gap-1'>
            <h1 className='text-secondary-100 text-md font-semibold uppercase'> Kazanchise Sales  Office</h1>
            <p className='text-secondary-200'>Ayat City Center, 1st floor</p>
            <p className='text-secondary-200'>Next to Intercontinental Hotel</p>
            <p className='text-secondary-200'>Addis Ababa, Ethiopia</p>
            <div className='flex gap-2 items-center text-secondary-200 '>
              <FaPhone size={15} className='text-secondary-200' />
            <p className='text-secondary-200'>251 972 60 60 60</p>
            </div>
            <div className='flex gap-2 items-center text-secondary-200'>
              <FaMailBulk size={15} className='text-secondary-200' />
          <a href="mailto:sales@ayatsc.com">sales@ayatsc.com</a>
            </div>
          </div>
          
          <div className='flex flex-col items-center text-center lg:text-left lg:items-start gap-1'>
            <h1 className='text-secondary-100 text-md font-semibold uppercase'>  Bole Medhanialem Sales Office</h1>
            <p className='text-secondary-200'>Awlo building, 3rd floor</p>
            <p className='text-secondary-200'>Next to Kenenisa Hotel</p>
            <p className='text-secondary-200'>Addis Ababa, Ethiopia</p>
            <div className='flex gap-2 items-center text-secondary-200 '>
              <FaPhone size={15} className='text-secondary-200' />
            <p className='text-secondary-200'>251 976 60 60 600</p>
            </div>
            <div className='flex gap-2 items-center text-secondary-200'>
              <FaMailBulk size={15} className='text-secondary-200' />
          <a href="mailto:sales@ayatsc.com">sales@ayatsc.com</a>
            </div>
          </div>
          <div className='flex flex-col items-center text-center lg:text-left lg:items-start gap-1'>
            <h1 className='text-secondary-100 text-md font-semibold uppercase'>  CMC Sales  Office</h1>
            <p className='text-secondary-200'>Ayat S.C. Head Office</p>
            <p className='text-secondary-200'>Behind CMC Michael church Wosen Grosery</p>
            <p className='text-secondary-200'>Addis Ababa, Ethiopia</p>
            <div className='flex gap-2 items-center text-secondary-200 '>
              <FaPhone size={15} className='text-secondary-200' />
            <p className='text-secondary-200'>251 982 60 60 60</p>
            </div>
            <div className='flex gap-2 items-center text-secondary-200'>
              <FaMailBulk size={15} className='text-secondary-200' />
          <a href="mailto:sales@ayatsc.com">sales@ayatsc.com</a>
            </div>
          </div>
          <div className='flex flex-col items-center  text-center lg:text-left lg:items-start gap-1'>
            <h1 className='text-secondary-100 text-md font-semibold uppercase'> 22 Sales  Office</h1>
            <p className='text-secondary-200'>Getahun Besha biulding, 3rd floor</p>
            <p className='text-secondary-200'>Addis Ababa, Ethiopia</p>
            <div className='flex gap-2 items-center text-secondary-200 '>
              <FaPhone size={15} className='text-secondary-200' />
            <p className='text-secondary-200'>251 977 60 60 60</p>
            </div>
            <div className='flex gap-2 items-center text-secondary-200'>
              <FaMailBulk size={15} className='text-secondary-200' />
          <a href="mailto:sales@ayatsc.com">sales@ayatsc.com</a>
            </div>
          </div>
          <div className='flex flex-col items-center text-center lg:text-left lg:items-start gap-1'>
            <h1 className='text-secondary-100 text-md font-semibold uppercase'>  Ayat Sales Office</h1>
            <p className='text-secondary-200'>Infront Of Ayat Train Station , Ayat Addis</p>
            <p className='text-secondary-200'>Addis Ababa, Ethiopia</p>
            <div className='flex gap-2 items-center text-secondary-200 '>
              <FaPhone size={15} className='text-secondary-200' />
            <p className='text-secondary-200'>251 983 60 60 60</p>
            </div>
            <div className='flex gap-2 items-center text-secondary-200'>
              <FaMailBulk size={15} className='text-secondary-200' />
          <a href="mailto:sales@ayatsc.com">sales@ayatsc.com</a>
            </div>
          </div>
          <div className='flex flex-col items-center text-center lg:text-left w-3/4 mx-auto md:w-full lg:items-start gap-1'>
            <h1 className='text-secondary-100 text-md font-semibold uppercase md:text-center lg:text-left'> Addis Home Finder Sales Representative Office</h1>
            <p className='text-secondary-200'>Bole Medhanialem Mall, 5th Floor, Bole</p>
            <p className='text-secondary-200'>Addis Ababa, Ethiopia</p>
         <a className='text-secondary-200' href="https://www.addishomefinder.com">www.addishomefinder.com</a>
      
        
          </div>
              <div className='flex flex-col items-center text-center lg:text-left lg:items-start w-3/4 mx-auto md:w-full  gap-1'>
            <h1 className='text-secondary-100 text-md font-semibold uppercase md:text-center lg:text-left'> Elilta Property Services Sales Representative</h1>
            <p className='text-secondary-200'>Bole Rwanda, Tsion Building, 1st Floor, Bole</p>
            <p className='text-secondary-200'>Addis Ababa, Ethiopia</p>
           
          </div>
              <div className='flex flex-col items-center text-center lg:text-left lg:items-start w-3/4 mx-auto md:w-full gap-1'>
            <h1 className='text-secondary-100 text-md font-semibold uppercase md:text-center lg:text-left'> Marefya Gojoye Marketing Sales Representative Office</h1>
            <p className='text-secondary-200'>22 Mazoria, Baro building infront of Meklit Building, 6th floor, office 604</p>
            <p className='text-secondary-200'>Addis Ababa, Ethiopia</p>
           
          </div>
        </div>
          <Link to="/register" className=" hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05] bg-primary-200 shadow-lg w-max mx-auto mt-14 text-secondary-100 px-10 h-10 py-6 text-tertiary flex items-center  rounded-md  tracking-widest ">REGISTER NOW</Link>
      </div>
      
    </div>
  )
}

export default ContactUs
