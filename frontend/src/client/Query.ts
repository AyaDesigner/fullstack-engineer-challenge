import { gql } from "apollo-boost";


export const GET_POLICIES = gql`
  query Query {
    policies {
      provider
      customer {
        firstName
        lastName
        dateOfBirth
      }
      _id
      insuranceType
      status
      policyNumber
      startDate
      endDate
      createdAt
    }
  }
`;
