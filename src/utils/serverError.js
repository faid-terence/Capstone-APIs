const serverError = (errorMsg, res) =>
{
    res.status(500).json(
        {
            message:errorMsg
        }
    )
}

export default serverError