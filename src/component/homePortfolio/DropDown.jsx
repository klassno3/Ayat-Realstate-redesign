import React, { useState, useEffect, useRef } from 'react';
import {GoChevronDown} from "react-icons/go"


const DropDown = ( { options,title,selection,onSelect } ) => {
  const [ isOpen, setIsOpen ] = useState( false );
   const divEl = useRef();

  useEffect(() => {
    const handler = ( event ) => {
      
      if ( !divEl.current.contains(event.target)) {
        console.log( divEl.current )
        setIsOpen(false)
        
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

   const handleOptionClick = (option) => {
     setIsOpen( false );
     onSelect( option );
    
   
    
  }
   const handleClick = () => {
    setIsOpen( !isOpen );

  }
  const renderedOptions = options.map( ( option ) => {
  
      
  return ( <div  className="text-xl border-b-[1px] border-gray-300 pb-2 cursor-pointer hover:text-primary-100"onClick={()=> handleOptionClick(option) } key={ option.value }>{ option.lable }</div> )
  } ); 
  
  return (
    <div ref={ divEl } className="cursor-pointer ">
     {/* if selection is null it will print title if it not null it will print selection.label */}
      <div className='bg-secondary-100 relative  text-xl   h-14 rounded-full flex justify-between px-5 py-2  items-center text-tertiary-100 gap-4 xl:w-64 lg:gap-10' onClick={ handleClick }>{ selection?.lable || title } <GoChevronDown />
      
      { isOpen && <div className=" absolute text-secondary-100 opacity-1/2 bg-white  w-full h-32 rounded-md  top-full px-5 py-10 left-0">{ renderedOptions }</div> }
      </div>
    </div>
  
  )
}

export default DropDown
