import { getCardUrl, getCloudinaryPath } from './cloudinary_url';
const ZIP_IMAGE = 'https://cloud.githubusercontent.com/assets/533339/16132231/8a76b7aa-3412-11e6-94da-fde21592b19a.png'
const PDF_IMAGE = 'https://cloud.githubusercontent.com/assets/533339/16132230/8a6b58ec-3412-11e6-95c3-f5c58caeeb96.png'


export function getImageForFileType(type) {
  if (type === 'application/pdf') {
    return getCardUrl(PDF_IMAGE, {type: 'fetch'});
  } else if (type === 'application/zip') {
    return getCardUrl(ZIP_IMAGE, {type: 'fetch'});
  }
}
export function decideDisplayedImage({from, web, file}) {
  let displayedImage;

  switch (from) {
    case 'web':
      displayedImage = getCardUrl(web.thumbnailUrl, {type: 'fetch'});
    break;
    case 'url':
    case 'upload':
      if (file.type === 'image/png') {
        displayedImage = getCardUrl(getCloudinaryPath(file._id, 'files'));
      } else {
        displayedImage = getImageForFileType(file.type)
      }
    break;
    default:
      displayedImage = '';
  }

  return displayedImage;
}
