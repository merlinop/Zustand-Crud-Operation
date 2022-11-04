import React,{useState} from 'react'
import useStore from '../store/useStore'
import Router from 'next/router'
import Link from 'next/link'

const AddPost = () => {

    const [title, setTitle] = useState("")
    const [comment, setComment] = useState("")
    const [issubmited, setIsSubmited] = useState(false)
    
    const addPost = useStore((state) => state.addPost)

    const url = "http://localhost:3000/api/post"

    const postWays = async (title,comment) => {
        const res = await fetch(url, {
          method:'POST',
          body: JSON.stringify({title, comment}),
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        const data = await res.json()
        console.log(data)
    }

    const handleSubmit = (title,comment) => {
      postWays(title,comment)
      // setIsSubmited((prev) => !prev)
      
    }


  return (
      <>
    { !issubmited &&( <div className='w-full h-[60vh] overflow-y-scroll z-10'>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col p-4">
          <label className='text-xl font-semibold text-gray-700 mb-1'> Topic: </label>
          <input 
                type="text" 
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                required
                className='w-1/2 border-2 rounded-md p-2 border-gray-300'
                placeholder='Type title here...'
                />
          <label className='text-base font-semibold  text-gray-700 mt-3'> Comment:</label>
         <textarea 
              name="comment"
               id="" 
               cols="20" 
               rows="10"
               required 
               placeholder='Type comment here..' 
               className='mt-2 rounded-lg p-2 border-2 border-gray-300'
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               ></textarea>

          <button className='mt-5 py-2 px-4 bg-gray-600 text-lg text-white font-semibold rounded-lg hover:text-black/50 hover:opacity-80 w-1/2 place-self-center' onClick={() => handleSubmit(title,comment)}>
            SUBMIT
          </button>


        </form>
    </div>)}

    {
      issubmited && (
        <div className='p-4'>
          <h1 className='text-xl font-medium tracking-wider'> Post Added Successfully...</h1>
          <Link href="/" >
            <p className='cursor-pointer text-base text-red-600 mt-2 hover:opacity-60 active:text-blue-500'>return to HomePage?</p>
          </Link>
        </div>
      )
    }
    </>
  )
}

export default AddPost