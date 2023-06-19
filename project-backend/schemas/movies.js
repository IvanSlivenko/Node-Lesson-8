const Joi = require("joi");

const { genreList, releaseDateRagexp} = require("../constants/movies");

// const phoneRegenxp = /^(\d{3}) \d{3}-\d{2}-\d{2}$/;

const movieAddSchema = Joi.object({
  title: Joi.string().required(), // string() - строка, required() - обов'зковий
  // phone: Joi.string().pattern(phoneRegenxp).required(),
  director: Joi.string().required().messages({
    "any.required": `"director" is a required field`,
    "string.empty": `"director" cannot be an empty field`,
  }), // string() - строка, required() - обов'зковий
  favorite: Joi.boolean(),
  genre: Joi.string().valid(...genreList),
  releaseDate: Joi.string().pattern(releaseDateRagexp).required(),
});

const movieUpdateFavoritesSchema = Joi.object({
  favorite: Joi.boolean().required(),
  // director: Joi.string().required(),
  releaseDate: Joi.string().required(),
});
module.exports = {
  movieAddSchema,
  movieUpdateFavoritesSchema,
}; 