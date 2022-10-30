import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useStore from '../store/useStore'


const Header = () => {

    const [searchpost, setSearchPost] = useState("")
    const searchPost = useStore((state) => state.searchPost)
    const fetchPost = useStore((state) => state.fetchPost)


    useEffect(() => {
        searchPost(searchpost)
        
      }, [searchpost])

      const handleSubmit = (e) => {
        e.preventDefault()
        
        setSearchPost("")
      }

  return (
       <div className='flex flex-col md:flex-row w-full p-2 px-5 items-center md:justify-between bg-gray-700'>
            <div>
                <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='Search Post'
                    className='border-2 border-black/50 rounded-md p-2'
                    value={searchpost}
                    onChange={(e) => setSearchPost(e.target.value)}
                     />
                     </form>
               </div>
            <ul className='flex items-center justify-center w-full gap-12 md:gap-6 duration-100 ease-in'>
                <Link href={"/blog"}>
                    <li className='cursor-pointer font-bold mt-2 text-white hover:opacity-50'>HOME</li>
                </Link>
                <Link href={"/addpost"}>
                    <li className='cursor-pointer font-bold mt-2 text-white hover:opacity-50'> ADD POST</li>
                </Link>
                <Link href={"/about"}>
                    <li className='cursor-pointer font-bold mt-2 text-white hover:opacity-50'>ABOUT</li>
                </Link>
            </ul>
        </div>
  )
}

export default Header