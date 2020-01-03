const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";
const secret = process.env.JWT_SECRET || "secret";
const cloudName = process.env.CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

module.exports = {
  dbUrl,
  port,
  env,
  secret,
  cloudName,
  apiKey,
  apiSecret
};
