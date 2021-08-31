const mongoose = require("mongoose");

const MarcasSchema = new mongoose.Schema(
    {
        nombreMarca: {
            type: String,
            required: true,
            unique: true
        },
        activo: {
            type: Boolean,
            default: true
        }

    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('marcas', MarcasSchema);