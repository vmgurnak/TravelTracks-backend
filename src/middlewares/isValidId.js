import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

const isValiId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return next(createHttpError(404, `${id} is not valid id`));
  }
  next();
};

export default isValiId;
