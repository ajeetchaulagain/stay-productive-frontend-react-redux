import Joi from "@hapi/joi";

export const validateProjectInput = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(5).max(25),
    _id: Joi.optional(),
  });
  return schema.validate(data, { abortEarly: true });
};
