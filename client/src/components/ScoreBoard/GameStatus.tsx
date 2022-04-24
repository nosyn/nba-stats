import { Box, Card, Divider, Group, Loader, Text } from "@mantine/core";
import { Game } from "../../graphql/generated/graphql";
import TeamScore from "./TeamScore";

interface GameStatusProps {
  game: Game;
}

const GameStatus = ({ game }: GameStatusProps) => {
  const isFinal = game.gameStatusText.trim() === "Final";
  const isPlaying = Boolean(game.gameClock);

  return (
    <Card
      p="sm"
      sx={(theme) => ({
        ":hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
      withBorder
      shadow="xs"
    >
      <Text
        size="sm"
        pl="sm"
        sx={{
          whiteSpace: "nowrap",
        }}
      >
        {game.seriesGameNumber} ({game.seriesText})
      </Text>
      <Group>
        <Box
          sx={{
            flexGrow: 5,
            flexBasis: "150px",
          }}
        >
          <TeamScore team={game.homeTeam} />
          <TeamScore team={game.awayTeam} />
        </Box>

        <Divider
          sx={{
            alignSelf: "stretch",
            height: "auto",
            flexBasis: 0,
          }}
          orientation="vertical"
        />
        <Box
          sx={{
            flexGrow: 2,
            flexBasis: 0,
            textAlign: "center",
          }}
        >
          <Text
            spellCheck
            size="sm"
            sx={(theme) => ({
              color: isFinal
                ? theme.colors.dark
                : isPlaying
                ? theme.colors.green
                : theme.colors.blue[5],
            })}
          >
            {game.gameStatusText}
          </Text>
          {isPlaying && <Loader variant="dots" color="green" size="sm" />}
        </Box>
      </Group>
    </Card>
  );
};

export default GameStatus;
