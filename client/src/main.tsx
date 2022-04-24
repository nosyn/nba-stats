import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// GraphQL
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
