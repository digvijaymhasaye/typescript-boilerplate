import joi from 'joi';

export default joi.object()
  .keys({
    pageNo: joi.number().positive().default(1),
    pageSize: joi.number().positive().min(1).default(1),
    sortOrder: joi.string().valid('asc', 'desc').default('desc'),
    search: joi.string().min(3),
  });
