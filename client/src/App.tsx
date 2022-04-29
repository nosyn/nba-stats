import Themer from "./theme";

// GraphQL
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

// Routers
import { BrowserRouter } from "react-router-dom";

// Pages
import InternalApp from "./InternalApp";

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <InternalApp />
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
