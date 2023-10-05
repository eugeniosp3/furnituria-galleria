import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col justify-between items-center gap-8 h-full">
      <div id="textonly" className="w-2/3 flex flex-col items-center justify-center gap-6">
      <span className="w-4/5 text-center"><p className="text-white text-3xl">Furniture that everyone Loves</p></span>
      <p className="text-white text-12 text-center">We have 5000+ 5-Star reviews on our Furniture & Home Decor products.</p>
      </div>
      <Image src="/furniture.png" width={400} height={300} className="sm:max-md:w-5/6 sm:max-md:h-full"/>
      
    </div>
  )
}

export default Hero