import registerController from "../controllers/registerController.js"
import blogsController from "../controllers/blogsController.js";
import blogRouteDoc from "../routes/blog.doc.js";
import userRouteDoc from "../routes/user.doc.js";
const swaggerDocumentation =
{
    openapi: '3.0.0',
    info:
    {
        title: "Terence's Capstone Project APIs",
        version: '1.0.0',
        description: 'My project  API provides developers with access to a powerful set of tools and functionality that can be integrated seamlessly into their own software applications,With easy-to-use endpoints and comprehensive documentation, My API enables developers to quickly and easily leverage the power of my portfolio to enhance their own software products and services.'
    },
    servers: [
        {
            url:'http://localhost:4000',
            description: 'Capstone Project Local host'
        }
    ],
    tags :
    [
        {
            name: 'Blogs',
            description: 'Blogs Routes'
        },
        {
            name: 'Users',
            description: 'User Registration and Sign In'
        }
    ],
    paths:
    {
        ...blogRouteDoc,
        ...userRouteDoc

    }

};


export default swaggerDocumentation 