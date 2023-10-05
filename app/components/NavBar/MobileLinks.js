import React from 'react'

function MobileLinks() {
  return (
    <div className="w-2/3 h-3/5 fixed rounded-b-xl
    translate-x-2 translate-y-4 top-12 right-0
    flex flex-col items-end justify-start px-6 py-4
    bg-slate-500 bg-opacity-90 backdrop-blur-md gap-10
    shadow-md
    ">
        <p className="font-medium text-slate-50 hover:text-yellow-500 hover:animate-bounce ease-in-out duration-500">Home</p>
        <p className="font-medium text-slate-50 hover:text-yellow-500 hover:animate-bounce ease-in-out duration-500">Furniture</p>
        <p className="font-medium text-slate-50 hover:text-yellow-500 hover:animate-bounce ease-in-out duration-500">Cart</p>
        <p className="font-medium text-slate-50 hover:text-yellow-500 hover:animate-bounce ease-in-out duration-500">Blog</p>
        <p className="font-medium text-slate-50 hover:text-yellow-500 hover:animate-bounce ease-in-out duration-500">Admin</p>


    </div>
  )
}

export default MobileLinks 