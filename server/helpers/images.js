const AWS = require('aws-sdk');
const s3 = new AWS.S3();

function uploadToS3(image, cb) {
  var imageBuffer = decodeBase64Image(image);
  var params = {
    Key:'blog-images/' + Date.now() ,
    ContentLength: imageBuffer.length,
    ContentType: 'image/jpg',
    ACL: 'public-read',
    Bucket: 'personal-profile',
    Body: imageBuffer.data

  };
  s3.upload(params, function(err, output) {
    if(err) throw err;
    console.log('FINISH UPLOADING:', output.Location);
    return cb(output.Location)
  });
}

function decodeBase64Image(dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}

module.exports = uploadToS3;