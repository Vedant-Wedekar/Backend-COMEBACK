class ApiResponse {
    constructor(statusCode, message = "Success", data) {
        this.message = message;
        this.success = statusCode >= 200 && statusCode < 300;
        this.statusCode = statusCode;
        this.data = data;
    }
}

export { ApiResponse };