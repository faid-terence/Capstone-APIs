import jwt from "jsonwebtoken";
const verifyIsAdmin = (req, res, next) =>
{
    // check if the request has an authoriztaion header

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json(
            {
                message: 'No Token Provided'
            }
        )
    }
    else
    {
        // Getting token
        const token = authHeader.split(' ') [1];

        
         try {
            // verify if token is valid
            const verifiedUser = jwt.verify(token, process.env.SECRET, {expiresIn:'1d'});
            if(!verifiedUser.isAdmin)
            {
                return res.status(401).json(
                    {
                        message: 'User not authorized'
                    }
                )
            }
           next();
            
         } catch (error) {
            res.status(500).json(
                {
                    message:error.message
                }
            )
            
         }

    }
}

export default verifyIsAdmin