import { Paper, Table } from "@mantine/core";
import { Game } from "../../graphql/generated/graphql";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

type CustomTableType = {
  games: Game[];
  date: string;
};

const CustomTable = ({ games, date }: CustomTableType) => {
  const rows = games.map((game: Game) => {
    return (
      <tr key={game.gameId}>
        <td>{date}</td>
        <td>{game.homeTeam.teamName}</td>
        <td>{game.homeTeam.score}</td>
        <td>{game.awayTeam.teamName}</td>
        <td>{game.awayTeam.score}</td>
        <td>{game.gameStatusText}</td>
      </tr>
    );
  });

  return (
    <Paper shadow="xs" style={{ overflowX: "auto" }}>
      <Table
        horizontalSpacing="xl"
        verticalSpacing="xs"
        highlightOnHover
        striped
        mb="lg"
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Home Team</th>
            <th>Points</th>
            <th>Away Team</th>
            <th>Points</th>
            {/* <th>Difference</th> */}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
};

export default CustomTable;
