import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const Members = () => {
  return (
    <div className="w-11/12 mx-auto mt-6 pb-4">
      <div className="space-y-8">
        <div>
          <h1 className="text-xl font-semibold">Members</h1>
          <p className="text-sm gap-1 text-gray-500">
            Manage your organization settings
          </p>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Members</h1>
            <p className="text-sm gap-1 text-gray-500">
              Invite your colleagues
            </p>
          </div>
          <div className="col-span-5 w-full p-5 rounded-lg border shadow-sm space-y-5">
            <div className="flex gap-3">
              <input
                type="search"
                placeholder="Filter by name or email"
                className="border  rounded-lg p-1 w-full"
              />
              <button className="py-2 px-4 bg-violet-500 text-white font-semibold text-sm rounded-lg text-nowrap">
                Invite people
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center ">
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <span className="p-2 text-xs font-semibold rounded-full bg-green-300">
                      TA
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Reneta Alink</h3>
                    <p className="text-sm text-gray-500">hello@saas-ui.dev</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-300 text-xs px-2 py-1 rounded-full">
                      owner
                    </div>
                    <div className="bg-gray-300 text-xs px-2 py-1 rounded-full">
                      admin
                    </div>
                  </div>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={
                        <CiMenuKebab
                          presence="online"
                          className="text-xl"
                          src="/showcase-avatar.jpg"
                        />
                      }
                      variant="ghost"
                    />
                    <MenuList>
                      <MenuItem>
                        <button>Change role</button>
                      </MenuItem>
                      <MenuItem>
                        <button>Remove member</button>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <span className="p-2 text-xs font-semibold rounded-full bg-green-300">
                      TA
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Reneta Alink</h3>
                    <p className="text-sm text-gray-500">hello@saas-ui.dev</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-300 text-xs px-2 py-1 rounded-full">
                      owner
                    </div>
                    <div className="bg-gray-300 text-xs px-2 py-1 rounded-full">
                      admin
                    </div>
                  </div>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={
                        <CiMenuKebab
                          presence="online"
                          className="text-xl"
                          src="/showcase-avatar.jpg"
                        />
                      }
                      variant="ghost"
                    />
                    <MenuList>
                      <MenuItem>
                        <button>Change role</button>
                      </MenuItem>
                      <MenuItem>
                        <button>Remove member</button>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
