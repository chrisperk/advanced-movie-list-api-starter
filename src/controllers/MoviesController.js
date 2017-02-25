import MovieModel from '../models/MovieModel';

const moviesController = {};

moviesController.list = (request, response, next) => {
  MovieModel.find({}).exec()
    .then(moviesList => {
      return response.json(moviesList);
    })
    .catch(error => {
      return next(`Something went wrong with the movies list: ${error}`);
    });
};

moviesController.show = (request, response, next) => {
  MovieModel.findById(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(error => {
      return next(`Something went wrong with the movies list: ${error}`);
    });
};

moviesController.create = (request, response, next) => {
  const model = MovieModel({
    title: request.body.title,
    posterPath: request.body.posterPath,
    releaseDate: request.body.releaseDate,
    overview: request.body.overview
  });

  model.save()
    .then(movie => {
      return response.json(movie);
    })
    .catch(error => {
      return next(`Something went wrong with the movies list: ${error}`);
    });
};

moviesController.update = (request, response, next) => {
  MovieModel.findById(request.params._id)
    .then(movie => {
      movie.title = request.body.title || movie.title;
      movie.posterPath = request.body.posterPath || movie.posterPath;
      movie.releaseDate = request.body.releaseDate || movie.releaseDate;
      movie.overview = request.body.overview || movie.overview;

      return movie.save();
    })
    .then(movie => {
      return response.json(movie);
    })
    .catch(error => {
      return next(`Something went wrong with the movies list: ${error}`);
    });
};

moviesController.remove = (request, response, next) => {
  MovieModel.findByIdAndRemove(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(error => {
      return next(`Something went wrong with the movies list: ${error}`);
    });
};

export default moviesController;
