const  fs = require('fs');
const path = require('path');
const readline = require('readline');

const textFileName = 'text.txt';
let sentence = '';

const writableStream = fs.createWriteStream(path.join(__dirname,'/',textFileName), 'utf-8');
writableStream.on('error', err=> {
  console.error(err);
});
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Пожалуйста, введите текст:'
});
rl.prompt();
rl.on('line', line => {
  switch (line.trim()) {
  case 'exit':
    rl.close();
    break;
  default:
    sentence = line + '\n';
    writableStream.write(sentence);
    rl.prompt();
    break;
  }
}).on('close', ()=> {
  writableStream.end();
  writableStream.on('finish', () => {
    console.log('\nСпасибо, до скорой встречи!');
  });
});
