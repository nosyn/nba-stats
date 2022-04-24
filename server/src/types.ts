export type PbOdds = {
  team: null | string;
  odds: number;
  suspended: number;
};

export type Player = {
  personId: number;
  name: string;
  jerseyNum: string;
  position: string;
  teamTricode: string;
  playerSlug: null | number;
  points: number;
  rebounds: number;
  assists: number;
};

export type Period = {
  period: number;
  periodType: string;
  score: number;
};

export type Team = {
  teamId: number;
  teamName: String;
  teamCity: String;
  teamTricode: String;
  wins: number;
  losses: number;
  score: number;
  seed: number;
  inBonus: null;
  timeoutsRemaining: number;
  periods: Period[];
};

export type Game = {
  gameId: string;
  gameCode: string;
  gameStatus: number;
  gameStatusText: string;
  period: number;
  gameClock: string;
  gameTimeUTC: string;
  gameEt: string;
  regulationPeriods: number;
  ifNecessary: boolean;
  seriesGameNumber: string;
  seriesText: string;
  homeTeam: Team;
  awayTeam: Team;
  gameLeaders: {
    homeLeaders: Player;
    awayLeaders: Player;
  };
  pbOdds: PbOdds;
};

export type Games = Game[];

export type ScoreBoard = {
  gameDate: string;
  leagueId: string;
  leagueName: string;
  games: Games;
};
