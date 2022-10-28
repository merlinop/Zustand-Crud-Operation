import Post from "../../../data/Post"



export default function handler(req,res) {
    res.status(200).json(Post)
}