import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 1,
    max: 200
  },

  posterPath: {
    type: String,
    required: true,
    min: 10,
    max: 2048
  },

  releaseDate: {
    type: String,
    required: true
    // validate: {
    //   validator: value => {
    //     return /\d{4}-\{2}-\d{2}/.test(value);
    //   },
    //   message: 'Release date is not valid!'
    // }
  },

  overview: {
    type: String,
    required: true,
    min: 2,
    max: 2048
  }
});

export default mongoose.model('Movie', movieSchema);
