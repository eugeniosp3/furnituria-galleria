"use client"
import Image from 'next/image'
import {IoMenuOutline} from 'react-icons/io5'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import MobileLinks from './components/NavBar/MobileLinks'
import Hero from './components/Hero/Hero'
import StoreItem from './components/StoreItem/StoreItem'
import {FaArrowCircleRight} from 'react-icons/fa'
import {PiCouchFill} from 'react-icons/pi'
export default function Home() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="flex flex-col justify-between w-screen h-screen overflow-y-scroll">
      <div id="top" className="bg-gray-700 w-full h-2/3 mt-[60px] pt-8">
      <Hero />
      </div>
      <div id="mid" className="w-full bg-white flex flex-col items-center justify-between gap-20">
        <div id="CTAbuttons" className="flex flex-col gap-3 w-full items-center mt-10">
          <div className="bg-yellow-500 w-4/5 p-3 rounded-full flex items-center justify-center">
            <p className="text-slate-50">Buy Now</p></div>
          <div className="border-2 border-yellow-700 w-4/5 p-3 rounded-full flex items-center justify-center">
            <p className="text-yellow-700">Explore</p></div>
        </div>
        <div id="whyWeDaBest" className="flex flex-col items-center justify-evenly h-3/5 w-4/5  gap-10">
          <div id="textOnlyBottom" className="flex flex-col items-start gap-5 w-full h-1/2 ">
            <p className="text-2xl font-semibold text-slate-800">Why We're The Best</p>
            <p className="text-slate-500">We have 5000+ 5-Star reviews on our Furniture & Home Decor products. If you order $500 or more receive free shipping and placement in your room of choice.</p>
          </div>
          <div id="arrows" className="flex w-11/12 items-center justify-between">
            <FaArrowCircleRight className="text-4xl text-yellow-500" />
            <FaArrowCircleRight className="text-4xl text-yellow-500" />
            <FaArrowCircleRight className="text-4xl text-yellow-500" />

          </div>
          <div id="textOnlyBottom" className="flex flex-col items-start gap-3 w-full h-1/2">
            <p className="text-2xl font-semibold text-slate-800">Family Owned for 50 Years</p>
            <p className="text-slate-500">We have 5000+ 5-Star reviews on our Furniture & Home Decor products. If you order $500 or more receive free shipping and placement in your room of choice.</p>
          </div>
        </div>
        <div id="storeItems" className="w-full h-[1200px] flex flex-col items-center justify-evenly gap-20 mb-32 mt-10">
          <div id="highlighted items" className="flex flex-col items-center">
            <p className="text-2xl font-semibold text-slate-700">Highlighted Items</p>
            <p className="text-sm text-slate-400">Most purchased items this week.</p>
          </div>
          <StoreItem image={"/pouf.png"} title={"American West Pouf Ottoman"} price={79}/>
          <StoreItem image={"/blueChair.png"} title={"Turkish Silk Dining Chair"} price={149}/>
          <StoreItem image={"/ovalVase.png"} title={"Red Oval Vase Swiss"} price={129}/>

        </div>
      

      {/* menu stuff happens down here */}
      {menu ? <MobileLinks /> : null}
      <div id="menuIcon" className="flex items-center justify-center w-10 h-10
        rounded-full 
      fixed translate-x-10 translate-y-14 -top-10 left-3/4
      
      ">
        {!menu ? <IoMenuOutline className="text-3xl text-slate-50"
        onClick={() => setMenu(!menu)} />
      : <AiOutlineClose className="text-3xl text-slate-50" 
      onClick={() => setMenu(!menu)} />
      }
      </div>

      </div>
      
      
      <div className="w-full flex flex-col bg-gray-700 p-10 gap-4">
        <div className="flex justify-between ">
          <div id="logo" className="flex">
            <p className='text-2xl font-semibold text-slate-50'>Furnituria</p>
            <p className='text-2xl font-semibold text-yellow-400'>\\</p>
          </div>
          <PiCouchFill className="text-4xl text-slate-50" />
        </div>
        <div id="footerText" className="flex w-full">
          <div id="footerTextLeft" className="flex flex-col w-1/2  text-xs text-slate-400">
            <p className="">Furnituria Galleria</p>
            <p className="">1234 Main St.</p>
            <p className="">New York, NY 10001</p>

          </div>
          
          {/* links */}
          <div id="footerLinks" className="flex flex-col w-1/2 items-end text-xs">
            <p className="text-slate-400 hover:text-slate-50">Privacy</p>
            <p className="text-slate-400 hover:text-slate-50">Terms of Use</p>
            <p className="text-slate-400 hover:text-slate-50">FAQ</p>
            <p className="text-slate-400 hover:text-slate-50">Returns & Exchanges</p>
          </div>

        </div>
      </div>

    </div>
  )
}
