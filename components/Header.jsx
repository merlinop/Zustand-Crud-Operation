import React from 'react'
import Link from 'next/link'



const Header = () => {
  return (
       <div className='flex flex-col md:flex-row w-full p-2 px-5 items-center md:justify-between bg-gray-700'>
            <div>
                <input 
                    type="text"
                    placeholder='Search Post'
                    className='border-2 border-black/50 rounded-md p-2'
                     />
            </div>
            <ul className='flex items-center justify-center w-full gap-12 md:gap-6 duration-100 ease-in'>
                <Link href={"/blog"}>
                    <li className='cursor-pointer font-bold mt-2 text-white hover:opacity-50'>HOME</li>
                </Link>
                <Link href={"/addpost"}>
                    <li className='cursor-pointer font-bold mt-2 text-white hover:opacity-50'>POST</li>
                </Link>
                <Link href={"/about"}>
                    <li className='cursor-pointer font-bold mt-2 text-white hover:opacity-50'>ABOUT</li>
                </Link>
            </ul>
        </div>
  )
}

export default Header