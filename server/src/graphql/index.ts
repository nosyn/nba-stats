// Apollo
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { Server } from "http";

// Context
// import context from "./context";

// data sources
import LiveData from "./datasources/LiveData";

// Schema
import schema from "./schema";

// Same ApolloServer initialization as before, plus the drain plugin.
const initializeApolloServer = (httpServer: Server) =>
  new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    dataSources: () => {
      return {
        liveData: new LiveData(),
      };
    },
    // context,
  });

export default initializeApolloServer;
