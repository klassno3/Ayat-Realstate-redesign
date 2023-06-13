import React, { useState } from "react";



const FormInput = ( props ) => {
  const [focused,setFocused] =useState(false)
  const { label,errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused( true );
   }

  return (
    <div className="flex flex-col gap-3 w-full justify-center mx-auto">
      <label>{ label }</label>
     <input className=""
    {...inputProps}
        onChange={ onChange }
        onBlur={ handleFocus }
        focused={focused.toString()}
      />
      { focused &&
<span className="text-red-400">{errorMessage}</span>
 }     

    </div>
  );
};

export default FormInput;