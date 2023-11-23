﻿import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./src/graphql/typeDefs.js";
import resolvers from "./src/graphql/resolvers.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000}
})
console.log(`server running. ${url}`)
