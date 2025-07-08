"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="relative container mx-auto mt-4 px-6 md:mt-12 md:px-32">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-4">
          <Image src="/images/logo.svg" alt="Logo" width={50} height={50} />
        </div>

        {/* Desktop menu */}
        <div className="hidden space-x-7 md:flex font-medium">
          <Link href="#" className="hover:text-red-400">Home</Link>
          <Link href="#" className="hover:text-red-400">New</Link>
          <Link href="#" className="hover:text-red-400">Popular</Link>
          <Link href="#" className="hover:text-red-400">Trending</Link>
          <Link href="#" className="hover:text-red-400">Categories</Link>
        </div>

        {/* Mobile menu icon (hamburger) */}
        {!menuOpen && (
          <button onClick={toggleMenu} className="block md:hidden mt-4 focus:outline-none">
            <Image
              src="/images/icon-menu.svg"
              alt="Open menu"
              width={40}
              height={40}
            />
          </button>
        )}
      </div>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <>
          {/* Slide-out menu */}
          <div className="absolute top-0 right-0 w-2/3 min-h-screen bg-white shadow-lg z-50
           flex flex-col pt-8 px-8 space-y-10 text-lg font-semibold 
           transition duration-300 ease-in-out">
            {/* Close icon inside the menu */}
            <div className="flex justify-end mb-20">
              <button onClick={toggleMenu} className="focus:outline-none">
                <Image
                  src="/images/icon-menu-close.svg"
                  alt="Close menu"
                  width={35}
                  height={35}
                />
              </button>
            </div>

            {/* Menu links */}
            <Link href="#" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Home</Link>
            <Link href="#" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">New</Link>
            <Link href="#" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Popular</Link>
            <Link href="#" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Trending</Link>
            <Link href="#" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Categories</Link>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar