import { Cloudinary } from 'cloudinary-core';

const cloudinary = Cloudinary.new({
  cloud_name: 'envisioning'
});

export default cloudinary;
