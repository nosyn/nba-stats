export const PORT = process.env.PORT || 5000;
export const CORS_CONFIG = {
  credentials: true,
  origin: ["https://studio.apollographql.com"],
};
export const GRAPHQL_PATH = process.env.GRAPHQL_PATH || "/graphql";
