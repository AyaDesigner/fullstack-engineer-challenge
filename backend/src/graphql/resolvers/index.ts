import { customerQueries } from "./customer";
import { policyQueries } from "./policy";




const resolvers = {
  Query: {
    ...customerQueries,
    ...policyQueries,
  },
};

export default resolvers;
