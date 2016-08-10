import { Cloudinary } from 'cloudinary-core';

const cloudinary = Cloudinary.new({
  cloud_name: 'tdb'
});

const url = cloudinary.url('sample', {
  width: 100,
  crop: 'fit'
});

console.log(url)

export default cloudinary;
