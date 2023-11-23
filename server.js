﻿import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000}
})
console.log(`server running. ${url}`)
