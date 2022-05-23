const fs = require('fs');
const path = require('path');
const readline = require('readline');

const read_line = readline.createInterface({input:process.stdin, output:process.stdout});

const readableStream = fs.writeFile(path.join(__dirname, 'my_file.txt'), '', function (error) {if (error) throw error;});
readableStream;

read_line.output.write('Type some text, please...\n');


read_line.on('line', function(data)  {
  if (data.trim().toLowerCase() === 'exit') {
    process.stdout.write('Bye!');
    process.exit();
  }
  fs.appendFile(path.join(__dirname, 'my_file.txt'), `${data} `, function (err) {if (err) throw err;});
});

read_line.on('SIGINT', () => {
  process.stdout.write('Bye!');
  process.exit();
});
