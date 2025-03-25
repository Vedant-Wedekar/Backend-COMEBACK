import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from 'fs';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

const UploadonCloudinary = async (file) => {


    try
{
if (!file) {
    throw new Error('No file uploaded');
}
const result = await cloudinary.uploader.upload(file.path, {resource_type: 'auto'});

console.log("File uploaded successfully", result.url);
return result;
}


catch(error){
    fs.unlinkSync(file.path);
    console.log(error);
    return null;
}

//     // Upload a file
//     // const uploadResult = await cloudinary.uploader
//     // Upload an image
//     const uploadResult = await cloudinary.uploader
//     .upload(
//         'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//             public_id: 'shoes',
//         }
//     )
//     .catch((error) => {
//         console.log(error);
//     });
 
//  console.log(uploadResult);}
}
 export {UploadonCloudinary}
// export {UploadonCloudinary}