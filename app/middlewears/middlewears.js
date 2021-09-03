const tagsRoutes = require("../routes/tags.route");
const subcategoriasRoutes = require("../routes/subcategorias.route");
const marcasRoutes = require("../routes/marcas.route");
const usuariosRoutes = require("../routes/usuarios.route");
const usuariosRolesRoutes = require("../routes/usuarios_roles.route");

module.exports = [
    tagsRoutes,
    subcategoriasRoutes,
    marcasRoutes,
    usuariosRoutes,
    usuariosRolesRoutes
];