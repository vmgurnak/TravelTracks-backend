import traveltracks from '../db/models/TravelTracks.js';

export const getCampers = () => traveltracks.find();

export const getCamperById = (id) => traveltracks.findById(id);

export const addCamper = (data) => traveltracks.create(data);

export const deleteCamper = (filter) => traveltracks.findOneAndDelete(filter);

export const upsertCamper = async (filter, data, option = {}) => {
  const result = await traveltracks.findOneAndUpdate(filter, data, {
    new: true,
    includeResultMetadata: true,
    ...option,
  });

  if (!result || !result.value) return null;

  //   const isNew = data && data.lastErrorObject && data.lastErrorObject.upserted;
  const isNew = Boolean(result?.lastErrorObject?.upserted);

  //   console.log('isNew', isNew);

  return {
    data: result.value,
    isNew,
  };
};
