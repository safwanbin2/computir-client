import React from "react";

const Security = () => {
  return (
    <div className="mt-8 pb-4 min-h-[90vh] w-11/12 md:max-w-[1000px] mx-auto pt-16 md:pt-0">
      <div className="space-y-8">
        <div className="pb-8">
          <h1 className="text-2xl font-semibold">Security</h1>
          <p className="text-sm gap-1 text-gray-500">
            Manage your account security
          </p>
        </div>
        {/* <div className="h-[2px] w-full bg-gray-100"></div> */}
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Signing in</h1>
            <p className="text-sm gap-1 text-gray-500">
              Update your password and improve account security.
            </p>
          </div>
          <div className="col-span-5">
            <div className="w-full rounded-lg border shadow-sm text-sm">
              <div className="flex justify-between items-center border-b p-3">
                <p>Password</p>
                <p className="text-gray-500 text-xs">
                  Last changed January 1st 2022
                </p>
              </div>
              <div className="flex justify-between items-center p-3">
                <p>Two-factor authentication</p>
                <p className="text-gray-500 text-xs">Not enabled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
