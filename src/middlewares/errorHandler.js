// import { HttpError } from 'http-errors';

const errorHandler = (error, req, res, next) => {
  // if (error instanceof HttpError) {
  //   const { status, message, errors } = error;
  //   res.status(status).json({
  //     status,
  //     message,
  //     data: errors || error,
  //   });
  //   return;
  // }

  if (error) {
    const { status, message } = error;
    res.status(status).json({ status, message });
    return;
  }

  res
    .status(500)
    .json({ status: 500, message: 'Server error', data: error.message });
};

export default errorHandler;
