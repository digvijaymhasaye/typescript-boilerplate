import joi from 'joi';

export default joi.object()
  .keys({
    name: joi.string().min(3).max(56).required(),
    description: joi.string().min(3).max(1000).required(),
  });
