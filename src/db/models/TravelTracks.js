import { Schema, model } from 'mongoose';

import { mongooseSaveError, setUpdateSettings } from './hooks.js';

import {
  TravelTracksForm,
  TravelTracksTransmission,
  TravelTracksEngine,
} from '../../constants/travelTracks-constants.js';

const travelTracksSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    rating: {
      type: Number,
      required: [true, 'rating is required, min 1 max 5'],
      min: 1,
      max: 5,
    },
    location: {
      type: String,
      required: [true, 'location is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    form: {
      type: String,
      enum: TravelTracksForm,
      required: [
        true,
        'form is required, valid values panelTruck, fullyIntegrated, alcove',
      ],
    },
    length: {
      type: String,
      required: [true, 'length is required'],
    },
    width: {
      type: String,
      required: [true, 'width is required'],
    },
    height: {
      type: String,
      required: [true, 'height is required'],
    },
    tank: {
      type: String,
      required: [true, 'tank is required'],
    },
    consumption: {
      type: String,
      required: [true, 'consumption is required'],
    },
    transmission: {
      type: String,
      enum: TravelTracksTransmission,
      required: [
        true,
        'transmission is required, valid values manual, automatic',
      ],
    },
    engine: {
      type: String,
      enum: TravelTracksEngine,
      required: [
        true,
        'engine is required, valid values diesel, petrol, hybrid, electric',
      ],
    },
    AC: {
      type: Boolean,
      required: [true, 'AC is required'],
    },
    bathroom: {
      type: Boolean,
      required: [true, 'bathroom is required'],
    },
    kitchen: {
      type: Boolean,
      required: [true, 'kitchen is required'],
    },
    TV: {
      type: Boolean,
      required: [true, 'TV is required'],
    },
    radio: {
      type: Boolean,
      required: [true, 'radio is required'],
    },
    refrigerator: {
      type: Boolean,
      required: [true, 'refrigerator is required'],
    },
    microwave: {
      type: Boolean,
      required: [true, 'microwave is required'],
    },
    gas: {
      type: Boolean,
      required: [true, 'gas is required'],
    },
    water: {
      type: Boolean,
      required: [true, 'water is required'],
    },
    gallery: [
      {
        thumb: {
          type: String,
          required: [true, 'thumb is required'],
        },
        original: String,
      },
      {
        thumb: {
          type: String,
          required: [true, 'thumb is required'],
        },
        original: String,
      },
      {
        thumb: {
          type: String,
          required: [true, 'thumb is required'],
        },
        original: String,
      },
    ],
    reviews: [
      {
        reviewer_name: String,
        reviewer_rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        comment: String,
      },
      {
        reviewer_name: String,
        reviewer_rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        comment: String,
      },
    ],
  },
  { versionKey: false, timestamps: true },
);

travelTracksSchema.post('save', mongooseSaveError);
travelTracksSchema.pre('findOneAndUpdate', setUpdateSettings);
travelTracksSchema.post('findOneAndUpdate', mongooseSaveError);

export default model('traveltracks', travelTracksSchema);
