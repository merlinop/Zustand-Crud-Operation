import Head from 'next/head'
import React, { useEffect,useState } from 'react'
import useStore from '../store/useStore'
import Link from 'next/link'
import Router from 'next/router'
import Header from './Header'


const Blog = () => {

  
  const post = useStore((state) => state.post)
  const fetchPost = useStore((state) => state.fetchPost)
  // const SearchPost = useStore((state) => state.SearchPost)

  useEffect(() => {
    fetchPost()
    
  }, [])



  return (
        <>
         <div className='w-full  h-[60vh] md:h-[60vh] overflow-y-scroll z-[10] scroll-smooth'>
      <Head> 
          <title>HomePage</title>
      </Head>
      {/* RENDER FROM API AND DISPLAY */}
      {post.length && post.map((post,id) => (
        <div key={id} className="flex flex-col py-2 px-2 items-start ">
          <Link href={`/blog/${id}`}>
           <h1 className='text-2xl font-bold tracking-wide cursor-pointer hover:opacity-60 ' >{post.title}</h1>
          </Link>
          
           <p className='text-base w-3/4 mt-3 ml-2 text-gray-700'>{(post.comment).slice(0,85)}...<span className='font-bold text-xs text-blue-400 cursor-pointer hover:text-red-600 whitespace-nowrap' onClick={() => Router.push(`/blog/${post.id - 1}`)}>Continue reading</span> </p>
          
           <span className='w-full border-b border-[2px] mt-4 border-gray-900'></span>
        </div>
      ))}

        {/* if CONTENT IS EMPTY */}
      {
        !post.length && (
          <div className='flex flex-col font-bold items-center w-full'>
            <h1 className='text-2xl mt-7'>No content found</h1>
            <Link href={"/"}>
                <p className='cursor-pointer mt-4 text-red-600 text-sm hover:text-blue-700'>Return back to HomePage</p>
            </Link>
          </div>
        )
      }

    </div>
        </>
  )
}

export default Blog


