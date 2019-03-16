const app = require('express')();
const cors = require('cors');
// app.use()
var data = [
  {
    label: 'sample',
    next: 'test'
  }
];
app.use(cors());
app.get('/get', (req, res) => {
  return res.json(data);
});

app.listen(3100, () => {
  console.log('listen == 3100');
});
