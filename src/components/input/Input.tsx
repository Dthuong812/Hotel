import React from 'react'
interface InputProp{
    className?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'submit' ;
    full?: boolean;
    placeholder?: string;
    

}
const Input: React.FC<InputProp> = ({
  className = '',
  type =  'text',
  full = false,
  placeholder,
  ...props
}) => {
  return (
        <input type={type} 
        placeholder={placeholder}
        className={`w-[300px] px-2 py-2 border-2 border-teal-500 rounded-md lg:w-[85%] md:mt-10 mt-5 ${className} ${full ? 'w-full' : ''}`}
        {...props} />
  )
}

export default Input

