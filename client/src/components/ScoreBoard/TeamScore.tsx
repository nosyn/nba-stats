import { Group, Avatar, Text, Box } from "@mantine/core";
import { Team } from "../../graphql/generated/graphql";
import getTeamLogoURL from "../../utils/getTeamLogoURL";

interface TeamScoreProps {
  team: Team;
}
const TeamScore = ({ team }: TeamScoreProps) => {
  const logoURL = getTeamLogoURL(team.teamId);
  const teamName = team.teamName;
  const score = team.score;

  return (
    <Group noWrap>
      <Avatar src={logoURL} alt="team-logo" radius="xl" />

      <Box style={{ flex: 1 }}>
        <Text size="sm" weight={500}>
          {teamName}
        </Text>
      </Box>

      <Text>{score}</Text>
    </Group>
  );
};

export default TeamScore;
