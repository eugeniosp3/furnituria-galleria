import Image from 'next/image'
import React from 'react'

function StoreItem({image, title, price}) {
  return (
    <div className="
    xs:max-md:h-96 md:h-80 xs:max-md:gap-4 md:gap-6
    w-2/3  flex flex-col items-center justify-evenly md:justify-between  ">
      <div className="flex items-center justify-center">
        <Image src={image} width={200} height={200} className="
        xs:max-md:w-[100%] md:w-[100%]
        "/>
        </div>
        <div id="titleAddToCart" className="flex flex-col items-center justify-between w-full">
        <div className="
        xs:max-md:w-2/3 md:w-1/2 lg:w-[65%]
        text-center flex items-center flex-col justify-center gap-4">
        <p>{title}</p>
        <p className="font-semibold">${price}</p>
        </div>
        <div className="flex items-center justify-evenly w-24 min-h-7 bg-yellow-400 rounded-lg shadow-md">
            <p className="text-sm text-gray-50 font-semibold">Add to Cart</p>
            {/* <p className="text-sm text-slate-50 font-semibold"></p> */}
        </div>
        </div>
    </div>
  )
}

export default StoreItem