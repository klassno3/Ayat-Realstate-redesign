import React  , {useState,useEffect} from 'react'
import { Link,useLocation } from "react-router-dom"
import LogoGreen from "../../images/Logo-white.svg"
import {FaPhone, FaMailBulk, FaFacebook, FaTwitter,FaYoutube} from "react-icons/fa"

const Footer = () => {

  const location = useLocation()
  const [ selectedTab, setSelectedTab ] = useState( "home" )
  
  useEffect( () => {
    if ( location.pathname === "/" ) {
      setSelectedTab("home")
    }
    else if ( location.pathname === "/news" ) {
      setSelectedTab("news")
    }
    else if ( location.pathname === "/contactUs" ) {
      setSelectedTab("contactUs")
    }
   else if ( location.pathname.startsWith("/portfolio")) {
      setSelectedTab("portfolio")
    }
    else if ( location.pathname === "/register" ) {
      setSelectedTab("register")
    }
    else if ( location.pathname === "/priceinfo" ) {
      setSelectedTab("priceinfo")
    }
  },[location.pathname])
  
  return (
    <div className='footer'>
          
        <div className="bg-secondary-100 py-10">
      <div className=" px-5 mx-auto md:w-11/12 ">
      <img src={ LogoGreen } className="w-14 h-14 " alt="Logo" />
          <div className='border-t-[.5px] border-t-secondary-200 w-full my-4'>
          </div>
          <div className='flex  flex-col gap-10 justify-between md:flex-row '>

          <div className="flex flex-col gap-1  text-tertiary-100">
            <p>Main Office – CCE (CMC)</p>
            <p>Monday – Saturday</p>
            <p>8:30 AM – 5:30 PM</p>
            <p className='w-3/4'>Address CMC (at the back of Michael church)</p>
            <div className='flex gap-2 flex-col'>

            <div className='flex gap-2 items-center '>
              <FaPhone size={15} className='text-tertiary-100' />
            <p>+251 (0) 977 60 60 60</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FaPhone size={15} className='text-tertiary-100' />
            <p>+251 (0) 976 60 60 60</p>
            </div>
            <div className='flex gap-2 items-center '>
              <FaPhone size={15} className='text-tertiary-100' />
            <p>+251 (0) 11 55 11 976</p>
            </div>
            <div className='flex gap-2 items-center '>
              <FaMailBulk size={15} className='text-tertiary-100' />
            <p>+3372</p>
            </div>
            </div>
          </div>
          <div className="right">
            <div className="links  text-tertiary-100 flex flex-col gap-3 items-start">
              <Link to="./" onClick={() => setSelectedTab('Home')} className={`group ${
                selectedTab === 'home' ? 'font-semibold' : ''
              }` }>
              Home
              <div className={`border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/2 group-hover:opacity-100 ${selectedTab === 'home' ? "opacity-100" : ''}` }></div>
              </Link>
              <Link to="./news" onClick={() => setSelectedTab('news')} className={`group ${
              selectedTab === 'news' ? 'font-semibold' : ''
              }` }>
              News
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/2 
              group-hover:opacity-100 ${ selectedTab === 'news' ? "opacity-100" : '' }` }></div>

              </Link>
              <Link to="./contactUs" onClick={() => setSelectedTab('contactUs')} className={`group ${
                selectedTab === 'contactUs' ? 'font-semibold' : ''
              }` }>
              Contact Us
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/2 
              group-hover:opacity-100 ${ selectedTab === 'contactUs' ? "opacity-100" : '' }` }></div>

              </Link>
              <Link to="./portfolio/ayat-hill"  onClick={() => setSelectedTab('portfolio')}className={`group ${
                selectedTab === 'portfolio' ? 'font-semibold' : ''
              }` }>
              Portfolio
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/2 
              group-hover:opacity-100 ${ selectedTab === 'portfolio' ? "opacity-100" : '' }` }></div>

                </Link>
                <Link to="./priceinfo" onClick={() => setSelectedTab('priceinfo')} className={`group ${
              selectedTab === 'priceinfo' ? 'font-semibold' : ''
              }` }>
              Download Price information
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/5 
              group-hover:opacity-100 ${ selectedTab === 'priceinfo' ? "opacity-100" : '' }` }></div>

            </Link>
            
               <Link to="/register" className={ ` hover:scale-[1.03] bg-primary-200 shadow-lg px-10 h-10 py-5 uppercase text-secondary-100  flex items-center tracking-wider  rounded-md 
            ${ selectedTab === 'register' ? 'font-semibold' : '' } ` }>Register
            
            </Link>
           
        </div>
           
              </div>
          </div>
          <div className='border-t-[.5px]  border-t-secondary-200 w-full my-4'></div>
          <div className="flex flex-col gap-5">

          <div className='flex justify-center gap-4'>

            <a href="https://www.facebook.com/ayatshareco/"  target="_blank" rel="noopener noreferrer" >
            <FaFacebook className="text-tertiary-100 hover:text-primary-200" size={ 25 } />
            </a>
       
             <a href="https://twitter.com/ayat_share_co?lang=en" target="_blank" rel="noopener noreferrer" >
            <FaTwitter  className="text-tertiary-100 hover:text-primary-200" size={25}/>
            </a>
             <a href="https://www.youtube.com/@AyatRealEstate"  target="_blank" rel="noopener noreferrer">
            <FaYoutube  className="text-tertiary-100 hover:text-primary-200" size={25}/>
            </a>
          </div>
          <p className='justify-center mb-4 text-center hidden text-tertiary-100 md:flex'>
            © Ayat Real Estate 2020. All rights reserved.
          </p>
          </div>
      </div>
      </div>
    </div>
    

  )
}

export default Footer
