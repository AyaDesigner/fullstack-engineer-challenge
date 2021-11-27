import React, { useState } from "react";
import clsx from "clsx";

const Policy = (policyData: any) => {
  const [isEditable, setIsEditable] = useState(false);

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
              value={policyData.provider}
              className={clsx(
                `text-sm font-medium text-gray-900`,
                isEditable &&
                  `mt-1 border-b border-gray-300 focus-within:border-indigo-600 focus:border-indigo-600 focus:ring-0`
              )}
              placeholder={policyData.provider}
              disabled={isEditable ? false : true}
            />
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">
            <input
              id="provider"
              value={policyData.insuranceType}
              className={clsx(
                `text-sm font-medium text-gray-900`,
                isEditable &&
                  `mt-1 border-b border-gray-300 focus-within:border-indigo-600 focus:border-indigo-600 focus:ring-0`
              )}
              placeholder={policyData.insuranceType}
              disabled={isEditable ? false : true}
            />
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            <input
              id="provider"
              value={policyData.status}
              className={clsx(
                `text-sm font-medium text-gray-900`,
                isEditable &&
                  `mt-1 border-b border-gray-300 focus-within:border-indigo-600 focus:border-indigo-600 focus:ring-0`
              )}
              placeholder={policyData.status}
              disabled={isEditable ? false : true}
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
              onClick={() => setIsEditable(false)}
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
