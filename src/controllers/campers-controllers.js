import createHttpError from 'http-errors';

import { getCampers, getCamperById } from '../services/campers-services.js';

export const getCampersController = async (req, res) => {
  const data = await getCampers();
  res.json({
    status: 200,
    data,
    message: 'Success found campers',
  });
};

export const getCamperByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await getCamperById(id);

  if (!data) {
    throw createHttpError(404, `Camper with id=${id} not found`);
  }

  res.json({
    status: 200,
    data,
    message: `Camper with id=${id} find success`,
  });
};
