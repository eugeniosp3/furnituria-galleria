import React from 'react'

function NavBarDesktop() {
  return (
    <div className="flex items-center justify-between w-full">
      <div id="logo" className="flex">
        <p className='text-2xl font-semibold text-slate-50'>Furnituria</p>
        <p className='text-2xl font-semibold text-yellow-400'>\\</p>
        </div>
        <div id="links" className="flex items-center justify-between w-1/2">
        <p className="font-medium text-slate-50 hover:text-yellow-500 ease-in-out duration-500 cursor-pointer">Home</p>
        <p className="font-medium text-slate-50 hover:text-yellow-500 ease-in-out duration-500 cursor-pointer">Furniture</p>
        <p className="font-medium text-slate-50 hover:text-yellow-500 ease-in-out duration-500 cursor-pointer">Cart</p>
        <p className="font-medium text-slate-50 hover:text-yellow-500 ease-in-out duration-500 cursor-pointer">Blog</p>
        <p className="font-medium text-slate-50 hover:text-yellow-500 ease-in-out duration-500 cursor-pointer">Admin</p>
        </div>

    </div>
  )
}

export default NavBarDesktop