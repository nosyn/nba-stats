import Themer from "./theme";

// GraphQL
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

// Routers
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import BasketBallPage from "./pages/BasketBallPage";
import DatabasePage from "./pages/DatabasePage";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Themer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route index element={<BasketBallPage />} />
              <Route index element={<DatabasePage />} />
              {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Themer>
    </ApolloProvider>
  );
};

export default App;
