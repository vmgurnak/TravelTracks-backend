import traveltracks from '../db/models/TravelTracks.js';

export const getCampers = () => traveltracks.find();
export const getCamperById = (id) => traveltracks.findById(id);
