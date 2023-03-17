const registerUser = {
    tags: ['Users'],
    description: 'SignUp a new User',
    summary: 'Register a new User',
    requestBody: 
    {
        content : {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                            description: "User valid Email Address",
                            example: "you@email.com",
                        },
                        password: {
                            type: "string",
                            description: "Enter a strong password",
                            example: "project@478",
                        },
                        isAdmin: {
                            type: "boolean",
                            description: "Enter True or False",
                            example: "false",
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
                            email: "you@email.com",
                            password: "project@478",
                        },
                    },
                },
            },
        },
    },
};

const signInUser = {
    tags: ['Users'], 
    summary: "Login a Valid User",
    description: "Sign In a person who is already regsitered",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                            description: "Enter a registered email",
                            example: "you@email.com",
                        },
                        password: {
                            type: "string",
                            description: "Enter an existing Password",
                            example: "###########",
                        },

                    },
                },
            },
        },

    },
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            email: "you@email.com",
                            password: "##########"
                        },
                    },
                },
            },
        },
    },
};



const userRouteDoc = {
    "/api/v1/register" : {
        post: registerUser,
    },
    "/api/v1/login" : {
        post: signInUser,
    }
};



export default userRouteDoc