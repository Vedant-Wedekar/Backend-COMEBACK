const asyncHandler = () =>async (req, res, next) =>{
    try{
        await fn(req, res, next)
    }
    catch(error){
        res.send(err.code || 500).json({message:error.message,success:false})
        next(error)
    }
}
    export {asyncHandler}

        
