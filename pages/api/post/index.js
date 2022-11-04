import Post from "./data"



export default function handler(req,res) {
    if (req.method === 'GET') {
        res.status(200).json(Post)
    }
    else if(req.method === 'POST') {

        const comment = req.body.comment
        const title = req.body.title
        const id = Post.length + 1
        
        console.log(id)
        const newPost = {comment,title,id}
        console.log(Post)
        
        Post.push(newPost)
        res.status(201).json(newPost)
    }
}