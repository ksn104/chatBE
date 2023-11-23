const typeDefs = `#graphql
    type Query {
        users: [User]
        user: User
    }
    
    type Mutation {
        addUser(ID: String!, password: String!): User!
    }

    type User {
        id: Int!
        ID: String!
        password: String!
        token: String!
    }
`

export default typeDefs