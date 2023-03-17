
const failureMsg = (res, status, msg) =>
{
    res.status(status).json(
        {
            message: msg
            
        }
    )


}

 

export default failureMsg