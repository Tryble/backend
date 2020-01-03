const cloudinary = require("cloudinary");
const { apiKey, apiSecret, cloudName } = require("../config");

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

exports.uploads = (file, folder) => {
  return new Promise((resolve, reject) => {
    try {
      cloudinary.uploader.upload(
        file,
        result => {
          resolve({
            url: result.url,
            id: result.public_id
          });
        },
        {
          resource_type: "auto",
          folder
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};
