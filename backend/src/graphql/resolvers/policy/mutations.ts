import { Policy } from "../../../db/models/policy";

const policyMutations = {
  updatePolicy: async (
    _: any,
    { id, policyToUpdate }: { id: string; policyToUpdate: any }
  ) => {
    console.log(id);
    console.log(policyToUpdate);

    const updatedPolicy = await Policy.findByIdAndUpdate(
      id,
      {
        $set: { ...policyToUpdate },
      },
      { new: true }
    );

    return updatedPolicy;
  },
};

export default policyMutations;
