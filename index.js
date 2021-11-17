const { gql, ApolloServer} = require("apollo-server")

/* Scalar Types
    -Int
    -Float
    -String
    -Boolean
    -ID
*/
const resolvers = {
    Query: {
        idade(){
            return 18
        },
        salario(){
            return 256.545
        },
        nome(){
            return 'Gabrieli'
        },
        ativo(){
            return true
        },
        id(){
            return 12355458888
        }
    }
}
const typeDefs = gql`
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID

    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()