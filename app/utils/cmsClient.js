import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.CRAFT_CMS_GRAPHQL_ENDPOINT);

export default client;
