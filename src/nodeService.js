const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const formidable = require('formidable');
// app.use()
var data = [
  {
    label: 'sample',
    next: 'test'
  }
];
app.use(cors());
app.use(bodyParser.json());
app.get('/get', (req, res) => {
  return res.json(data);
});
app.post('/samp1', (req, res) => {
  console.log('request received ==> ', req);
  console.log('request body received ==> ', req.body);
  res.json({ status: 'success' });
});
app.post('/file', (req, res) => {
  console.log('request body received ==> ', req.body);
  console.log('request received ==> ', req);
  req.on('data', data => {
    console.log(data);
    console.log(data.toString());
  });
  req.on('end', () => {
    // res.send('ok');
    res.json({ status: 'success in file sending' });
  });
  // new formidable.IncomingForm().parse(req, (err, fields, files) => {
  //   if (err) {
  //     console.error('Error', err);
  //     throw err;
  //   }
  //   console.log('Fields', fields);
  //   console.log('Files', files);
  //   files.map(file => {
  //     console.log(file);
  //   });
  // });
});

app.listen(3100, () => {
  console.log('listen == 3100');
});
