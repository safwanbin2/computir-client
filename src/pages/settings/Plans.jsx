import { DataTable } from "@saas-ui/react";
import React from "react";

const Plans = () => {
  const data = [
    {
      id: "1",
      title: "Users",
      limit: "Max 3",
      type: "Unlimited",
    },
    {
      id: "2",
      title: "Projects",
      limit: "Max 10",
      type: "Unlimited",
    },
    {
      id: "3",
      title: "Application Users",
      limit: "100",
      type: "Unlimited",
    },
    {
      id: "4",
      title: "API access",
      limit: "",
      type: "Unlimited",
    },
    {
      id: "5",
      title: "Support",
      limit: "Premium",
      type: "Priority",
    },
  ];

  return (
    <div className="mt-8 pb-4 min-h-[90vh] w-11/12 md:max-w-[1000px] mx-auto pt-16 md:pt-0">
      <div className="space-y-8">
        <div className="pb-8">
          <h1 className="text-2xl font-semibold">Billing Plans</h1>
          <p className="text-sm gap-1 text-gray-500">
            Manage your organization settings
          </p>
        </div>
        {/* <div className="h-[2px] w-full bg-gray-100"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end md:px-5">
          <div className="space-y-2">
            <p>Billing period</p>
            <div>
              <button className="py-2 px-2 text-sm font-semibold rounded-s-lg border shadow-sm">
                Pay monthly
              </button>
              <button className="py-2 px-2 text-sm font-semibold rounded-e-lg border shadow-sm">
                Pay yearly
              </button>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold">Studio</h2>
              <p className="text-sm text-gray-500 ">Perfect for small teams.</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <h2 className="text-2xl font-bold">$99</h2>
              <p className="text-gray-500">per user/month</p>
            </div>
            <button className="p-2 w-full text-sm font-semibold rounded-lg border shadow-sm bg-violet-500 text-white">
              Upgrade
            </button>
          </div>
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold">Studio</h2>
              <p className="text-sm text-gray-500 ">Perfect for small teams.</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <h2 className="text-2xl font-bold">$99</h2>
              <p className="text-gray-500">per user/month</p>
            </div>
            <button className="p-2 w-full text-sm font-semibold rounded-lg border shadow-sm bg-violet-500 text-white">
              Upgrade
            </button>
          </div>
        </div>
        <div>
          {data?.length
            ? data?.map((col) => (
                <div
                  key={col?.id}
                  className="border-b p-5 grid grid-cols-3 gap-5 text-sm"
                >
                  <h3 className="font-semibold">{col?.title}</h3>
                  <p className="text-gray-500">{col?.limit}</p>
                  <p className="text-gray-500">{col?.type}</p>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Plans;
