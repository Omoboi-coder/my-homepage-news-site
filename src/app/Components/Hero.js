import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    // <!-- Hero Section -->
   <section id="Hero">
    {/* <!-- flex container --> */}
   <div className="container flex flex-col py-6 px-6 mx-auto mt-4 
   items-start md:flex-row md:space-x-6 md:px-32">
     {/* <!-- Left item --> */}
      <div className="flex flex-col space-y-6 md:w-4/5">
        <Image 
        src="/images/image-web-3-desktop.jpg"
         alt="web-3 image"
         width={800}
         height={40}
        className="hidden md:block"
        />
        <Image 
        src="/images/image-web-3-mobile.jpg"
         alt="web-3 image"
         width={500}
         height={40} 
        className="md:hidden"
        />
        <div className="flex flex-col md:flex-row md:space-x-8 ">
        <h1 className="max-w-sm text-5xl font-bold mb-5 text-start md:text-5xl md:max-w-xs md:w-1/2">
          The Bright Future of Web 3.0?
        </h1>
        <div className="space-y-4 text-gray-500 text-start md:w-1/2">
        <p className="font-normal">
          We dive into the next evolution of the web that claims 
          to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?
        </p>
        <button 
        type="button"
        className="bg-red-500 text-gray-900 text-md py-2 px-8 mt-1 font-semibold hover:bg-red-600 cursor-pointer"
        >
        READ MORE
      </button>
      </div>
        </div>
      </div>
      {/* <!-- Right item --> */}
       <div className="max-w-sm flex flex-col text-start mt-12 md:w-sm md:mt-0 bg-black">

        <div className="px-4 space-y-5">
        <h3 className="text-4xl mt-6 font-bold text-amber-400 text-start">
          New 
        </h3>

        <div className=''>
        <h4 className="font-bold text-xl md:text-xl text-white hover:text-amber-400 cursor-pointer">
          Hydrogen VS Electric Cars
          </h4>
          <p className="text-gray-400 pt-2 text-lg md:text-sm">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          
          <div className="py-4 border-b-1 border-gray-500"></div>
          </div>
          

          <div className=''>
          <h4 className="font-bold text-xl md:text-xl text-white pt-3 hover:text-amber-400 cursor-pointer">
           The Downsides of AI Artistry
           </h4>
          <p className="text-gray-400 pt-2 text-lg md:text-sm">
             What are the possible adverse effects of on-demand AI image generation?
          </p>
          
          <div 
          className="py-4 border-b-1 border-gray-500">
          </div>
          </div>

          <div className="pt-4">
          <h4 className="font-bold text-xl md:text-xl text-white  hover:text-amber-400 cursor-pointer">
          Is VC Funding Drying Up?
           </h4>
          <p className="text-gray-400 pt-2 text-lg mb-5 md:text-sm">
             Private funding by VC firms is down 50% YOY. We take a look at what that means.
          </p>
         
          </div>
          </div>
          </div>
       </div>
  </section>
  )
}

export default Hero