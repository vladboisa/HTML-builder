const  fs = require('fs');
const path = require('path');
const sourceFolderName = 'files';
const sourceFolderPath = path.join(__dirname,'/',sourceFolderName);
console.log('🚀 ~ file: index.js ~ line 5 ~ sourceFolderPath', sourceFolderPath);
const destinationFolderName = 'files-copy';
const destinationFolderPath = path.join(__dirname,'/',destinationFolderName);
console.log('🚀 ~ file: index.js ~ line 7 ~ destinationFolderPath', destinationFolderPath);
if (!fs.exists(destinationFolderPath,exists =>{
  exists ? true : false;
})) {
  fs.mkdir(destinationFolderPath, {recursive:true},err => {
    if (err) {
      return console.error(err);
    }
  });
}
fs.cp(sourceFolderPath,destinationFolderPath,{recursive:true}, err => {
  if (err) {
    return console.error(err);
  }
})