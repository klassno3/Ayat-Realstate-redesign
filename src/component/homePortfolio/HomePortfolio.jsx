import React, { useState }from 'react'
import { FaSearch} from "react-icons/fa"
import {cards} from "../../data"
import {locations} from "../../data"
import {types} from "../../data"
import {status} from "../../data"
import Card from "./Card"
import DropDown from './DropDown'


const HomePortfolio = () => {
  const [ statusSelection, setStatusSelection ] = useState( null );
  const [ locationSelection, setLocationSelection ] = useState( null );
  const [ typesSelection, setTypesSelection ] = useState( null );
 

  const handleStatusSelect = ( option ) => {
    setStatusSelection( option )
    
   
    
  }
  const handleLocationSelect = ( option ) => {
    setLocationSelection( option )
    
   
    
  }
  const handleTypesSelect = ( option ) => {
    setTypesSelection( option )
    
   
    
  }

  
 
 

  return (
    <div id="portfolio" className='bg-tertiary-100  py-24 '>
      <h1 className='text-4xl justify-center mx-auto flex font-cinzel'>Our Portfolio</h1>
      <div className='bg-white mx-4  justify-between items-center  h-24 mt-14  shadow-lg rounded-full px-10 hidden md:flex lg:w-11/12 lg:mx-auto ' >
        <DropDown options={ status } title={"Status"} selection={statusSelection} onSelect={ handleStatusSelect }/>
        <DropDown options={ locations } title={"Location"} selection={locationSelection} onSelect={ handleLocationSelect }/>
         <DropDown options={ types } title={"Property Types"} selection={typesSelection} onSelect={ handleTypesSelect }/>
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
