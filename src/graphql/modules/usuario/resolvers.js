const db = require('../../../db')

module.exports = {
    Usuario: {
        perfil(usuario) {
            return db.perfis.find(p => p.id === usuario.id)
        }
    },
    Query: {
        usuarios() { console.log(db.usuarios); return db.usuarios },
        usuario(_, args) {
            const { id, nome } = args
            if (id) return db.usuarios.find(usuario => usuario.id === id)
            return db.usuarios.find(usuario => usuario.nome === nome)
        },
    }
}