import IrregularVerb from '../models/irregular-verbs';

export function getAllVerbs(req, res, next) {
    IrregularVerb.find((err, data) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({data});
    });
}

export function getVerbByTitle(req, res, next) {
    const title = req.params.title;

    IrregularVerb.findById(title, (err, verb) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
}

export function addVerb(req, res, next) {
    const title = req.body.title;
    const meaning = req.body.meaning;
    const pathImg = req.body.pathImg;
    const infinitive = req.body.infinitive;
    const simplePast = req.body.simplePast;
    const pastParticiple = req.body.pastParticiple;
    const category = req.body.category;
    const examples = req.body.examples;

    if (!title) {
        res.status(422).json({err: 'Title is required'});
        return;
    }
    
    if (!meaning) {
        res.status(422).json({err: 'Meaning is required'});
        return;
    }
    
    if (!pathImg) {
        res.status(422).json({err: 'Image path is required'});
        return;
    }
    
    if (!infinitive) {
        res.status(422).json({err: 'Infinive is required'});
        return;
    }
    
    if (!simplePast) {
        res.status(422).json({err: 'Simple past is required'});
        return;
    }
    
    if (!pastParticiple) {
        res.status(422).json({err: 'Past participle is required'});
        return;
    }
    
    if (!category) {
        res.status(422).json({err: 'Category is required'});
        return;
    }
    
    if (!examples) {
        res.status(422).json({err: 'At least one example is required'});
        return;
    }

    const verb = new IrregularVerb({
        title,
        meaning,
        pathImg,
        infinitive,
        simplePast,
        pastParticiple,
        category,
        examples
    });

    verb.save((err, verb) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
    
}

export function updateVerb(req, res, next) {
    const title = res.params.title;

    IrregularVerb.findByIdAndUpdate(title, req.body, (err, verb) => {
        if(err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
}

export function deleteVerb(req, res, next) {
    const title = req.params.title;

    IrregularVerb.findByIdAndRemove(title, (err, verb) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
}