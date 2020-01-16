import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VerbSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: null
    },
    meaning: {
        type: String,
        required: true,
        default: null
    },
    level_beginner: {
        type: Number,
        required: true,
        default: null
    },
    level_intermediate: {
        type: Number,
        required: true,
        default: null
    },
    level_advanced: {
        type: Number,
        required: true,
        default: null
    },
    pathImg: {
        type: String,
        required: true,
        default: null
    },
    infinitive: {
        type: String,
        required: true,
        default: null
    },
    simplePast: {
        type: String,
        required: true,
        default: null
    },
    pastParticiple: {
        type: String,
        required: true,
        default: null
    },
    category: {
        type: String,
        required: true,
        default: null
    },
    verbTypes: {
        type: [String],
        required: true,
        default: null
    },
    examples: {
        type: [],
        required: true,
        default: null
    }
});

export default mongoose.model('verbs', VerbSchema);