import traveltracks from '../db/models/TravelTracks.js';

import calcPaginationData from '../utils/calcPaginationData.js';

// without pagination
// export const getCampers = () => traveltracks.find();

// with pagination
export const getCampers = async ({ page, perPage }) => {
  const skip = (page - 1) * perPage;

  const databaseQuery = traveltracks.find();
  const totalItems = await traveltracks
    .find()
    .merge(databaseQuery)
    .countDocuments();

  const items = await databaseQuery.skip(skip).limit(perPage);

  const { totalPages, hasNextPage, hasPrevPage } = calcPaginationData({
    total: totalItems,
    perPage,
    page,
  });

  return {
    page,
    perPage,
    totalPages,
    totalItems,
    hasNextPage,
    hasPrevPage,
    items,
  };
};

export const getCamperById = (id) => traveltracks.findById(id);

export const addCamper = (data) => traveltracks.create(data);

export const deleteCamper = (filter) => traveltracks.findOneAndDelete(filter);

export const upsertCamper = async (filter, data, option = {}) => {
  const result = await traveltracks.findOneAndUpdate(filter, data, {
    // new: true,
    // runValidators: true,
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
