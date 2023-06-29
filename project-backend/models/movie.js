// const { string } = require("joi");
const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");
const { genreList, releaseDateRagexp} = require("../constants/movies");



// створюємо монгус схему
const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    director: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    genre: {
      type: String,
      enum: genreList,
      required: true,
    },
    releaseDate: {
      type: String,
      // регулярний вираз
      match: releaseDateRagexp,
      required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref:"user",
        required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

movieSchema.post("save", handleMongooseError);


// створюємо монгус - Модель
// клас  пишемо з великої літери
const Movie = model("movie", movieSchema);

module.exports = Movie;


