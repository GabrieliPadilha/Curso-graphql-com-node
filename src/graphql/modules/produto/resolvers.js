const db = require('../../../db')

module.exports = {
    Query: {
        produtos() {
            return db.produtos
        },

        produto(_, args) {
            const { nome, valor } = args
            if (nome) return produtos.find(produto => produto.nome === nome)
            return produtos.find(produto => produto.valor === valor)
        },
    },
}