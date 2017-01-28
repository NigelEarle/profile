const AWS = require('aws-sdk');
const Promise = require('bluebird');
const s3 = new AWS.S3();

Promise.promisifyAll(s3);

function uploadToS3(image) {
  const imageBuffer = decodeBase64Image(image);
  return new Promise((resolve, reject) => {
    const params = {
      Key:'blog-images/' + Date.now() ,
      ContentLength: imageBuffer.length,
      ContentType: 'image/jpg',
      ACL: 'public-read',
      Bucket: 'personal-profile',
      Body: imageBuffer.data

    };
    s3.uploadAsync(params)
    .then(output => {
      console.log('FINISH UPLOADING:', output.Location);
      resolve(output.Location);
    })
    .catch(err => {
      reject(err);
    });
  });
}

function decodeBase64Image(dataString) {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}

module.exports = uploadToS3;