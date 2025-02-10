import Joi from 'joi';

import {
  TravelTracksForm,
  TravelTracksTransmission,
  TravelTracksEngine,
} from '../constants/travelTracks-constants.js';

export const camperAddShema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'name is required',
  }),
  price: Joi.number().required().messages({
    'any.required': 'price is required',
  }),
  rating: Joi.number().min(1).max(5).required().messages({
    'any.required': 'rating is required, min 1 max 5',
  }),
  location: Joi.string().required().messages({
    'any.required': 'location is required',
  }),
  description: Joi.string().required().messages({
    'any.required': 'description is required',
  }),
  form: Joi.string()
    .valid(...TravelTracksForm)
    .required()
    .messages({
      'any.required':
        'form is required, valid values panelTruck, fullyIntegrated, alcove',
    }),
  length: Joi.string().required().messages({
    'any.required': 'length is required',
  }),
  width: Joi.string().required().messages({
    'any.required': 'width is required',
  }),
  height: Joi.string().required().messages({
    'any.required': 'height is required',
  }),
  tank: Joi.string().required().messages({
    'any.required': 'tank is required',
  }),
  consumption: Joi.string().required().messages({
    'any.required': 'consumption is required',
  }),
  transmission: Joi.string()
    .valid(...TravelTracksTransmission)
    .required()
    .messages({
      'any.required':
        'transmission is required, valid values manual, automatic',
    }),
  engine: Joi.string()
    .valid(...TravelTracksEngine)
    .required()
    .messages({
      'any.required':
        'engine is required, valid values diesel, petrol, hybrid, electric',
    }),
  AC: Joi.boolean().required().messages({
    'any.required': 'AC is required',
  }),
  bathroom: Joi.boolean().required().messages({
    'any.required': 'bathroom is required',
  }),
  kitchen: Joi.boolean().required().messages({
    'any.required': 'kitchen is required',
  }),
  TV: Joi.boolean().required().messages({
    'any.required': 'TV is required',
  }),
  radio: Joi.boolean().required().messages({
    'any.required': 'radio is required',
  }),
  refrigerator: Joi.boolean().required().messages({
    'any.required': 'refrigerator is required',
  }),
  microwave: Joi.boolean().required().messages({
    'any.required': 'microwave is required',
  }),
  gas: Joi.boolean().required().messages({
    'any.required': 'gas is required',
  }),
  water: Joi.boolean().required().messages({
    'any.required': 'water is required',
  }),
  gallery: Joi.array().items(
    Joi.object({
      thumb: Joi.string().required().messages({
        'any.required': 'thumb is required',
      }),
      original: Joi.string(),
    }),
  ),
  reviews: Joi.array().items(
    Joi.object({
      reviewer_name: Joi.string(),
      reviewer_rating: Joi.number()
        .min(1)
        .max(5)
        .messages({ 'any.required': 'rating min 1 max 5' }),
      comment: Joi.string(),
    }),
  ),
});

export const camperUpdateShema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  rating: Joi.number()
    .min(1)
    .max(5)
    .messages({ 'any.required': 'rating min 1 max 5' }),
  location: Joi.string(),
  description: Joi.string(),
  form: Joi.string()
    .valid(...TravelTracksForm)
    .messages({
      'any.required': 'form values panelTruck, fullyIntegrated, alcove',
    }),
  length: Joi.string(),
  width: Joi.string(),
  height: Joi.string(),
  tank: Joi.string(),
  consumption: Joi.string(),
  transmission: Joi.string()
    .valid(...TravelTracksTransmission)
    .messages({ 'any.required': 'transmission values manual, automatic' }),
  engine: Joi.string()
    .valid(...TravelTracksEngine)
    .messages({
      'any.required': 'engine values diesel, petrol, hybrid, electric',
    }),
  AC: Joi.boolean(),
  bathroom: Joi.boolean(),
  kitchen: Joi.boolean(),
  TV: Joi.boolean(),
  radio: Joi.boolean(),
  refrigerator: Joi.boolean(),
  microwave: Joi.boolean(),
  gas: Joi.boolean(),
  water: Joi.boolean(),
  gallery: Joi.array().items(
    Joi.object({
      thumb: Joi.string(),
      original: Joi.string(),
    }),
  ),
  reviews: Joi.array().items(
    Joi.object({
      reviewer_name: Joi.string(),
      reviewer_rating: Joi.number()
        .min(1)
        .max(5)
        .messages({ 'any.required': 'rating min 1 max 5' }),
      comment: Joi.string(),
    }),
  ),
});
