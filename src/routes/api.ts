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
  VerbsRoutes.use('/verbs', getVerbByTitle);
  VerbsRoutes.use('/verbs', getVerbByType);
  VerbsRoutes.use('/verbs', getVerbByCategory);
  VerbsRoutes.use('/verbs', addVerb);
  VerbsRoutes.use('/verbs', updateVerb);
  VerbsRoutes.use('/verbs/:title', deleteVerb);
  
  // API location
  app.use('/api', apiRoutes);
  app.get('/api/v1/verbs', getAllVerbs);
  app.get('/api/v1/verbs/:title', getVerbByTitle);
  
}



