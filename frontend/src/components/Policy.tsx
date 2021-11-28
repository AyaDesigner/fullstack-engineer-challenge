import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_POLICY } from "../client/Mutation";

import clsx from "clsx";

const Policy = (policyData: any) => {
  const [updatePolicy, {data, loading, error}] = useMutation(UPDATE_POLICY);
  const [isEditable, setIsEditable] = useState(false);
  const [inputProvider, setInputProvider] = useState(policyData.provider);
  const [inputInsuranceType, setInputInsuranceType] = useState(
    policyData.insuranceType
  );
  const [inputPolicyStatus, setInputPolicyStatus] = useState(policyData.status);

  const saveUpdatedPolicyInfo = () => {
    const id = policyData.policyId;
    const policyToUpdate = {
      provider: inputProvider,
      insuranceType: inputInsuranceType,
      status: inputPolicyStatus,
    };
    updatePolicy({
      variables: { updatePolicyId: id, policyToUpdate : policyToUpdate },
    });
    setIsEditable(false);
  };

  return (
    <>
      <tr key={policyData.policyNumber}>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="ml-4">
            <div className="flex items-center">{policyData.policyNumber}</div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <input
              id="provider"
              value={inputProvider}
              className={clsx(
                `text-sm font-medium text-gray-900`,
                isEditable &&
                  `border-b border-gray-300 focus-within:border-indigo-600 focus:border-indigo-600 focus:ring-0`
              )}
              disabled={isEditable ? false : true}
              onChange={(event) => setInputProvider(event.target.value)}
            />
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">
            <input
              id="provider"
              value={inputInsuranceType}
              className={clsx(
                `text-sm font-medium text-gray-900`,
                isEditable &&
                  `mt-1 border-b border-gray-300 focus-within:border-indigo-600 focus:border-indigo-600 focus:ring-0`
              )}
              disabled={isEditable ? false : true}
              onChange={(event) => setInputInsuranceType(event.target.value)}
            />
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="">
            <input
              id="provider"
              value={inputPolicyStatus}
              className={clsx(
                `px-2 inline-flex text-xs leading-5 font-semibold text-sm font-medium text-gray-900`,
                inputPolicyStatus === "ACTIVE" && `rounded-full bg-green-100`,
                inputPolicyStatus === "PENDING" && `rounded-full bg-yellow-100`,
                inputPolicyStatus === "CANCELLED" && `rounded-full bg-red-100`,
                inputPolicyStatus === "DROPPED_OUT" &&
                  `rounded-full bg-gray-100`,
                isEditable &&
                  `mt-1 border-b border-gray-300 focus-within:border-indigo-600 focus:border-indigo-600 focus:ring-0`
              )}
              disabled={isEditable ? false : true}
              onChange={(event) => setInputPolicyStatus(event.target.value)}
            />
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">
            {policyData.customerFirstName}&nbsp;
            {policyData.customerLastName}
          </div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          {isEditable ? (
            <button
              className="text-indigo-600 hover:text-indigo-900"
              onClick={() => saveUpdatedPolicyInfo()}
            >
              Save
            </button>
          ) : (
            <button
              className="text-indigo-600 hover:text-indigo-900"
              onClick={() => setIsEditable(true)}
            >
              Edit
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export { Policy };
