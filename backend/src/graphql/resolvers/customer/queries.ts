import { Customer } from "../../../db/models/customer";

const customerQueries = {
  customers: async () => await Customer.find({}),
};

export default customerQueries;
