import { ScoreBoard } from "../../types";

class TodaysScoreBoard {
  private scoreBoard: ScoreBoard;
  constructor(rawResult: string) {
    this.scoreBoard = JSON.parse(rawResult).scoreboard;
  }

  get ScoreBoard(): ScoreBoard {
    return this.scoreBoard;
  }
}

export default TodaysScoreBoard;
