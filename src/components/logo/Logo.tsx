import React from 'react'
interface LogoProps {
    className?:string
}
const Logo: React.FC<LogoProps> = ({className}) => {
  return (
    <div className={`${className}`}>
        <img src="./hotel-sign.png" alt="Hotel Logo" />
    </div>
  )
}

export default Logo