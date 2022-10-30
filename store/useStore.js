import create from 'zustand'



const url = "http://localhost:3000/api/post"

const useStore = create((set) => ({
  post: [],
  fetchPost: async () => { const res = await fetch(url)
    set({ post: await res.json() }) 
  },
  searchText: "",
  searchPost: () => {
   const newPost = post.find((item) => get().itemid == item.id )
   set({ post: newPost })
  }

}))

export default useStore;