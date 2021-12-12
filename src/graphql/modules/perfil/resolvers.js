const db = require("../../../db")

module.exports = {
    Perfil: {
        usuarios(perfil) {
            return db.usuarios.filter(usuario => usuario.perfil === perfil.id)
        }
    },
    Query: {
        perfis() {
            return db.perfis
        }
    }
}