import TodaysScoreBoard from "./Models/TodaysScoreBoard";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    todaysScoreBoard: async (_: any, __: any, { dataSources }: any) => {
      return JSON.parse(await dataSources.liveData.getTodaysScoreBoard())
        .scoreboard;
    },
  },
};

export default resolvers;
