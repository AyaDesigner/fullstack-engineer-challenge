import { gql } from "apollo-boost";

export const UPDATE_POLICY = gql`
  mutation Mutation($updatePolicyId: ID!, $policyToUpdate: PolicyInput) {
    updatePolicy(id: $updatePolicyId, policyToUpdate: $policyToUpdate) {
      provider
      insuranceType
      status
      startDate
      createdAt
      endDate
    }
  }
`;
