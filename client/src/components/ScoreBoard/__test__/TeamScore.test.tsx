import TeamScore from "../TeamScore";
import { render, screen } from "@testing-library/react";
import { Team } from "../../../graphql/generated/graphql";
import { todaysScoreBoard } from "../../../../__mocks__";

const teamMock = todaysScoreBoard.games[0].homeTeam;

describe("TeamScore component", () => {
  it("exists", () => {
    expect(TeamScore).toBeDefined();
  });

  it("renders TeamScore Component", () => {
    render(<TeamScore team={teamMock as Team} />);

    screen.debug();
  });
});
