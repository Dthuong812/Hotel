import React from 'react'

const ImgItems= [
  { name: 'Hotel', url: 'banner1.avif' },
  { name: 'Home', url: 'banner2.avif' },
  { name: 'Villa', url: 'banner3.avif' },
  { name: 'Drink & Food', url: 'banner4.avif' }, 
];
const Banner = () => {
  return (
    <div className="flex lg:h-[700px] overflow-hidden animate-fade-up animate-once animate-ease-in-out">
      {ImgItems.map((item)=>(
        <div className="relative flex-1 mr-[-20%] hover:flex-[1.25] transition-[flex] duration-150 ease-linear">
        <a href="">
          <div className="absolute top-28 left-4 text-white z-10 text-[clamp(12px,5vw,32px)]">{item.name}</div>
          <img className="object-cover w-full h-full transition duration-200 "  src={item.url} alt={item.name} />
        </a>
      </div>
      ))}
    </div>

  )
}

export default Banner