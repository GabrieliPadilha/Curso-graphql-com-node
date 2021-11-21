const { gql, ApolloServer} = require("apollo-server")

/* Scalar Types
    -Int
    -Float
    -String
    -Boolean
    -ID
*/
const produtos = [
    {
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

const usuarios = [
    {
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
const resolvers = {
    Query: {
        usuarios(){
            return usuarios
        },
        produtos (){
            return  produtos
        }
    }
}
const typeDefs = gql`
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
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()