import {
  Box,
  Card,
  Container,
  Group,
  Loader,
  SimpleGrid,
  Skeleton,
  Text,
} from "@mantine/core";
import { useTodaysScoreBoardQuery } from "../../../graphql/generated/graphql";
import GameStatus from "./GameStatus";
import { showNotification, useNotifications } from "@mantine/notifications";

const LiveScoreBoards = () => {
  const { data, loading, error } = useTodaysScoreBoardQuery({
    pollInterval: 5000,
    fetchPolicy: "cache-and-network",
    onError: (error) => {
      showNotification({
        title: error.name,
        message: error.message,
        color: "red",
      });
    },
  });

  if (loading)
    return (
      <Container>
        <Skeleton height={28} my="sm" width="30%" radius="md" />
        <Group align="center" spacing="sm">
          <Skeleton height={72} width="45%" radius="lg" />
          <Skeleton height={72} width="40%" radius="lg" />
          <Skeleton height={72} width="45%" radius="lg" />
          <Skeleton height={72} width="40%" radius="lg" />
        </Group>
      </Container>
    );

  if (error || !data) return <Container>error</Container>;

  const games = data.todaysScoreBoard.games;

  if (!games || games?.length <= 0)
    return <Container>No game at the moment</Container>;

  return (
    <Container>
      {games && (
        <>
          <Text size="xl" pl="sm" mb="sm">
            NBA - Today: {data.todaysScoreBoard.gameDate}
          </Text>
          <SimpleGrid
            cols={2}
            breakpoints={[{ maxWidth: 640, cols: 1, spacing: "sm" }]}
          >
            {games.map((game) =>
              game ? (
                <GameStatus game={game} key={`game-${game.gameId}`} />
              ) : null
            )}
          </SimpleGrid>
        </>
      )}
    </Container>
  );
};

export default LiveScoreBoards;
