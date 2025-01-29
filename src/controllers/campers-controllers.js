import createHttpError from 'http-errors';

import {
  getCampers,
  getCamperById,
  addCamper,
  deleteCamper,
  upsertCamper,
} from '../services/campers-services.js';

export const getCampersController = async (req, res) => {
  const data = await getCampers();
  res.json({
    status: 200,
    message: 'Success found campers',
    data,
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

export const updateCamperController = async (req, res) => {
  const { id } = req.params;
  const data = await upsertCamper({ _id: id }, req.body, { upsert: true });

  const status = data.isNew ? 201 : 200;
  const message = data.isNew ? 'Movie success add' : 'Movie update success';

  res.json({
    status,
    message,
    isNew: data.isNew,
    data: data.data,
  });
};

export const patchCamperController = async (req, res) => {
  const { id } = req.params;
  const result = await upsertCamper({ _id: id }, req.body);

  if (!result) {
    throw createHttpError(404, `Camper with id=${id} not found`);
  }

  res.json({
    status: 200,
    message: `Camper with id=${id} update success`,
    data: result.data,
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
