import React, { useEffect, useState } from "react";
import { GET_POLICIES } from "../client/Query";
import { useQuery } from "@apollo/react-hooks";
import { SearchIcon } from "@heroicons/react/solid";

const Policies = () => {
  const { loading, error, data } = useQuery(GET_POLICIES);
  const [policiesData, setPolicesData] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState("");

  useEffect(() => {
    console.log(
      `You clicked ${data} times, this loading ${loading}, this is error ${error}`
    );
    if (data?.policies) {
      setPolicesData(data.policies);
    }
  }, [loading]);

  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
               
                <div className="flex-1 pb-2 flex justify-center lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                        onChange={(event) =>
                          setInputSearchValue(event.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Provider{" "}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Policy
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Policy number
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {policiesData
                      .map((policy: any) => (
                        <tr key={policy.policyNumber}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {policy.provider}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {}
                            <div className="text-sm text-gray-900">
                              {policy.provider}
                            </div>
                            <div className="text-sm text-gray-500">
                              {policy.insuranceType}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {policy.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {policy.policyNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href="/"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Policies };
