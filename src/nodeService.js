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
app.get('/getParkings', (req, res) => {
  var dt = {
    GATEB: [
      {
        parking_id: 'acad4568-f613-4be5-ab02-cdca67af59a1',
        org_name: null,
        branch: null,
        identifier1: 'GATEB',
        identifier2: 'WING-A',
        identifier3: '19.0',
        identifier4: null,
        identifier5: null,
        type: 'Regular',
        category: null,
        status: 'ASSIGN',
        created_ts: '2019-03-30T16:14:38.538Z',
        last_updated_ts: null,
        created_by: null,
        last_updated_by: null,
        assignments: ['80ada263-e9ba-4854-9557-88ab3758034a'],
        original_user_id: 'fce28d06-9a11-482a-bd9d-42e9c7d26c26',
        temporary_user_id: null
      },
      {
        parking_id: '44c19f46-fef7-4221-bdf5-36b2bcfb7b92',
        org_name: null,
        branch: null,
        identifier1: 'GATEB',
        identifier2: 'WING-A',
        identifier3: '39.0',
        identifier4: null,
        identifier5: null,
        type: 'Regular',
        category: null,
        status: 'ASSIGN',
        created_ts: '2019-03-30T16:14:42.687Z',
        last_updated_ts: null,
        created_by: null,
        last_updated_by: null,
        assignments: ['d72ffdef-cd89-44a9-9e9a-2de51027d195'],
        original_user_id: 'ecebb23f-c8b4-47d7-a59f-48d37caca90e',
        temporary_user_id: null
      }
    ],
    GATEA: [
      {
        parking_id: '81c92972-4545-4118-a822-070ea1a7da74',
        org_name: null,
        branch: null,
        identifier1: 'GATEA',
        identifier2: 'WING-A',
        identifier3: '9.0',
        identifier4: null,
        identifier5: null,
        type: 'Regular',
        category: null,
        status: 'ASSIGN',
        created_ts: '2019-03-30T16:14:35.604Z',
        last_updated_ts: null,
        created_by: null,
        last_updated_by: null,
        assignments: ['6bfa58e8-7857-45dd-b3fd-d118609dc538'],
        original_user_id: '568a2023-e4f5-4bda-8345-9cd3b528282e',
        temporary_user_id: null
      }
    ],
    GATEC: [
      {
        parking_id: '0bd120db-3902-4677-be50-10cad5884fc2',
        org_name: null,
        branch: null,
        identifier1: 'GATEC',
        identifier2: 'WING-A',
        identifier3: '25.0',
        identifier4: null,
        identifier5: null,
        type: 'Regular',
        category: null,
        status: 'ASSIGN',
        created_ts: '2019-03-30T16:14:40.189Z',
        last_updated_ts: null,
        created_by: null,
        last_updated_by: null,
        assignments: ['72112d26-920a-4da7-aeb1-1b28f6eb7caf'],
        original_user_id: 'e091cfd7-c271-4357-b5c1-35cd11ed08bc',
        temporary_user_id: null
      }
    ]
  };
  res.json(dt);
});
app.listen(3100, () => {
  console.log('listen == 3100');
});
