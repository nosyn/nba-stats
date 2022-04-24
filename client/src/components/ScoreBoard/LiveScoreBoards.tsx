import { Box, SimpleGrid, Text } from "@mantine/core";
import { useTodaysScoreBoardQuery } from "../../graphql/generated/graphql";
import GameStatus from "./GameStatus";

const LiveScoreBoards = () => {
  const { data, loading, error } = useTodaysScoreBoardQuery({
    pollInterval: 5000,
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <div>Loading</div>;
  if (error || !data) return <div>error</div>;

  const games = data.todaysScoreBoard.games;

  if (!games || games?.length <= 0) return <div>No game at the moment</div>;

  return (
    <Box>
      <Text>Today: {data.todaysScoreBoard.gameDate}</Text>
      <SimpleGrid
        cols={2}
        breakpoints={[{ maxWidth: 640, cols: 1, spacing: "sm" }]}
      >
        {games.map((game) =>
          game ? <GameStatus game={game} key={`game-${game.gameId}`} /> : null
        )}
      </SimpleGrid>
    </Box>
  );
};

export default LiveScoreBoards;
