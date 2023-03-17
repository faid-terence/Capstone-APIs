
const lisBlogs =
{
    tags: ['Blogs'],
    summary: 'Displays all Blogs',
    description: 'Displays all Blogs',

    responses :
    {
        200: {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            icon: 'fa fa-laptop-code',
                            title: 'Software Development',
                            body: 'Positive Impact to our Community'
                        },
                    },
                },
            },
        },
    },
};

const CreateBlog = {
    tags: ['Blogs'],
    summary: 'Create a new Blog',
    description: 'Create a new Blog',
    requestBody:
    {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        icon: {
                            type: "string",
                            description: "Icon to use on blogPost",
                            example: 'fa fa-laptop-code',

                        },
                        title: {
                            type: "string",
                            description: "Blog's Title",
                            example: 'Software Development',

                        },
                        body: {
                            type: "string",
                            description: "Blog's Body",
                            example: "Positive impact to our Community",
                        },
                    },
                },
            },
        },
    },
    responses : {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            icon: "fa fa-laptop-code",
                            title: "Software Development",
                            body: " Positive Impact to our community"
                        },
                    },
                },
            },
        },
    },
};
const getBlogByPathId ={
    tags: ['Blogs'],
    summary: 'Get a Blog by its ID',
    description: 'Display a Blog by its ID',
    parameters: [
        {
            in: "path",
            name: "id",
            description: "Blog ID",
            type: "string",
            example: "640c5757958647a30fdf545a"
        
        }
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json" : {
                    schema: {
                        type: "object",
                        example: {
                            
                                _id: "640dc171805368ffa5aedf6e",
                                icon: "fa fa-robot",
                                title: "hello1340",
                                body: "This is terence",
                                createdAt: "2023-03-12T12:11:29.246Z",
                                __v: 0
                              
                        }
                    }
                }
            }
        }
    }
}


const deleteBlogByPathId = {
    tags : ['Blogs'],
    summary: 'Delete a Single Blog',
    description: 'Delete a Blog by i;s ID',
    parameters: [
        {
            in: "path",
            name: "id",
            description: "Blog ID",
            type: "string",
            example: "640c5757958647a30fdf545a"
        }
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json" : {
                    schema: {
                        type: "object",
                        example: {
                            
                                _id: "640dc171805368ffa5aedf6e",
                                icon: "fa fa-robot",
                                title: "hello1340",
                                body: "This is terence",
                                createdAt: "2023-03-12T12:11:29.246Z",
                                __v: 0
                              
                        }
                    }
                }
            }
        }
    }
}



const updateBlogByPathId = {
    tags:['Blogs'],
    summary: 'Upadte a Single Blog',
    description: 'Update a Single Blog',
    parameters: [
        {
            in: "path",
            name: "id",
            description: "Blog ID",
            type: "string",
            example: "640c5757958647a30fdf545a"
        }
    ], 
    requestBody: {
        required: "true",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    example: {
                        
                            icon: "fa fa-laptop-code",
                            title: "Software Development",
                            body: "Positive Impact to our Community"
                          

                    }
                }
            }
        }
    },
    responses : {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            icon: "fa fa-laptop-code",
                            title: "Software Development",
                            body: " Positive Impact to our community"
                        },
                    },
                },
            },
        },
    },
}





const blogRouteDoc = {
    "/api/v1/blogs" : {
        get: lisBlogs,
        post: CreateBlog,
    },
    "/api/v1/blogs/{id}" : {
        get: getBlogByPathId,
        put: updateBlogByPathId,
        delete: deleteBlogByPathId,
    }
};


export default blogRouteDoc