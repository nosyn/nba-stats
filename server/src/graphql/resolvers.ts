const resolvers = {
  Query: {
    todaysScoreBoard: async (_: any, __: any, { dataSources }: any) => {
      return JSON.parse(await dataSources.liveData.getTodaysScoreBoard())
        .scoreboard;
    },
  },
};

export default resolvers;
