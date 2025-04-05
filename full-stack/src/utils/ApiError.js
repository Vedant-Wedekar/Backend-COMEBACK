class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong", // Because debugging is for losers, right?
        error = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.error = error; // Fixed the typo. You're welcome.
        this.data = null;
        this.success = false;
        
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };