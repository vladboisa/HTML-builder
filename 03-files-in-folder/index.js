const  fs = require('fs');

const path = require('path');

const secretFolderName = 'secret-folder';
const secretFolderPath = path.join(__dirname,'/',secretFolderName);

fs.readdir(secretFolderPath,{withFileTypes:true}, (err,files)=>{
  if (err) {
    console.error(err);
  } else
    for (const file of files) {
      const secretFolderFilePath = path.join(secretFolderPath,`/${file.name}`);
      if (!file.isDirectory()) {
        const fileName = file.name.split('.').slice(0,1).join();
        const fileExtension = path.extname(secretFolderFilePath,fileName).substring(1);
        fs.stat(secretFolderFilePath,(err,stats) => {
          if (err) {
            console.error(err);
          } else
            console.log(`${fileName} - ${fileExtension} - ${Math.floor(stats.size/1024)} kbytes`);
        });
      }

    }
});