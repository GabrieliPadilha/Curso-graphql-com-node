const { gql, ApolloServer } = require("apollo-server")

/* Scalar Types
    -Int
    -Float
    -String
    -Boolean
    -ID
*/
const produtos = [{
        id: 1,
        nome: 'cama',
        valor: 400
    },
    {
        id: 2,
        nome: 'Notebook',
        valor: 12000
    }
]

const usuarios = [{
        id: 1,
        nome: 'Gabi',
        salario: 1258.55,
        ativo: true,
        idade: 22,
    },
    {
        id: 2,
        nome: 'Bruna',
        salario: 1258.55,
        ativo: false,
        idade: 22,
    }
]

const db = [{
        id: 1,
        nome: "Paulo",
        email: "paulo@email.com",
        telefone: "47 984865899"
    },
    {
        id: 2,
        nome: "Pedro",
        email: "pedro@email.com",
        telefone: "47 98756569"
    }
]
const resolvers = {
    Query: {
        usuarios() {
            return usuarios
        },
        produtos() {
            return produtos
        },
        usuario(_, args) {
            const { id, nome } = args
            if (id) return usuarios.find(usuario => usuario.id === id)
            return usuarios.find(usuario => usuario.nome === nome)
        },
        produto(_, args) {
            const { nome, valor } = args
            if (nome) return produtos.find(produto => produto.nome === nome)
            return produtos.find(produto => produto.valor === valor)
        },
        usuarioDb() {
            return db[0]
        }
    }
}
const typeDefs = gql `
    type UsuarioDb {
        id: Int,
        nome: String,
        email: String,
        telefone: String
    }
    type Usuario{
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
    type Produto{
        id: ID,
        nome: String,
        valor: Float
    }
    type Query{
        usuarios: [Usuario]
        produtos: [Produto]
        produto(valor: Float, nome: String): Produto
        usuario(id: Int, nome: String): Usuario
        usuarioDb: UsuarioDb
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()