import * as express from 'express';
import {
  getAllVerbs,
  getVerbByTitle,
  getVerbByType,
  getVerbByCategory,
  addVerb,
  updateVerb,
  deleteVerb
} from '../controllers/verbs';

export default (app) => {
  const apiRoutes = express.Router();
  const VerbsRoutes = express.Router();

  /**
   * IRREGULAR VERBS ROUTES
   */
  apiRoutes.use('/verbs', VerbsRoutes);
  VerbsRoutes.use('/verbs', getAllVerbs);
  VerbsRoutes.use('/verbs:title', getVerbByTitle);
  VerbsRoutes.use('/verbs:type', getVerbByType);
  VerbsRoutes.use('/verbs:category', getVerbByCategory);
  VerbsRoutes.use('/verbs', addVerb);
  VerbsRoutes.use('/verbs:title', updateVerb);
  VerbsRoutes.use('/verbs:title', deleteVerb);
  
  // API location
  app.use('/api', apiRoutes);
  app.get('/api/v1/verbs', getAllVerbs);
  
}



