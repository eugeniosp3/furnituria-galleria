import Image from 'next/image'
import React from 'react'

function StoreItem({image, title, price}) {
  return (
    <div className="w-2/3  h-96 flex flex-col items-center justify-evenly sm:max-md:gap-4 md:gap-6">
        <Image src={image} width={200} height={200} className="sm:max-md:w-2/3 md:w-1/3"/>
        <div className="sm:max-md:w-2/3 md:w-1/4 text-center flex items-center flex-col justify-center gap-4">
        <p>{title}</p>
        <p className="font-semibold">${price}</p>
        </div>
        <div className="flex items-center justify-evenly w-24 min-h-7 bg-yellow-400 rounded-lg shadow-md">
            <p className="text-sm text-gray-50 font-semibold">Add to Cart</p>
            {/* <p className="text-sm text-slate-50 font-semibold"></p> */}
        </div>
    </div>
  )
}

export default StoreItem