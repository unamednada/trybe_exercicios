import Joi from "joi";

export default function blogPostSchema (input: object) {
  return Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required().min(3),
    category: Joi.string().required().min(3),
  }).validate(input);
};
