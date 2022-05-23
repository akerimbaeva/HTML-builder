const fs = require('fs');
const path = require('path');
const result = fs.createWriteStream(path.join(path.join(__dirname, 'project-dist', 'bundle.css')));

fs.readdir(path.join(__dirname, 'styles'), (error, data) => {
  if (error) {throw error;} 
  data.forEach((el) => {
    const extention = path.extname(el);
    if (extention === '.css') {
      const stream = fs.createReadStream(path.join(path.join(__dirname, 'styles'), el));
      stream.pipe(result);
    }
  });
});

