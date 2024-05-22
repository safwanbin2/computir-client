import React from "react";
import { Link } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Api = () => {
  return (
    <div className="mt-8 pb-4 min-h-[90vh] w-11/12 md:max-w-[1000px] mx-auto pt-16 md:pt-0">
      <div className="space-y-8">
        <div className="pb-8">
          <h1 className="text-2xl font-semibold">API access</h1>
          <p className="text-sm gap-1 text-gray-500">Access the Saas UI API</p>
        </div>
        {/* <div className="h-[2px] w-full bg-gray-100"></div> */}
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Personal access tokens</h1>
            <p className="text-sm gap-1 text-gray-500">
              Use personal access tokens to access the API.
            </p>
            <Link className="hover:underline text-gray-500 text-sm">
              Read documentation
            </Link>
          </div>
          <div className="col-span-5">
            <div className="w-full rounded-lg border shadow-sm">
              <div className="flex justify-between items-center border-b p-3">
                <p>12345</p>
                <div className="flex items-center justify-center gap-5">
                  <button>
                    <IoCopyOutline />
                  </button>
                  <button>
                    <RxCross2 />
                  </button>
                </div>
              </div>
              <div className="text-end p-3">
                <button className="px-2 py-1 bg-violet-500 text-white rounded-lg font-semibold text-sm">
                  Create new token
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;
