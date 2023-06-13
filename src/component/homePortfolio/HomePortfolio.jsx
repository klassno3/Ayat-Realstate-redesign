import React, { useState }from 'react'
import { FaSearch} from "react-icons/fa"
import { BsChevronDown } from "react-icons/bs"
import {cards} from "../../data"
import Card from "./Card"


const HomePortfolio = () => {
  const [ isPressedStatus, setIsPressedStatus ] = useState( false )
  const [ isPressedLocation, setIsPressedLocation ] = useState( false )
  const [ isPressedType, setIsPressedType ] = useState( false )
  const [ isStatus, setIsStatus ] = useState( "status" )
  const [ isLocation, setIsLocation ] = useState( "location" )
  const [ isType, setIsType ] = useState( "type" )
  


  return (
    <div id="portfolio" className='bg-tertiary-100  py-24 '>
      <h1 className='text-4xl justify-center mx-auto flex font-cinzel'>Our Portfolio</h1>
      <div className='bg-white mx-4  justify-between items-center  h-24 mt-14  shadow-lg rounded-full px-10 hidden md:flex lg:w-11/12 lg:mx-auto ' >
        {/* ***************************************************status****************************************************** */ }
          <div className='bg-secondary-100 relative  text-xl  w-36 h-14 rounded-full flex justify-center items-center text-tertiary-100 gap-4 lg:w-52 lg:gap-10'>
          <p className='z-20'>{ isStatus === "status" ? "Status" : "For Sale" }</p>
          <BsChevronDown size={ 20 } className='z-20 hover:text-primary-100' onClick={ () => { setIsPressedStatus( !isPressedStatus ) } } />  
            { isPressedStatus &&
            ( <div className='absolute text-secondary-100 opacity-1/2 bg-white  w-full h-32 rounded-md  top-full px-5 py-10 left-0'>
             { isStatus !== "status" ? <div className="pb-1 text-xl border-b-2 border-gray-300 pointer cursor-pointer hover:text-primary-100 " onClick={ () => { setIsStatus( "status" ) } } >Status</div>:
              <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsStatus( "forsale" ) } }>For Sale</div> }
            </div> ) }
        </div>
          {/* ***************************************************location****************************************************** */}
        <div className='bg-secondary-100 relative  text-xl  w-44 h-14 rounded-full flex justify-center items-center text-tertiary-100 gap-4 lg:w-52 lg:gap-10'>
          <p className='z-20'>{ isLocation === "location" ? "Location" : isLocation === "ayat" ? "Ayat" : "CCE-CMC" }</p>
          <BsChevronDown size={ 20 } className='z-20 hover:text-primary-100' onClick={ () => { setIsPressedLocation( !isPressedLocation ) } } />
            { isPressedLocation &&
            (<div className='absolute text-secondary-100 opacity-1/2 bg-white  w-full h-32 rounded-md  top-full px-5 py-10 left-0'>
              { isLocation === "location" ?
              <div>
                <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsLocation( "cmc" ) } }>CCE-CMC</div>
                
                <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsLocation( "ayat" ) } }>Ayat</div>
              </div>
               : isLocation ==="ayat" ?
                <div>
                  <div className="pb-1 text-xl border-b-2 border-gray-300 pointer cursor-pointer hover:text-primary-100 " onClick={ () => { setIsLocation( "location" ) } } >Location</div>
                  <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsLocation( "cmc" ) } }>CCE-CMC</div>
                </div>
             : isLocation ==="cmc" ?
            
                    <div>
                    <div className="pb-1 text-xl border-b-2 border-gray-300 pointer cursor-pointer hover:text-primary-100 " onClick={ () => { setIsLocation( "location" ) } } >Location</div>
                    
                    <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsLocation( "ayat" ) } }>Ayat</div>
                    
                  </div>
                  
              : ""
              


            }
              </div> ) }
            
          </div>
          {/* ***************************************************types****************************************************** */}
          
          <div className='bg-secondary-100 relative  text-xl  w-56 h-14 rounded-full flex justify-center items-center text-tertiary-100 gap-4 lg:w-64 lg:gap-10'>
              <p className='z-20'>{ isType === "type" ? "Property Types" : isType === "resindential" ? "Resindential" : "Commertial"}</p>
            <BsChevronDown size={ 20 } className='z-20 hover:text-primary-100' onClick={()=>{setIsPressedType(!isPressedType)}}/>
            { isPressedType &&
            (<div className='absolute text-secondary-100 opacity-1/2 bg-white  w-full h-32 rounded-md  top-full px-5 py-10 left-0'>
              { isType ==="type" ?
                <div>
                  <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "resindential" ) } }>Resindential</div>
                    <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "commertial" ) } }>commercial</div>
                </div>
                :
                isType === "commertial" ?
                  <div>
                      <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "resindential" ) } }>Resindential</div>
                    <div className="pb-1 text-xl border-b-2 border-gray-300 pointer cursor-pointer hover:text-primary-100 "onClick={ () => { setIsType( "type" ) } } >Property Type</div>
                  </div>
                  :
                  isType === "resindential"  ?

                    <div>
                  <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "resindential" ) } }>Resindential</div>

                      <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "commertial" ) } }>commercial</div>
                    </div> :
             ""     
            }
                
              </div> ) }
            
          </div>
          {/* ***************************************************types****************************************************** */}
          <div><FaSearch size={ 35 }  className='text-secondary-100 hover:text-primary-100'/></div>
        </div>
        <div className=' gap-14   px-3 mx-auto lg:w-11/12'>

        <div className="cards grid mt-5 grid-cols-1 row-cols-4 r justify-center gap-14 lg:gap-20 gap-y-7 lg:grid-cols-2 lg:grid-rows-2 "
     
         
        >
      
          { cards.map( card => (
            <Card item={ card } key={ card.id } />
          ) ) }
              
      
        
          </div>
         


        </div>

          </div>
  )
}

export default HomePortfolio
