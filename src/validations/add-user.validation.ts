import joi from 'joi';

export default joi.object()
  .keys({
    first_name: joi.string().min(3).max(56).required(),
    last_name: joi.string().min(3).max(56).required(),
  });
