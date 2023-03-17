import serverError from "../utils/serverError.js";
import Blog from "../models/Blog.js";
import successMsg from "../utils/successMsg.js";
import failureMsg from "../utils/failureMsg.js";
class blogsController
{
    /**
     * @swagger
     * components:
     *     schemas:
     *        Blogs:
     *            type: object
     *            required:
     *               - icon
     *               - title
     *               - body
     *            properties:
     *                id:
     *                   type: string
     *                   descrription: The auto - generated id of blog
     *                icon: 
     *                    type: string
     *                    description: Icon used on blog post
     *                title:
     *                     type: string
     *                     description: Blog's title
     *                body: 
     *                      type: string
     *                      description: Blog's body
     *            example:
     *               id: 640c5757958647a30fdf545c
     *               icon: fa fa-laptop-code
     *               title: Web design
     *               body: it's very important in web development
     * 
     * 
     * 
     */












    // create a Blog
    static async createBlog (req, res)
    {
        const {icon, title, body} = req.body;
        try {
            const newBlog = await Blog.create({icon, title, body});
            const status = 201;
            const msg = "Blog is Created Successfully...";
            const data = newBlog;
            successMsg(res, status, msg, data)
            
        } catch (error) {
            const errorMsg = error.message;
            
            serverError(errorMsg, res)
            
        }

    }
    // get all blogs
    static async getblogs (req, res)
    {
        try {
            const blogs = await Blog.find();
            const status = 200;
            const msg = "All blogs are Displayed....."
            const data = blogs;
            successMsg(res, status, msg, data);
        } catch (error) {
            const errorMsg = error.message;
            
            serverError(errorMsg, res)
            
        }
    }


    // get a single blog by it's ID
    static async getblog (req, res)
    
    {
        const { id } = req.params;
        try {
            const blog = await Blog.findOne({_id: id});
            if(!blog)
            {
                const status = 404;
                const msg = `OOPS! id ${id} was not found`;
                failureMsg(res, status, msg);

            }
            else {
                const status = 200;
                const msg = "Blog Requested is Displayed Below....."
                const data = blog;
                successMsg(res, status, msg, data);

            }
           
        } catch (error) {
            const errorMsg = error.message;
            
            serverError(errorMsg, res)
            
        }
    }

    // update Blog
    static async updateBlog(req, res) 
    {
        const {icon, title, body} = req.body;
        
        const { id } = req.params;
        const _id = id;
        try {
            const blogUpdated = await Blog.findByIdAndUpdate(_id, {icon, title, body}, {new: true});
            res.status(200).json(
                {
                    data: blogUpdated
                }
            )
            
        } catch (error) {
            const errorMsg = error.message;
            
            serverError(errorMsg, res)
            
        }
    }


    // delete a blog

    static async deleteBlog(req, res) 
    {   
        const { id } = req.params;
        const _id = id;
        try {
             await Blog.findByIdAndDelete(_id,);
            res.status(200).json(
                {
                    message : 'Blog was deleted Successfully.....'
                }
            )
            
        } catch (error) {
            const errorMsg = error.message;
            
            serverError(errorMsg, res)
            
        }
    }

}

export default blogsController;