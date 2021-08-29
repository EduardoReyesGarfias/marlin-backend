const mongoose = require("mongoose");

const TagsScheme = new mongoose.Schema(
    {
        nombreTag: {
            type: String,
            required: true,
            unique: true
        } 
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('tags', TagsScheme);