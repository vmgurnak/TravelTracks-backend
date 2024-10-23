import { Router } from 'express';

import ctrlWrapper from '../utils/ctrlWrapper.js';
import isValiId from '../middlewares/isValidId.js';

import {
  getCamperByIdController,
  getCampersController,
} from '../controllers/campers-controllers.js';

const campersRouter = Router();

campersRouter.get('/', ctrlWrapper(getCampersController));
campersRouter.get('/:id', isValiId, ctrlWrapper(getCamperByIdController));

export default campersRouter;
