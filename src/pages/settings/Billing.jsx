import React from "react";
import { Link } from "react-router-dom";

const Billing = () => {
  return (
    <div className="mt-8 pb-4 min-h-[90vh] w-11/12 md:max-w-[1000px] mx-auto pt-16 md:pt-0">
      <div className="space-y-8">
        <div className="pb-8">
          <h1 className="text-2xl font-semibold">Billing</h1>
          <p className="text-sm gap-1 text-gray-500">
            Manage your organization settings
          </p>
        </div>
        {/* <div className="h-[2px] w-full bg-gray-100"></div> */}
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Billing Plans</h1>
            <p className="text-sm gap-1 text-gray-500">
              Update your billing plan.
            </p>
          </div>
          <div className="col-span-5 w-full p-5 rounded-lg border shadow-sm text-sm">
            <p>
              You are currently on the{" "}
              <span className="font-semibold">Professional</span> plan.
            </p>
            <p className="mt-3 mb-5">Your trial ends 31.05.2023</p>
            <div>
              <Link className="p-2 border shadow-sm rounded-lg font-semibold text-sm bg-gray-100">
                View plans and upgrade
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Billing email</h1>
            <p className="text-sm gap-1 text-gray-500">
              Send invoices to an alternative address
            </p>
          </div>
          <div className="col-span-5 w-full p-5 rounded-lg border shadow-sm text-sm">
            <form className="space-y-3">
              <div className="space-y-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className="p-1 rounded-lg border w-full"
                />
              </div>
              <button className="px-2 py-1 bg-violet-500 text-white rounded-lg font-semibold text-sm">
                Update
              </button>
            </form>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Invoices</h1>
            <p className="text-sm gap-1 text-gray-500">
              invoices are sent on the first of every month
            </p>
          </div>
          <div className="col-span-5 w-full p-5 rounded-lg border shadow-sm text-sm">
            <p className="text-gray-500">No invoices received yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
