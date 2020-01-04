import * as express from 'express';
import {
  getAllVerbs,
  // getVerbByTitle,
  // getVerbsByType,
  // getVerbByCategory,
  // addVerb,
  // updateVerb,
  // deleteVerb
} from '../controllers/verbs';

export default (app) => {
  const apiRoutes = express.Router();
  const VerbsRoutes = express.Router();

  /**
   * IRREGULAR VERBS ROUTES
   */
  apiRoutes.use('/verbs', VerbsRoutes);
  
  // API location
  app.use('/api', apiRoutes);
  app.get('/api/v1/verbs/types/all', getAllVerbs);
  // app.get('/api/v1/verbs/:title', getVerbByTitle);
  // app.get('/api/v1/verbs/types/:verbTypes', getVerbsByType);
  // app.get('/api/v1/verbs/category/:category', getVerbByCategory);
}



