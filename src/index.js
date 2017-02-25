import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import MovieRouter from './routers/MovieRouter';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie-list');

const PORT = 3001;

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  next();
});

app.use(MovieRouter);

app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

app.listen(PORT, error => {
  if (error) {
    return console.log('Error!', error);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
