import Post from "../../../data/Post"



export default function handler(req,res) {
    if (req.method === 'GET') {
        res.status(200).json(Post)
    }
    else if(req.method === 'POST') {

        const comment = req.body.comment
        const title = req.body.title
        const id = Date.now()
        
        const newPost = {comment,title,id}
        console.log(Post)
        
        Post.push(newPost)
        req.status(200).json(Post)
    }
}