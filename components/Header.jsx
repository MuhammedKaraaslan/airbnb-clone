import React from 'react'

import Image from 'next/image'

import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md items-center p-5 md:px-10'>
      {/* Left Header */}
      <div className='relative flex h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle Header */}
      <div className='flex rounded-full py-2 md:border-2 md:shadow-sm'>
        <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search' />
        <SearchIcon className='h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mr-2 hidden md:inline-flex' />
      </div>

      {/* Right Header */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex space-x-2 border-2 p-2 rounded-full cursor-pointer'>
            <MenuIcon className='h-6'/>
            <UserCircleIcon className='h-6'/>
        </div>
      </div>
    </header>
  )
}

export default Header