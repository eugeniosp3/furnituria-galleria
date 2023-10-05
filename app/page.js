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
      <div id="top" className="bg-gray-700  w-full h-2/3 mt-[60px] pt-8 flex items-center justify-center">
      <Hero />
      </div>
      <div id="mid" className="
      xs:max-lg:flex-col xs:max-md:gap-20
      w-full bg-white flex  items-center lg:items-start justify-between gap-12">
       {/* call to action buttons of mid */}
        <div id="CTAbuttons" className="
        xs:max-md:flex-col md:flex-row md:justify-center lg:hidden
        flex gap-3 w-full items-center mt-10 ">
          <div className="
          xs:max-md:w-4/5 md:w-1/3
          bg-yellow-500  p-3 rounded-full flex items-center justify-center">
            <p className="text-slate-50">Buy Now</p></div>
          <div className="
          xs:max-md:w-4/5 md:w-1/3
          border-2 border-yellow-700  p-3 rounded-full flex items-center justify-center">
            <p className="text-yellow-700">Explore</p></div>
        </div>
        {/* why we da best */}
        <div id="whyWeDaBest"
        className="
        xs:max-md:h-3/5 xs:max-md:w-4/5 lg:h-[350px] lg:justify-center lg:mt-20
        flex flex-col items-center justify-evenly 
        gap-10
        w-3/4
        ">
          <div id="textOnlyBottom" className="
          lg:w-1/2 h-1/2 lg:h-[90%]
          flex flex-col items-start gap-5 w-full">
            <p className="
            lg:text-md lg:whitespace-nowrap
            text-2xl font-semibold text-slate-800">Why We&lsquo;re The Best</p>
            <p className="
            lg:text-xs
            text-slate-400">We have 5000+ 5-Star reviews on our Furniture & Home Decor products. If you order $500 or more receive free shipping and placement in your room of choice. If you live in a building with no elevator you better have strong friends though.</p>
          </div>
          <div id="arrows" className="
          lg:w-[40%] lg:h-1/3 
          flex w-11/12 items-center justify-between">
            <FaArrowCircleRight className="text-4xl text-yellow-500" />
            <FaArrowCircleRight className="text-4xl text-yellow-500" />
            <FaArrowCircleRight className="text-4xl text-yellow-500" />

          </div>
          <div id="textOnlyBottom2" className="
          lg:w-1/2 h-1/2 lg:h-[90%]
          flex flex-col items-start gap-2 w-full ">
            <p className="text-2xl font-semibold text-slate-800">Family Owned for 50 Years</p>
            <p className="
            lg:text-xs
            text-slate-400">Our founder, Pete Furnituria, founded this furniture gallery in the early 1920s. His last name was actually Furnituria and he did not have a legal name change in 1919. Claims stating otherwise are based on a lie started by our competitors and we deny it to this day. We asked him too.</p>
          </div>
        </div>

        {/* store items start here */}
        <div id="storeItems" className="
        xs:max-md:h-[1200px] md:h-[550px] xs:max-md:gap-20 xs:max-md:mb-32 xs:max-md:mt-10 md:gap-10
        w-full flex flex-col items-center justify-evenly">
          <div id="highlighted items" className="
          md:-mb-10
          flex flex-col items-center ">
            <p className="text-2xl font-semibold text-slate-700">Highlighted Items</p>
            <p className="text-sm text-slate-400">Most purchased items this week.</p>
          </div>
          <div id="highlightedItems" className="
          xs:max-md:flex-col xs:max-md:gap-10
          flex  w-full items-center justify-evenly ">
            <StoreItem image={"/pouf.png"} title={"American West Pouf Ottoman"} price={79}/>
            <StoreItem image={"/blueChair.png"} title={"Turkish Silk Dining Chair"} price={149}/>
            <StoreItem image={"/ovalVase.png"} title={"Red Oval Vase Swiss"} price={129}/>
          </div>
        </div>
      

      {/* menu stuff happens down here */}
      {menu ? <MobileLinks /> : null}
      <div id="menuIcon" className="flex items-center justify-center w-10 h-10
        rounded-full 
      fixed translate-x-10 translate-y-14 -top-10 left-3/4
      
      ">
        {!menu ? <IoMenuOutline className="
        md:hidden
        text-3xl text-slate-50 cursor-pointer"
        onClick={() => setMenu(!menu)} />
      : <AiOutlineClose className="text-3xl text-slate-50 cursor-pointer" 
      onClick={() => setMenu(!menu)} />
      }
      </div>

      </div>
      
      {/* footer starts here */}
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
