import create from 'zustand'
import { useState } from 'react'


const url = "http://localhost:3000/api/post"


const useStore = create((set, get) => ({
  post: [],
  fetchPost: async () => {
     const res = await fetch(url)
     const data = await res.json()
     set({post: data})
  },
  searchPost:  (searchval) => {
    const newData =  get().post.filter((item) => {
       return item.title.toLowerCase().includes(searchval) || item.comment.toLowerCase().includes(searchval)})
     set({ post: newData }) 
  },
  addPost: async (title,comment) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ title, comment }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    

  }

}))



export default useStore;


// addPost: async (title, comment) => {
//     const res = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify({title: title, comment:comment}),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     const data = await res.json()
//     console.log(data)
//     set({ post: data })

    

//   }