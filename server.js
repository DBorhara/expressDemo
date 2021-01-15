const express = require('express');

const app = express();
//app.post
//app.delete
//app.put

app.get(['/apple', '/ale'], (req, res, next) => {
  res.send('Apple or Ale?');
});

app.get('/whoa/:numbers', (req, res, next) => {
  res.send(`I know right. That ${req.params.numbers} is so fetch  `);
});

app.get('/reverseWord/:word', (req, res, next) => {
  let s = req.params.word;
  s = s.split('').reverse().join('');
  res.send(`Hello ${s}`);
});

app.get('/:firstname/:lastname', (req, res, next) => {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});
app.get('*', (req, res, next) => {
  res.status(404).send(`You've reached the end of the line`);
});

app.listen(8081, () => {
  console.log('Hey, this is D3pak');
});
