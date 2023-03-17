import mongoose from "mongoose";
 
const blogSchema = new mongoose.Schema
(
    {
        icon:
        {
            type: String,
            required: true
            
        },
        title:
        {
            type: String,
            required: true,
            unique: true,
        },
        body:
        {
            type: String,
            required: true,
            unique: true,
        }, 
        createdAt:
        {
            type: Date,
            default: Date.now
        }
        
    }
)

const Blog = mongoose.model("Blog", blogSchema);

export default Blog