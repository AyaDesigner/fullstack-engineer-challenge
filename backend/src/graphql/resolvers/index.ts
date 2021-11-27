import { policyQueries, policyMutations } from "./policy";


const resolvers = {
  Query: {
    ...policyQueries,
  },
  Mutation: {
    ...policyMutations,
  },
};

export default resolvers;
