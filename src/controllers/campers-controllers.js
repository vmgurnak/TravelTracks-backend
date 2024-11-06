import createHttpError from 'http-errors';

import {
  getCampers,
  getCamperById,
  addCamper,
  deleteCamper,
} from '../services/campers-services.js';

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

export const addCampersController = async (req, res) => {
  const data = req.body;
  const newCamper = await addCamper(data);
  res.status(201).json({
    status: 201,
    message: 'Success add new camper',
    data: newCamper,
  });
};

export const deleteCamperController = async (req, res) => {
  const { id } = req.params;

  const result = await deleteCamper({ _id: id });

  if (!result) {
    throw createHttpError(404, `Camper with id=${id} not found`);
  }

  res.json({
    status: 200,
    message: `Camper with id=${id} delete success`,
    data: result,
  });
};
