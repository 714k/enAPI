import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VerbSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: ''
    },
    meaning: {
        type: String,
        required: true,
        default: ''
    },
    pathImg: {
        type: String,
        required: true,
        default: ''
    },
    infinitive: {
        type: String,
        required: true,
        default: ''
    },
    simplePast: {
        type: String,
        required: true,
        default: ''
    },
    pastParticiple: {
        type: String,
        required: true,
        default: ''
    },
    category: {
        type: String,
        required: true,
        default: ''
    },
    type: {
        type: String,
        required: true,
        default: ''
    },
    examples: {
        type: Array,
        required: true,
        default: ''
    }
});

export default mongoose.model('verbs', VerbSchema);