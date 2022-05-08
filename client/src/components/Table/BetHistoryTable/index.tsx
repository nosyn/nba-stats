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
import { useListState } from "@mantine/hooks";
import { Game } from "../../../graphql/generated/graphql";
import { useState } from "react";
import BetRow from "./BetRow";

function randomId() {
  return Math.random();
}

type BetHistoryTableType = {
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

const BetHistoryTable = ({ games }: BetHistoryTableType) => {
  const [transactionsState, transactionsHandlers] = useListState([
    {
      id: 1,
      amount: 200,
      player: "Huy",
    },
  ]);

  const selectableGames = createSelectableGames(games);
  const [selectedGameId, setSelectedGameId] = useState(
    selectableGames[0].value
  );
  const selectedGame = games.find((game) => game.gameId === selectedGameId);
  const selectableTeams = createSelectableTeams(selectedGame);
  const [selectedTeamId, setSelectedTeamId] = useState(
    selectableGames[0].value
  );
  const [rate, setRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [odd, setOdd] = useState(0);
  const transactions = transactionsState.map((transaction, index) => (
    <tr key={transaction.id}>
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
          value={odd}
          onChange={(val) => setOdd(val ? val : 0)}
          placeholder="Rate"
          defaultValue={1}
          max={400}
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
          value={rate}
          onChange={(val) => setRate(val ? val : 0)}
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
          value={odd}
          onChange={(val) => setOdd(val ? val : 0)}
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
          value={rate}
          onChange={(val) => setRate(val ? val : 0)}
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
      <td>
        <TextInput
          value={transaction.amount}
          onChange={(event) =>
            transactionsHandlers.setItemProp(
              index,
              "amount",
              Number.isNaN(parseFloat(event.currentTarget.value))
                ? 0
                : parseFloat(event.currentTarget.value)
            )
          }
        />
      </td>
      <td>
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
      </td>
    </tr>
  ));

  return (
    <Paper shadow="xs" p="lg" style={{ overflowX: "auto" }}>
      <Table style={{ tableLayout: "fixed", minWidth: 500 }}>
        <thead>
          <tr>
            <th style={{ width: 220 }}>Games</th>
            <th style={{ width: 120 }}>Over/Under</th>
            <th style={{ width: 100 }}>Odd</th>
            <th style={{ width: 120 }}>Amount</th>
            <th style={{ width: 100 }}>Rate</th>
            <th style={{ width: 70 }}>Status</th>
            <th style={{ width: 140 }}>Game Winner</th>
            <th style={{ width: 100 }}>Odd</th>
            <th style={{ width: 120 }}>Amount</th>
            <th style={{ width: 100 }}>Rate</th>
            <th style={{ width: 70 }}>Status</th>
            <th style={{ width: 100 }}>Total</th>
            <th style={{ width: "100%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions}
          <tr>
            <td colSpan={14} style={{ borderBottomStyle: "dashed" }}>
              <Button
                variant="light"
                style={{ width: "100%" }}
                size="lg"
                onClick={() =>
                  transactionsHandlers.append({
                    id: randomId(),
                    amount: 0,
                    player: "Test Player",
                  })
                }
              >
                + Place a new bet
              </Button>
            </td>
          </tr>

          <BetRow games={games} />
          <tr>
            <td>
              <TextInput
                readOnly
                icon="$"
                styles={{
                  input: { textAlign: "center" },
                }}
                variant="unstyled"
                value={transactionsState.reduce(
                  (acc, transaction) => acc + transaction.amount,
                  0
                )}
              />
            </td>
            <td colSpan={4}>
              <Text size="sm" weight={500} style={{ paddingTop: 2 }}>
                Total for February 2021
              </Text>
            </td>
          </tr>
        </tbody>
      </Table>
    </Paper>
  );
};

export default BetHistoryTable;
