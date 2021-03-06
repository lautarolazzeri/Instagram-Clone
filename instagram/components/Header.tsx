import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
              src="https://links.papareact.com/jjm"
              layout='fill'
              objectFit='contain'
            />
        </div>

        <div>
          <div>
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search" />
        </div>


      </div>
    </div>
  )
}

export default Header
