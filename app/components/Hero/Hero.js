import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="
    xs:max-lg:flex-col lg:w-[88%]
    flex  justify-between lg:justify-center items-center gap-8 h-full pb-10 ">
      <div id="textonly" className="
      lg:w-[60%] lg:items-start lg:gap-6
      w-2/3 flex flex-col items-center justify-center gap-6">
      <span className="
      lg:w-[40%] xs:max-lg:text-center
      w-4/5 ">
        <p className="
        lg:text-4xl
        text-white text-3xl">Furniture that everyone Loves</p>
      </span>
      <p className="
      xs:max-lg:text-center lg:w-1/2
      text-white text-12 ">We have 5000+ 5-Star reviews on our Furniture & Home Decor products.</p>
      <div id="CTAbuttons" className="
      xs:max-md:flex-col md:flex-row md:justify-center xs:max-lg:hidden
      flex  gap-3 w-full lg:w-[60%] items-center ">
          <div className="
          xs:max-md:w-4/5 md:w-1/3 lg:w-1/2 lg:h-10
          bg-yellow-500  p-3 rounded-full flex items-center justify-center">
            <p className="
            lg:whitespace-nowrap
            text-slate-50 ">Buy Now</p></div>
          <div className="
          xs:max-md:w-4/5 md:w-1/3 lg:w-1/2 lg:h-10
          border-2 border-yellow-700  p-3 rounded-full flex items-center justify-center">
            <p className="text-yellow-700">Explore</p></div>
        </div>
      </div>
      <Image src="/furniture.png" width={400} height={300} className="
      xs:max-md:w-5/6 xs:max-md:h-full lg:w-[85%]
      "/>
      
    </div>
  )
}

export default Hero