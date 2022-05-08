import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    todaysScoreBoard: TodaysScoreBoard!
  }

  type TodaysScoreBoard {
    gameDate: String!
    leagueId: String!
    leagueName: String!
    games: [Game!]!
  }

  type Game {
    gameId: String!
    gameCode: String!
    gameStatus: Int!
    gameStatusText: String!
    period: Int!
    gameClock: String!
    gameTimeUTC: String!
    gameEt: String!
    regulationPeriods: Int!
    ifNecessary: Boolean!
    seriesGameNumber: String!
    seriesText: String!
    homeTeam: Team!
    awayTeam: Team!
    gameLeaders: GameLeaders!
    pbOdds: PbOdds!
  }

  type Team {
    teamId: Int!
    teamName: String!
    teamCity: String!
    teamTricode: String!
    wins: Int!
    losses: Int!
    score: Int!
    seed: Int!
    inBonus: Int
    timeoutsRemaining: Int!
    periods: [Period!]!
  }

  type GameLeaders {
    homeLeaders: Player!
    awayLeaders: Player!
  }

  type Player {
    personId: Int!
    name: String!
    jerseyNum: String!
    position: String!
    teamTricode: String!
    playerSlug: String
    points: Int!
    rebounds: Int!
    assists: Int!
  }

  type PbOdds {
    team: String
    odds: Float!
    suspended: Int!
  }

  type Period {
    period: Int!
    periodType: String!
    score: Int!
  }
`;

export default typeDefs;
