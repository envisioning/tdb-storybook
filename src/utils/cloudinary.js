
// Get cloudinary path given an _id and a mongo collection (Using CFS)
export function getCloudinaryPath(imageId, collection = 'images') {
  return '';
}

// Get the URL to cloudinary with parameters to fetch a card (600x400, etc...)
// If it is from web (and not from cloudinary itself) must add { type: 'fetch'} to customOptions
export function getCardUrl(cloudinaryPath, customOptions) {
  return 'http://placehold.it/600x400';
}
