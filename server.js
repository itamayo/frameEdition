const express = require('express')
const app = express()
const frameExtractor = require('frame-extractor');
const removeParallel = require('./removeParallel');

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/getFrame', function (req, res) {
  var frame = parseInt(req.query.frame);
  frameExtractor.extractFrame('./public/out.webm', "50",frame, './public/images/frame%04d.jpg');
  if (frame>45)
    removeParallel(frame-45,45);
  res.send('ok');
})

app.use(express.static('public'))

app.listen(3000, function () {
  console.log('Server listening on port 3000!')
})
