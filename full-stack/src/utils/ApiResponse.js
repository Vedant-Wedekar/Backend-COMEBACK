class ApiResponse  {
    constructor(statusCode, message="success", data) {

        this.message = message;
        this.success = statusCode >= 200 && statusCode < 300;
        this.statusCode = statusCode;
        this.data = data;
    
    }
}