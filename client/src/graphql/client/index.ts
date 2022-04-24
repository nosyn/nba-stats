import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { __prod__ } from "../../constants";

const client = new ApolloClient({
  uri: __prod__ ? "/graphql" : "/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
