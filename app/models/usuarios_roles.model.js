const mongoose = require("mongoose");

const UsuariosRolesSchema = new mongoose.Schema(
    {
        role:{
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

module.exports = mongoose.model("usuarios_role", UsuariosRolesSchema);