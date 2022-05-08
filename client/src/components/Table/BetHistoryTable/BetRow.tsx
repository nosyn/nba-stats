import { BsFillTrashFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import {
  Paper,
  Table,
  ActionIcon,
  Text,
  TextInput,
  Button,
  Select,
  Group,
  NumberInput,
} from "@mantine/core";
import { Game } from "../../../graphql/generated/graphql";
import { useState } from "react";

function randomId() {
  return Math.random();
}

type BetRowType = {
  games: Game[];
};

const createSelectableTeams = (game: Game | undefined) => {
  if (!game) return [];

  return [
    {
      value: game.homeTeam.teamId.toString(),
      label: game.homeTeam.teamName,
    },
    {
      value: game.awayTeam.teamId.toString(),
      label: game.awayTeam.teamName,
    },
  ];
};

const createSelectableGames = (games: Game[]) =>
  games.map((game) => ({
    value: game.gameId,
    label: `${game.homeTeam.teamName} vs ${game.awayTeam.teamName}`,
  }));

const BetRow = ({ games }: BetRowType) => {
  const selectableGames = createSelectableGames(games);
  const [selectedGameId, setSelectedGameId] = useState(
    selectableGames[0].value
  );
  const selectedGame = games.find((game) => game.gameId === selectedGameId);
  const selectableTeams = createSelectableTeams(selectedGame);
  const [selectedTeamId, setSelectedTeamId] = useState(
    selectableGames[0].value
  );

  // Odd
  const [overUnderOdd, setOverUnderOdd] = useState(0);
  const [gameWinnerOdd, setGameWinnerOdd] = useState(0);

  // Amount
  const [amount, setAmount] = useState(1);

  // Rate
  const [overUnderRate, setOverUnderRate] = useState(1);
  const [gameWinnerRate, setGameWinnerRate] = useState(1);

  return (
    <tr>
      <td>
        <Select
          variant="default"
          placeholder="Select Game"
          value={selectedGameId}
          onChange={(value) => (value ? setSelectedGameId(value) : "")}
          data={selectableGames}
        />
      </td>
      <td style={{ position: "relative" }}>
        <Select
          variant="default"
          placeholder="Pick O/U"
          data={[
            { value: "", label: "No Bet" },
            { value: "over", label: "Over" },
            { value: "under", label: "Under" },
          ]}
        />
      </td>
      <td>
        <NumberInput
          value={overUnderOdd}
          onChange={(val) => setOverUnderOdd(val ? val : 0)}
          placeholder="Rate"
          defaultValue={1}
          max={400}
          min={100}
          step={20}
          parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, "") : "0")}
          formatter={(value) =>
            value && !Number.isNaN(parseFloat(value))
              ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "1"
          }
        />
      </td>
      <td>
        <NumberInput
          value={amount}
          onChange={(val) => setAmount(val ? val : 0)}
          placeholder="Rate"
          defaultValue={1}
          max={5000}
          min={0}
          step={10}
          parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, "") : "")}
          formatter={(value) =>
            value && !Number.isNaN(parseFloat(value))
              ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "$ "
          }
        />
      </td>
      <td>
        <NumberInput
          value={overUnderRate}
          onChange={(val) => setOverUnderRate(val ? val : 0)}
          placeholder="Rate"
          defaultValue={1}
          precision={2}
          max={1}
          min={0}
          step={0.1}
          parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, "") : "0")}
          formatter={(value) =>
            value && !Number.isNaN(parseFloat(value))
              ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "1"
          }
        />
      </td>
      <td>
        <MdDone size={32} strokeWidth={2} color="gold" />
      </td>
      <td style={{ position: "relative" }}>
        <Select
          variant="default"
          placeholder="Pick Team"
          data={selectableTeams}
        />
      </td>
      <td>
        <NumberInput
          value={gameWinnerOdd}
          onChange={(val) => setGameWinnerOdd(val ? val : 0)}
          placeholder="Rate"
          defaultValue={1}
          max={40}
          min={-40}
          step={3}
          parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, "") : "0")}
          formatter={(value) =>
            value && !Number.isNaN(parseFloat(value))
              ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : ""
          }
        />
      </td>
      <td>
        <NumberInput
          value={amount}
          onChange={(val) => setAmount(val ? val : 0)}
          placeholder="Rate"
          defaultValue={1}
          max={5000}
          min={0}
          step={10}
          parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, "") : "")}
          formatter={(value) =>
            value && !Number.isNaN(parseFloat(value))
              ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "$ "
          }
        />
      </td>
      <td>
        <NumberInput
          value={gameWinnerRate}
          onChange={(val) => setGameWinnerRate(val ? val : 0)}
          placeholder="Rate"
          defaultValue={1}
          precision={2}
          max={1}
          min={0}
          step={0.1}
          parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, "") : "1")}
          formatter={(value) =>
            value && !Number.isNaN(parseFloat(value))
              ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "1"
          }
        />
      </td>
      <td>
        <MdDone size={32} strokeWidth={2} color="gold" />
      </td>
      <td>total goes here</td>
      {/* <td>
        <Group spacing="xs">
          <ActionIcon
            color="green"
            title="Confirm bet"
            onClick={() => transactionsHandlers.remove(index)}
          >
            <MdDone size={32} />
          </ActionIcon>
          <ActionIcon
            color="red"
            title="Remove bet"
            onClick={() => transactionsHandlers.remove(index)}
          >
            <BsFillTrashFill size={18} />
          </ActionIcon>
        </Group>
      </td> */}
    </tr>
  );
};

export default BetRow;
