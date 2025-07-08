import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    // <!-- Feature section -->
   <section id="Features">
    {/* <!-- flex container --> */}
     <div className="container flex flex-col py-8 px-6 mx-auto md:px-32 md:space-x-8 md:flex-row md:1/3">
      
      {/* <!-- item container 1 --> */}
      <div className="flex flex-row space-x-6 space-y-8 md:w-1/3 md:flex">
        {/* <!-- Left item --> */}
      <Image src="/images/image-retro-pcs.jpg" 
      alt="Retro pcs illustration"
         width={100}
         height={40}
      className="h-31 md:max-h-28 md:mt-1"
      />
      {/* <!-- Right item --> */}
      <div className="flex flex-col space-y-2 md:space-y-1.5">
      <h3 className="text-orange-600 font-bold text-3xl md:py-0">
        01
      </h3>
      <h4 className="font-bold text-[19px] md:text-lg hover:text-orange-600 cursor-pointer">
        Reviving Retro PCs
      </h4>
      <p className="text-gray-600 max-w-65 sm:text-lg md:text-sm">
        What happens when old PCs are given modern upgrades?
      </p>
      </div>
      </div>

      {/* <!-- item container 2--> */}
      <div className="flex flex-row space-x-6 space-y-8 md:w-1/3 md:flex">
        {/* <!-- Left item --> */}
      <Image src="/images/image-top-laptops.jpg" 
      alt="top laptops illustration"
         width={100}
         height={40}
      className="h-31 md:max-h-28 mt-1"
      />
      {/* <!-- Right item--> */}
      <div className="flex flex-col space-y-2 md:space-y-1.5">
      <h3 className="text-orange-600 font-bold text-3xl">
        02
      </h3>
      <h4 className="font-bold text-[19px] md:text-lg hover:text-orange-600 cursor-pointer">
         Top 10 Laptops of 2022
      </h4>
      <p className="text-gray-600 max-w-65 sm:text-lg md:text-sm">
        Our best picks for various needs and budgets.
      </p>
      </div>
      </div>

      {/* <!-- item container 3--> */}
      <div className="flex flex-row space-x-6 space-y-8 md:w-1/3 md:flex">
        {/* <!-- Left item --> */}
      <Image src="/images/image-gaming-growth.jpg"
       alt="Game growth pic"
         width={100}
         height={40}
      className="h-31 md:max-h-28 mt-1"
      />
      {/* <!-- Right item --> */}
      <div className="flex flex-col space-y-2 md:space-y-1.5">
      <h3 className="text-orange-600 font-bold text-3xl">
        03
      </h3>
      <h4 className="font-bold text-[19px] md:text-lg hover:text-orange-600 cursor-pointer">
         The Growth of Gaming
      </h4>
      <p className="text-gray-600 max-w-65 sm:text-lg md:text-sm ">
        How the pandemic has sparked fresh opportunities.
      </p>
      </div>
      </div>

     </div>

   </section>
  )
}

export default Feature