import { typeTracksFormList } from '../constants/travelTracks-constants.js';

const parseBoolean = (value) => {
  if (typeof value !== 'string') return;

  if (!['true', 'false'].includes(value)) return;

  return value === 'true';
};

const parseCamperFitlerParams = ({ form, AC }) => {
  const parsedTracksForm = typeTracksFormList.includes(form) ? form : null;
  const parsedAC = parseBoolean(AC);

  return {
    form: parsedTracksForm,
    AC: parsedAC,
  };
};

export default parseCamperFitlerParams;
