
// import { v2 as cloudinary } from 'cloudinary';

// // Configuring Cloudinary
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const UploadonCloudinary = async (file) => {
//     try {
//         if (!file || !file.path) {
//             throw new Error("Invalid file: Missing path");
//         }

//         console.log("Uploading file to Cloudinary:", file.path);
        
//         const result = await cloudinary.uploader.upload(file.path, { resource_type: 'auto' });
//         console.log("File uploaded successfully", result.url);
        
//         return result;
//     } catch (error) {
//         console.error("Cloudinary Upload Error:", error.message);
//         return null;  // Do not delete file, just return null
//     }
// };

// export { UploadonCloudinary };

// export { UploadonCloudinary };

import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

// Configuring Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const UploadonCloudinary = async (filePath) => {
    try {
        if (!filePath) {
            throw new Error('Invalid file: Missing path');
        }

        console.log("Uploading file to Cloudinary:", filePath);
//         console.log("Cloudinary Configuration:");
// console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("API Key:", process.env.CLOUDINARY_API_KEY ? "Exists" : "Missing");
// console.log("API Secret:", process.env.CLOUDINARY_API_SECRET ? "Exists" : "Missing");

        
        const result = await cloudinary.uploader.upload(filePath, { resource_type: 'auto' });
        console.log("File uploaded successfully:", result.url);
        
        return result;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error.message);
        return null;  // Do not delete file, just return null
    }finally {
        // Remove file from local storage after upload attempt
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};

export {  UploadonCloudinary };
