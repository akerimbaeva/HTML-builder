const fs = require('fs');
const path = require('path');
const readableStream = fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
readableStream.on('data', function(chunk) {process.stdout.write(chunk);});

