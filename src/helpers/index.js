import titleize from 'titleize';
import * as moment from 'moment';

export function isValidDate(date) {
  return moment(date).isValid();
}

export function formatDate(date, formatString) {
  return moment(date).format(formatString);
}
export const rentalType = isShared => isShared ? 'shared' : 'entire'

export const toUpperCase = value => value ? titleize(value) : ''

export const pretifyDate = date => moment(date).format('MMM Do YY')

export const getRangeOfDates = (startAt, endAt, dateFormat = 'Y/MM/DD') => {
  const tempDates = [];
  const mEndAt = moment(endAt);
  let mStartAt = moment(startAt);

  while (mStartAt < mEndAt) {
    tempDates.push(mStartAt.format(dateFormat));
    mStartAt = mStartAt.add(1, 'day');
  }

  tempDates.push(mEndAt.format(dateFormat));

  return tempDates;
}
export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
export function readURL(file) {
  const reader = new FileReader();
    
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);

    reader.onerror = () => {
      reader.abort();
      reject(new DOMException('Problem parsing input file'));
    };
  });
    
}

export async function blobUrlToBlob(blobUrl) {
  return fetch(blobUrl)
    .then((res) => res.blob());
}

export function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else
    byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type: mimeString});
}
