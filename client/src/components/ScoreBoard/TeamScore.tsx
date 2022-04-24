import { Group, Avatar, Text } from "@mantine/core";
import { Team } from "../../graphql/generated/graphql";

interface TeamScoreProps {
  team: Team;
}

const getTeamLogoURL = (teamId: number) =>
  `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`;

const TeamScore = ({ team }: TeamScoreProps) => {
  const logoURL = getTeamLogoURL(team.teamId);
  const teamName = team.teamName;
  const score = team.score;

  return (
    <Group>
      <Avatar src={logoURL} radius="xl" />

      <div style={{ flex: 1 }}>
        <Text size="sm" weight={500}>
          {teamName}
        </Text>
      </div>

      {score}
    </Group>
  );
};

export default TeamScore;
