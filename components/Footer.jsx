import React, { useEffect } from 'react'
import useStore from '../store/useStore'





const Footer = () => {

  const post = useStore((state) => state.post)
  const fetchPost = useStore((state) => state.fetchPost)

  useEffect(() => {
    fetchPost()
    
  }, [])

  return (
    <div className='z-[80] absolute bottom-0 h-[40px] bg-black/90 text-white text-2xl w-full flex items-center justify-end px-2'>
      <h1>Total Posts: {post.length}</h1> 
    </div>
  )
}

export default Footer