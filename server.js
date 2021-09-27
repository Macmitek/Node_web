import config from './config';
import apiRouter from './api';
import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'hello Express and <em>EJS</em>',
  });
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.get('/about.html.', (req, res) => {
  res.send('The about page');
});

server.listen(config.port, () => {
  console.info('Express listening on the port', config.port);
});
