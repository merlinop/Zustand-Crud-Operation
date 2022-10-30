import { useRouter } from 'next/router'
import useStore from '../../store/useStore'
import React,{ useEffect, useState } from 'react'
import Link from 'next/link'



const Post = () => {
    
    useEffect(() => {
        fetchPost()
    }, [])
    
    const router = useRouter()
    const newid = Number(router.query.post)
   
  const posts = useStore((state) => state.post)
  const fetchPost = useStore((state) => state.fetchPost)
  const newPost = posts[newid]
  console.log(newPost)

  return (
     <>
       {newPost && (
        <div className='py-12 px-2'>
            <h1 className='text-3xl font-bold tracking-wide' >{newPost.title}</h1>
            <p className='text-xl w-3/4 mt-3 text-gray-600'>{newPost.comment}</p>
            <button className='mt-5 text-xl font-bold text-white border-2 px-12 rounded-lg bg-gray-700 py-2 hover:text-gray-700 hover:bg-white border-transparent duration-200 ease-in '> Delete post</button>

            <Link href="/blog">
            <p className='cursor-pointer mt-5 text-red-700 hover:opacity-25'>
                return to home page?
            </p>
            </Link>
        </div>
       )}
    </>

  )
}
export default Post



export async function getServerSideProps() {

    return {
      props: {}, // will be passed to the page component as props
    }
  }