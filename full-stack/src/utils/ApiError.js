class ApiError extends Error {
    constructor(
        statusCode,
        message="something went wrong ",
        error = [],
        stack=""
    )
{

    super(message);
    this.statusCode = statusCode;
    this.error = this.error;
    this.data = null
    this.message = message;
    this.success = false;
    if(stack){
        this.stack = stack;
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
    // this.stack = stack;

}
}

export {ApiError} 