const { ApolloServer } = require("apollo-server")
const graphql = require('./src/graphql')

/* Scalar Types
    -Int
    -Float
    -String
    -Boolean
    -ID
*/


const server = new ApolloServer({
    ...graphql
})

server.listen(4000, () => {
    console.log('Ouvindo em http://localhost:4000')
})