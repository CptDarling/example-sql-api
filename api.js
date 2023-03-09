const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { request } = require('express');

const Db = require('./dboperations');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

const port = process.env.PORT || 8090;
app.listen(port);
console.log(`Bin API is listening on port ${port}`);

router.use((request, response, next) => {
  console.log('middleware');
  next();
});

router.route('/bins').get((request, response)=>{
  Db.getBins().then((data) => {
    response.json(data[0]);
  })
})

router.route('/bins/:id').get((request, response) => {
  Db.getBin(request.params.id).then((data) => {
    response.json(data[0])
  })
})