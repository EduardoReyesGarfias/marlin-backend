const mongoose = require("mongoose");

const UsuariosSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        id_role: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'usuarios_role' 
        }]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("usuarios", UsuariosSchema);