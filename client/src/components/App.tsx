import LiveScoreBoards from "./widgets/ScoreBoard/LiveScoreBoards";
import Themer from "./Themer";

// GraphQL
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Themer>
        <LiveScoreBoards />
      </Themer>
    </ApolloProvider>
  );
};

export default App;
