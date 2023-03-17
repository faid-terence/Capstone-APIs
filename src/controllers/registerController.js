import serverError from "../utils/serverError.js";
import successMsg from "../utils/successMsg.js";
import failureMsg from "../utils/failureMsg.js";
import User from "../models/User.js"
import bcrypt from "bcrypt"
const registerController = async (req, res) =>
{ 
    const {email, password, isAdmin} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({email, password: hashedPassword, isAdmin});
        const status = 201;
        const msg = "User is Created Successfully...";
        const data = newUser;
        successMsg(res, status, msg, data)
         
    } catch (error) {
        if(error.code === 11000)
        {
            return res.status(403).json(
                {
                    message: 'Email is already registered'
                }
            )
        }
        const errorMsg = error.message;
            
        serverError(errorMsg, res)
        
        
    }

}

export default registerController