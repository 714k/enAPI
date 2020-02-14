import Verb from '../models/verbs';

export function getAllVerbs(req, res, next) {
    Verb.find((error, data) => {
        if (error) {
            res.status(500).json(error);
        }

        res.status(200).json(data);
    });
}

export function getVerbsByTypes(req, res, next){
  if (req.params.types) {
    const types = req.params.types;

    Verb.find({ "types": types }, (error, data) => {
      if (error) {
        res.status(500).json({ error });
      }

      res.status(200).json(data);
    });
  }  
}

export function getVerbsByTypesAndLevel(req, res, next){
  const params = req.params;

  if (params.types && params.difficulty  && params.level) {
    const types = params.types;
    let level= undefined;

    switch(params.difficulty){
      case "beginner":
        level = "level_beginner";
        break;

      case "intermediate":
        level= "level_intermediate";
        break;
        
      case "advanced":
        level = "level_advanced";
        break;  

      default:
        level = undefined;
        break;  
    }

    Verb.find({"types": types, [level]: params.level}, (error, data) => {
      if (error) {
        res.status(500).json({ error });
      }

      res.status(200).json(data);
    });
  }  
}

export function getTotalLevelsByVerbTypeAndDifficulty(req, res, next) {
  const params = req.params;

  if (params.types && params.difficulty) {
    // console.log("Types & Difficulty");
    const types = params.types;
    let level= undefined;

    switch(params.difficulty){
      case "beginner":
        level = "level_beginner";
        break;

      case "intermediate":
        level= "level_intermediate";
        break;
        
      case "advanced":
        level = "level_advanced";
        break;  

      default:
        level = undefined;
        break;  
    }

    const verbs = Verb.find({"types": types});

    verbs.select([level]);
    verbs.sort({[level]: -1}).limit(1);
    verbs.exec((error, items) => {
      if (error) {
        res.status(500).json({ error });
      }
      const maxLevel = items[0];
      const levels = maxLevel[level];

      res.status(200).json({ levels });
    });
  }  
}

/*
export function getVerbByTitle(req, res, next) {
  if(req.params.title) {
    const title = req.params.title;

    Verb.findOne({ "title": title }, (error, data) => {
      if (error) {
        res.status(500).json({ error });
      }

      res.status(200).json({ data });
    });

  }
}

export function getVerbByCategory(req, res, next){
  if (req.params.category) {
    const category = req.params.category;

    Verb.find({ "category": category }, (error, data) => {
      if (error) {
        res.status(500).json({ error });
      }
      res.status(200).json({ data });
    });
  }
}

export function addVerb(req, res, next) {
    const title = req.body.title;
    const meaning = req.body.meaning;
    const pathImg = req.body.pathImg;
    const infinitive = req.body.infinitive;
    const simplePast = req.body.simplePast;
    const pastParticiple = req.body.pastParticiple;
    const category = req.body.category;
    const type = req.body.type;
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
    
    if (!type) {
        res.status(422).json({err: 'Verb type is required'});
        return;
    }
    
    if (!examples) {
        res.status(422).json({err: 'At least one example is required'});
        return;
    }

    const verb = new Verb({
        title,
        meaning,
        pathImg,
        infinitive,
        simplePast,
        pastParticiple,
        category,
        type,
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

    Verb.findByIdAndUpdate(title, req.body, (err, verb) => {
        if(err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
}

export function deleteVerb(req, res, next) {
    const title = req.params.title;

    Verb.findByIdAndRemove(title, (err, verb) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
}*/
