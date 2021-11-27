import { policyQueries } from "./policy";




const resolvers = {
  Query: {
    ...policyQueries,
  }
};

export default resolvers;
