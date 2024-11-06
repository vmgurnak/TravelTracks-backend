import { Router } from 'express';

import ctrlWrapper from '../utils/ctrlWrapper.js';
import isValiId from '../middlewares/isValidId.js';

import {
  addCampersController,
  deleteCamperController,
  getCamperByIdController,
  getCampersController,
} from '../controllers/campers-controllers.js';

const campersRouter = Router();

campersRouter.get('/', ctrlWrapper(getCampersController));
campersRouter.get('/:id', isValiId, ctrlWrapper(getCamperByIdController));
campersRouter.post('/', ctrlWrapper(addCampersController));
campersRouter.delete('/:id', isValiId, ctrlWrapper(deleteCamperController));

export default campersRouter;
