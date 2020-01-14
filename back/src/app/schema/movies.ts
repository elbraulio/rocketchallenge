import {model, Schema} from "mongoose";

const movieSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    tags: {
        type: [String],
        required: false,
    }
});

module.exports = model('Movie', movieSchema);
