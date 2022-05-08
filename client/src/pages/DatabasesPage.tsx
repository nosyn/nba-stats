import { isNonNullObject } from "@apollo/client/utilities";
import { Container } from "@mantine/core";
import CustomTable from "../components/Table";
import BetHistoryTable from "../components/Table/BetHistoryTable";
import { useTodaysScoreBoardQuery } from "../graphql/generated/graphql";

interface DatabasesPageProps {}

const DatabasesPage = ({}: DatabasesPageProps) => {
  const { data, loading, error } = useTodaysScoreBoardQuery();

  if (loading) return <div>loading</div>;

  if (error || !data) return <div>error</div>;

  const games = data.todaysScoreBoard.games.filter((game) =>
    isNonNullObject(game)
  );

  if (!games || games.length <= 0) return <div>No game</div>;

  return (
    <Container fluid>
      <CustomTable games={games} date={data.todaysScoreBoard.gameDate} />
      <BetHistoryTable games={games} />
    </Container>
  );
};

export default DatabasesPage;
