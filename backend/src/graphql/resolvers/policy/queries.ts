import { Policy } from "../../../db/models/policy";

const policyQueries = {
  policies: async () => await Policy.find({}),
};

export default policyQueries;
