import React, { useState } from 'react'
import FormInput from './FormInput'

const Form = () => {
  const [ values, setValues ] = useState( {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
    // how: "how",
    // downPayment: "downpatment",
    // yesOrNo: "yesOrNo",
  } );
  
  const inputs = [
    {
      id: 1,
      name:"firstName",
      label:"First Name",
      placeholder: "First Name",
      errorMessage:
        "First name should be 3-16 characters and shouldn't include any special character!",
      type: "text",
           pattern: "^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id: 2,
      name:"lastName",
      label:"Last Name",
      placeholder: "Last Name",
      errorMessage:
        "Last name should be 3-16 characters and shouldn't include any special character!",
      type: "text",
         pattern: "^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id: 3,
      name:"phoneNumber",
      label:"Phone Number",
      placeholder: "Phone Number",
       errorMessage:
        " Should be  a valid phone number",
      type: "tel",
      pattern:"^[0-9+]{10,13}",
      required:true,
    },
    {
      id: 4,
      name:"email",
      label:"Email",
      placeholder: "Email",
      errorMessage: " Should be  a valid email address",
      type: "email",
      required:true,
   
    },
    {
      id: 5,
      name:"message",
      label:"If you have any inquires",
      placeholder:"Please write here if you have any inquires",
      type: "text",
      
    },
    
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log( values)
  return (
    <div>

    <div className="w-full mx-auto py-14 border-2 border-secondary-300/10 rounded-lg shadow-md bg-white sm:w-10/12 lg:w-8/12">
      <form onSubmit={ handleSubmit }>
        <div  className='flex flex-col w-3/4  mx-auto  gap-8 items-center'>

        {inputs.map((input) => (
          <FormInput className="rounded border-[1px] focus:border-secondary-300/70  border-secondary-300/30 focus:shadow-2xl focus:outline-none py-3 shadow   px-10 " 
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
          />
          ) ) }
       
          </div>
      </form>
    </div>
      <button className="bg-primary-200 self-cente mt-14 col-span-2 shadow-lg w-max mx-auto
     font-semibold text-secondary-100 px-10 h-10 py-6 text-tertiary text-xl flex items-center  rounded-md
      tracking-widest  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]">SUBMIT</button>
          </div>
  )
}

export default Form
