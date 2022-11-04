const  fs = require('fs');
const path = require('path');

const textFileName = 'text.txt';

const readableStream = fs.createReadStream(path.join(__dirname,'/',textFileName), 'utf-8');
readableStream.on('error',err => {
  console.error(err);
});
readableStream.on('data', chunk => {
  console.log(chunk);
});

