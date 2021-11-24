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
    policyNumber: "12",
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
  },
];

const policyQueries = {
  policies: () => data,
};

export default policyQueries;
