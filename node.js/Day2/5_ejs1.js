const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const ejs = require('ejs');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));

router.route('/login').post((req, res) => {
  fs.readFile('./ejs1.ejs', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(ejs.render(data));
    }
  });
});

app.use('/', router);

app.all('*', (req, res) => {
  res.status(404).send('<h2>페이지를 찾을수 없습니다.</h2>');
});

app.listen(3000, () => {
  console.log('3000번 포트로 서버 실행중');
});
