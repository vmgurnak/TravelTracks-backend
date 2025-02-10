import { Router } from 'express';

import ctrlWrapper from '../utils/ctrlWrapper.js';
import isValiId from '../middlewares/isValidId.js';
import validateBody from '../utils/validateBody.js';

import {
  addCampersController,
  deleteCamperController,
  getCamperByIdController,
  getCampersController,
  patchCamperController,
  updateCamperController,
} from '../controllers/campers-controllers.js';

import {
  camperAddShema,
  camperUpdateShema,
} from '../validation/camper-shemas.js';

const campersRouter = Router();

campersRouter.get('/', ctrlWrapper(getCampersController));
campersRouter.get('/:id', isValiId, ctrlWrapper(getCamperByIdController));
campersRouter.post(
  '/',
  validateBody(camperAddShema),
  ctrlWrapper(addCampersController),
);
campersRouter.put(
  '/:id',
  isValiId,
  validateBody(camperAddShema),
  ctrlWrapper(updateCamperController),
);
campersRouter.patch(
  '/:id',
  isValiId,
  validateBody(camperUpdateShema),
  ctrlWrapper(patchCamperController),
);
campersRouter.delete('/:id', isValiId, ctrlWrapper(deleteCamperController));

export default campersRouter;
