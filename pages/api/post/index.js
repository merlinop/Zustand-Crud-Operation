import Post from "./data"



export default function handler(req,res) {
    // handle Get request
    if (req.method === 'GET') {
        res.status(200).json(Post)
    }
    // handle Post request
    else if(req.method === 'POST') {

        const comment = req.body.comment
        const title = req.body.title
        const id = Post.length + 1
        
       
        const newPost = {comment,title,id}
       
        
        Post.push(newPost)
        res.status(201).json(newPost)
        
    }
}