import * as express from 'express';
import {
    getAllVerbs,
    getVerbByTitle,
    addVerb,
    updateVerb,
    deleteVerb
} from '../controllers/irregular-verbs';

export default (app) => {
    const apiRoutes = express.Router();
    const irregularVerbsRoutes = express.Router();

    /**
     * IRREGULAR VERBS ROUTES
     */
    apiRoutes.use('/irregular-verbs', irregularVerbsRoutes);
    irregularVerbsRoutes.use('/irregular-verbs', getAllVerbs);
    irregularVerbsRoutes.use('/irregular-verbs', addVerb);
    irregularVerbsRoutes.use('/irregular-verbs:title', getVerbByTitle);
    irregularVerbsRoutes.use('/irregular-verbs:title', updateVerb);
    irregularVerbsRoutes.use('/irregular-verbs:title', deleteVerb);
    
    // API location
    app.use('/api', apiRoutes);
    app.get('/api/v1/irregular-verbs', getAllVerbs);
}



