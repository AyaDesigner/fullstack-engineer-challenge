const data = [
  {
    customer: {
      firstName: "Marlon",
      lastName: "Brandon",
      dateOfBirth: new Date(),
    },
    provider: "AXA",
    insuranceType: "HEALTH",
    status: "ACTIVE",
    policyNumber: "11",
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
  },
  {
    customer: {
      firstName: "Marlon",
      lastName: "Brandon",
      dateOfBirth: new Date(),
    },
    provider: "AXASASASAS",
    insuranceType: "HEALTH",
    status: "ACTIVE",
    policyNumber: "12",
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
  },
  {
    customer: {
      firstName: "Marlon",
      lastName: "Brandon",
      dateOfBirth: new Date(),
    },
    provider: "AXASASASAS",
    insuranceType: "HEALTH",
    status: "ACTIVE",
    policyNumber: "13",
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
  },
  {
    customer: {
      firstName: "Marlon",
      lastName: "Brandon",
      dateOfBirth: new Date(),
    },
    provider: "AXASASASAS",
    insuranceType: "HEALTH",
    status: "ACTIVE",
    policyNumber: "14",
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
  },
];

const policyQueries = {
  policies: () => data,
};

export default policyQueries;
