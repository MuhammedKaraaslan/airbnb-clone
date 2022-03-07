import React from 'react'

import Image from 'next/image'

function Header() {
  return (
      <header>
          {/* Left Header */}
          <div className='relative flex items-center h-10 cursor-pointer'>
              <Image
                src='https://links.papareact.com/qd3'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
              />
          </div>

          {/* Middle Header */}
          <div></div>

          {/* Right Header */}
          <div></div>
      </header>
  )
}

export default Header