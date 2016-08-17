import cloudinary from '../lib/cloudinary';

const Meteor = {
  settings: {
    public: {
      cloudinary: {
        s3MappingFolder: 's3-staging'
      }
    }
  }
}

// Get cloudinary path given an _id and a mongo collection (Using CFS)
export function getCloudinaryPath(imageId, collection = 'images') {
  return imageId ? `${Meteor.settings.public.cloudinary.s3MappingFolder}/${collection}/${imageId}` : false;
}

// Get the URL to cloudinary with parameters to fetch a card (600x400, etc...)
// If it is from web (and not from cloudinary itself) must add { type: 'fetch'} to customOptions
export function getCardUrl(cloudinaryPath, customOptions) {
  if (cloudinaryPath) {
    let options = {
      width: 600,
      height: 400,
      crop: 'fill',
      gravity: 'center',
      ...customOptions
    };
    return cloudinary.url(cloudinaryPath, options);
  }
  return 'http://placehold.it/600x400';
}
