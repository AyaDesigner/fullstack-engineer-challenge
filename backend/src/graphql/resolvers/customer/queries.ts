const data = [
  {
    firstName: "Marlon",
    lastName: "Brandon",
    dateOfBirth: new Date(),
  },
  {
    firstName: "Bruce",
    lastName: "Willis",
    dateOfBirth: new Date(),
  },
];

const customerQueries = {
  customers: () => data,
};

export default customerQueries;
