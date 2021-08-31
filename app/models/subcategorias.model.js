const mongoose = require("mongoose");

const SubcategoriaScheme = new mongoose.Schema(
    {
        nombreSubcategoria: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('subcategorias', SubcategoriaScheme);