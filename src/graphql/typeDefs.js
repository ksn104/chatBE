const typeDefs = `#graphql
    type Query {
        users: [User]
        user: User
        chat: Chat
        chats: [Chat]
        message: Message
        messages: [Message]
    }
    
    type Mutation {
        addUser(
            ID: String!, 
            password: String!
        ): User!
        
        addChat(
            owner: Int!,
            visitant: Int!
        ): Chat!

        addMessage(
            text: String
        ): Message!
    }

    type Subscription {
        messageSubscribe: Int
    }


    type User {
        index: Int!
        ID: String!
        password: String!
        token: String!
        email: String
        mobile: String
        createAt: String
        deleteAt: String
    }

    type Chat {
        index: Int!
        owner: Int!
        visitant: Int!
        creatAt: String
        deleteAt: String
    }

    type Message {
        index: Int!
        chatIndex: Int!
        creatAt: String
        text: String
        readAt: String
    }
`

export default typeDefs
