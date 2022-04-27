import LiveScoreBoards from "./widgets/ScoreBoard/LiveScoreBoards";
import MainLayout from "./Layout/MainLayout";

// GraphQL
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <LiveScoreBoards />
      </MainLayout>
    </ApolloProvider>
  );
};

export default App;
