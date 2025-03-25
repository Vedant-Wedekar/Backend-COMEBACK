import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuring Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const UploadonCloudinary = async (file) => {
    try {
        if (!file) {
            throw new Error('No file uploaded');
        }
        
        const result = await cloudinary.uploader.upload(file.path, { resource_type: 'auto' });
        console.log("File uploaded successfully", result.url);
        
        return result;
    } catch (error) {
        fs.unlinkSync(file.path);
        console.error(error);
        return null;
    }
};

export { UploadonCloudinary };