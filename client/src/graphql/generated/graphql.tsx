import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Game = {
  __typename?: 'Game';
  awayTeam: Team;
  gameClock: Scalars['String'];
  gameCode: Scalars['String'];
  gameEt: Scalars['String'];
  gameId: Scalars['String'];
  gameLeaders: GameLeaders;
  gameStatus: Scalars['Int'];
  gameStatusText: Scalars['String'];
  gameTimeUTC: Scalars['String'];
  homeTeam: Team;
  ifNecessary: Scalars['Boolean'];
  pbOdds: PbOdds;
  period: Scalars['Int'];
  regulationPeriods: Scalars['Int'];
  seriesGameNumber: Scalars['String'];
  seriesText: Scalars['String'];
};

export type GameLeaders = {
  __typename?: 'GameLeaders';
  awayLeaders: Player;
  homeLeaders: Player;
};

export type PbOdds = {
  __typename?: 'PbOdds';
  odds: Scalars['Float'];
  suspended: Scalars['Int'];
  team?: Maybe<Scalars['String']>;
};

export type Period = {
  __typename?: 'Period';
  period: Scalars['Int'];
  periodType: Scalars['String'];
  score: Scalars['Int'];
};

export type Player = {
  __typename?: 'Player';
  assists: Scalars['Int'];
  jerseyNum: Scalars['String'];
  name: Scalars['String'];
  personId: Scalars['Int'];
  playerSlug?: Maybe<Scalars['String']>;
  points: Scalars['Int'];
  position: Scalars['String'];
  rebounds: Scalars['Int'];
  teamTricode: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  todaysScoreBoard: TodaysScoreBoard;
};

export type Team = {
  __typename?: 'Team';
  inBonus?: Maybe<Scalars['Int']>;
  losses: Scalars['Int'];
  periods: Array<Maybe<Period>>;
  score: Scalars['Int'];
  seed: Scalars['Int'];
  teamCity: Scalars['String'];
  teamId: Scalars['Int'];
  teamName: Scalars['String'];
  teamTricode: Scalars['String'];
  timeoutsRemaining: Scalars['Int'];
  wins: Scalars['Int'];
};

export type TodaysScoreBoard = {
  __typename?: 'TodaysScoreBoard';
  gameDate: Scalars['String'];
  games: Array<Maybe<Game>>;
  leagueId: Scalars['String'];
  leagueName: Scalars['String'];
};

export type TodaysScoreBoardQueryVariables = Exact<{ [key: string]: never; }>;


export type TodaysScoreBoardQuery = { __typename?: 'Query', todaysScoreBoard: { __typename?: 'TodaysScoreBoard', gameDate: string, leagueId: string, leagueName: string, games: Array<{ __typename?: 'Game', gameId: string, gameCode: string, gameStatus: number, gameStatusText: string, period: number, gameClock: string, gameTimeUTC: string, regulationPeriods: number, ifNecessary: boolean, gameEt: string, seriesGameNumber: string, seriesText: string, homeTeam: { __typename?: 'Team', teamId: number, teamName: string, teamCity: string, wins: number, losses: number, teamTricode: string, score: number, seed: number, inBonus?: number | null, timeoutsRemaining: number, periods: Array<{ __typename?: 'Period', score: number, periodType: string, period: number } | null> }, awayTeam: { __typename?: 'Team', teamName: string, teamId: number, teamCity: string, teamTricode: string, wins: number, losses: number, score: number, seed: number, inBonus?: number | null, timeoutsRemaining: number, periods: Array<{ __typename?: 'Period', score: number, periodType: string, period: number } | null> }, gameLeaders: { __typename?: 'GameLeaders', awayLeaders: { __typename?: 'Player', personId: number, name: string, jerseyNum: string, position: string, teamTricode: string, playerSlug?: string | null, points: number, rebounds: number, assists: number }, homeLeaders: { __typename?: 'Player', personId: number, name: string, jerseyNum: string, position: string, teamTricode: string, playerSlug?: string | null, rebounds: number, points: number, assists: number } }, pbOdds: { __typename?: 'PbOdds', suspended: number, odds: number, team?: string | null } } | null> } };


export const TodaysScoreBoardDocument = gql`
    query TodaysScoreBoard {
  todaysScoreBoard {
    gameDate
    leagueId
    leagueName
    games {
      gameId
      gameCode
      gameStatus
      gameStatusText
      period
      gameClock
      gameTimeUTC
      regulationPeriods
      ifNecessary
      gameEt
      seriesGameNumber
      seriesText
      homeTeam {
        periods {
          score
          periodType
          period
        }
        teamId
        teamName
        teamCity
        wins
        losses
        teamTricode
        score
        seed
        inBonus
        timeoutsRemaining
      }
      awayTeam {
        periods {
          score
          periodType
          period
        }
        teamName
        teamId
        teamCity
        teamTricode
        wins
        losses
        score
        seed
        inBonus
        timeoutsRemaining
      }
      gameLeaders {
        awayLeaders {
          personId
          name
          jerseyNum
          position
          teamTricode
          playerSlug
          points
          rebounds
          assists
        }
        homeLeaders {
          personId
          name
          jerseyNum
          position
          teamTricode
          playerSlug
          rebounds
          points
          assists
        }
      }
      pbOdds {
        suspended
        odds
        team
      }
    }
  }
}
    `;

/**
 * __useTodaysScoreBoardQuery__
 *
 * To run a query within a React component, call `useTodaysScoreBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodaysScoreBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodaysScoreBoardQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodaysScoreBoardQuery(baseOptions?: Apollo.QueryHookOptions<TodaysScoreBoardQuery, TodaysScoreBoardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodaysScoreBoardQuery, TodaysScoreBoardQueryVariables>(TodaysScoreBoardDocument, options);
      }
export function useTodaysScoreBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodaysScoreBoardQuery, TodaysScoreBoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodaysScoreBoardQuery, TodaysScoreBoardQueryVariables>(TodaysScoreBoardDocument, options);
        }
export type TodaysScoreBoardQueryHookResult = ReturnType<typeof useTodaysScoreBoardQuery>;
export type TodaysScoreBoardLazyQueryHookResult = ReturnType<typeof useTodaysScoreBoardLazyQuery>;
export type TodaysScoreBoardQueryResult = Apollo.QueryResult<TodaysScoreBoardQuery, TodaysScoreBoardQueryVariables>;