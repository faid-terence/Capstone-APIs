import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import serverError from "../utils/serverError.js";
import successMsg from "../utils/successMsg.js";
import failureMsg from "../utils/failureMsg.js";
import User from "../models/User.js";

const loginController = async (req, res ) =>
{
    // Ask for email and password 
    const {email, password} = req.body;
    try {
        // find user with email

        const user = await User.findOne({email});
        // check if the user exists or not

        if(!user) 
        {
            return res.status(401).json(
                {
                    message: "Invalid Credentials.."
                }
            )
        }
        else
        {
            // check password
            const comparedHashedPassword = await bcrypt.compare(password, user.password);
            if(!comparedHashedPassword)
            {
                return res.status(401).json(
                    {
                        message:"Invalid Credentials.."
                    }
                )
            }
            else{
                const token = jwt.sign({isAdmin: user.isAdmin}, process.env.SECRET, {expiresIn:'1d'})
               
                return res.status(200).json(
                    {
                        data: 
                        {
                            email: user.email,
                            isAdmin: user.isAdmin
                        },
                        token:token
                        
                    }
                )
                

               
            }
        }
        
    } catch (error) {
        const errorMsg = error.message;
            
        serverError(errorMsg, res)
        
    }

}

export default loginController