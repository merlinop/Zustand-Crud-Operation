import create from 'zustand'
import { useState } from 'react'


const url = "http://localhost:3000/api/post"


const useStore = create((set, get) => ({
  post: [],
  fetchPost: async () => {
     const res = await fetch(url)
     set({ post: await res.json() }) 
  },
  searchText: "",
  searchPost:  (searchval) => {
    const newData =  get().post.filter((item) => {
       return item.title.toLowerCase().includes(searchval) || item.comment.toLowerCase().includes(searchval)
    }
     )
     set({ post: newData }) 

  }

}))



export default useStore;
