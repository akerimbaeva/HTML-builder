const fs = require('fs');
const path = require('path');
const n = 1000;


fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (error, file) => {
  if (error) console.log(error);
  file.forEach((el) => {
    let extention = path.extname(el.name);
    let nameOfFile = path.basename(el.name, extention);
    
    if (el.isFile() === true) {
      fs.stat(`${path.join(__dirname, 'secret-folder')}/${el.name}`, (error, data) => {
        if (error) {throw error;}
        let message = `${nameOfFile} - ${extention} - ${data.size /n}kb \n`;
        process.stdout.write(message);
      });
    }
  });
});