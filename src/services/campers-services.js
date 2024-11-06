import traveltracks from '../db/models/TravelTracks.js';

export const getCampers = () => traveltracks.find();
export const getCamperById = (id) => traveltracks.findById(id);
export const addCamper = (data) => traveltracks.create(data);
export const deleteCamper = (filter) => traveltracks.findOneAndDelete(filter);
