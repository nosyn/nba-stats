import { Box, Card, Divider, Group, Text } from "@mantine/core";
import { Game } from "../../graphql/generated/graphql";
import TeamScore from "./TeamScore";

interface GameStatusProps {
  game: Game;
}

const GameStatus = ({ game }: GameStatusProps) => {
  console.log("game: ", game);
  return (
    <Card p="sm">
      <Text size="sm" pl="sm">
        {game.seriesGameNumber} ({game.seriesText})
      </Text>
      <Group>
        <Box style={{ flexGrow: 5 }}>
          <TeamScore team={game.homeTeam} />
          <TeamScore team={game.awayTeam} />
        </Box>

        <Divider
          style={{
            alignSelf: "stretch",
            height: "auto",
          }}
          orientation="vertical"
        />
        <Box style={{ flexGrow: 1 }} p={1}>
          {game.gameStatusText}
        </Box>
      </Group>
    </Card>
  );
};

export default GameStatus;
