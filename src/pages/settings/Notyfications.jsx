import React from "react";

const Notyfications = () => {
  return (
    <div className="w-11/12 mx-auto mt-6 pb-4">
      <div className="space-y-8">
        <div>
          <h1 className="text-xl font-semibold">Notyfications</h1>
          <p className="text-sm gap-1 text-gray-500">
            Manage how and where you want to be notified.
          </p>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Notyfication channels</h1>
            <p className="text-sm gap-1 text-gray-500">
              Where can we notify you?
            </p>
          </div>
          <div className="col-span-5">
            <div className="w-full rounded-lg border shadow-sm text-sm">
              <div className="flex justify-between items-center border-b p-3">
                <div>
                  <p>Email</p>
                  <p className="text-gray-500 text-xs">
                    Receive a daily email digest.
                  </p>
                </div>
                <div className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border bg-gray-300 peer-checked:bg-violet-500"
                  />
                  <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-7 peer-checked:bg-white"></span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3">
                <div>
                  <p>Desktop</p>
                  <p className="text-gray-500 text-xs">
                    Receive desktop notyfications.
                  </p>
                </div>
                <div className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border bg-gray-300 peer-checked:bg-violet-500"
                  />
                  <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-7 peer-checked:bg-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Notyfication Topics</h1>
            <p className="text-sm gap-1 text-gray-500">Notify me when...</p>
          </div>
          <div className="col-span-5">
            <div className="w-full rounded-lg border shadow-sm text-sm">
              <div className="">
                <p className="px-3 pt-3 text-gray-500 text-base">Contacts</p>
                <div className="flex justify-between items-center p-3">
                  <div>
                    <p>A new lead is added.</p>
                  </div>
                  <div className="relative inline-block">
                    <input
                      type="checkbox"
                      className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border bg-gray-300 peer-checked:bg-violet-500"
                    />
                    <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-7 peer-checked:bg-white"></span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 pt-0 border-b">
                  <div>
                    <p>An account has upgraded</p>
                  </div>
                  <div className="relative inline-block">
                    <input
                      type="checkbox"
                      className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border bg-gray-300 peer-checked:bg-violet-500"
                    />
                    <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-7 peer-checked:bg-white"></span>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="px-3 pt-3 text-gray-500 text-base">Inbox</p>
                <div className="flex justify-between items-center p-3">
                  <div>
                    <p>A message is assigned to me.</p>
                  </div>
                  <div className="relative inline-block">
                    <input
                      type="checkbox"
                      className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border bg-gray-300 peer-checked:bg-violet-500"
                    />
                    <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-7 peer-checked:bg-white"></span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 pt-0 border-b">
                  <div>
                    <p>Somebody mentions me.</p>
                  </div>
                  <div className="relative inline-block">
                    <input
                      type="checkbox"
                      className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border bg-gray-300 peer-checked:bg-violet-500"
                    />
                    <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-7 peer-checked:bg-white"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Account updates</h1>
            <p className="text-sm gap-1 text-gray-500">Notify me when...</p>
          </div>
          <div className="col-span-5">
            <div className="w-full rounded-lg border shadow-sm text-sm">
              <div className="flex justify-between items-center border-b p-3">
                <div>
                  <p>Products updates</p>
                  <p className="text-gray-500 text-xs">
                    Receive a weekly email with all new features and updates.
                  </p>
                </div>
                <div className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border bg-gray-300 peer-checked:bg-violet-500"
                  />
                  <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-7 peer-checked:bg-white"></span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3">
                <div>
                  <p>Import updates</p>
                  <p className="text-gray-500 text-xs">
                    Receive emails about important updates like security fixes,
                    maintenance, etc.
                  </p>
                </div>
                <div className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border bg-gray-300 peer-checked:bg-violet-500"
                  />
                  <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-7 peer-checked:bg-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notyfications;
