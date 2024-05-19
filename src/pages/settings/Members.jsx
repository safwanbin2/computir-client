import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Field, FormDialog, FormLayout, useModals } from "@saas-ui/react";
import { FiUsers, FiTag, FiArchive } from "react-icons/fi";

const Members = () => {
  const disclosure = useDisclosure();
  const disclosureRole = useDisclosure();
  const modals = useModals();
  const initialRef = useRef();

  const onAddSubmit = async (data) => {
    disclosure.onClose();
  };

  const onRoleSubmit = async (data) => {
    disclosureRole.onClose();
  };

  return (
    <>
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
                {/* <button className="py-2 px-4 bg-violet-500 text-white font-semibold text-sm rounded-lg text-nowrap">
                  Invite people
                </button> */}
                <Button
                  className="py-2 px-4 !bg-violet-500 !text-white font-semibold text-sm rounded-lg text-nowrap"
                  onClick={() => disclosure.onOpen()}
                >
                  Invite people
                </Button>
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
                          <button onClick={() => disclosureRole.onOpen()}>
                            Change role
                          </button>
                        </MenuItem>
                        <MenuItem>
                          {/* <button>Remove member</button> */}
                          <button
                            onClick={() =>
                              modals.confirm({
                                title: "Remove member",
                                body: "Are you sure you want to remove xyz from xyz?",
                                confirmProps: {
                                  colorScheme: "red",
                                  label: "Remove",
                                },
                                onConfirm: () => {}, // action
                              })
                            }
                          >
                            Remove Member
                          </button>
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

      <FormDialog
        title="Invite people"
        defaultValues={{ title: "" }}
        {...disclosure}
        onSubmit={onAddSubmit}
        initialFocusRef={initialRef}
      >
        <FormLayout>
          <Field
            name="email"
            type="textarea"
            label=""
            rules={{ required: "Add at least one email address" }}
          />
          <Field
            name="role"
            label="Role"
            type="select"
            options={[
              {
                value: "admin",
                label: "Admin",
              },
              {
                value: "member",
                label: "Member",
              },
            ]}
            ref={initialRef}
          />
        </FormLayout>
      </FormDialog>

      <FormDialog
        title="Update roles"
        defaultValues={{ title: "" }}
        {...disclosureRole}
        onSubmit={onRoleSubmit}
        // initialFocusRef={initialRef}
      >
        <FormLayout>
          <Field
            name="role"
            label=""
            type="radio"
            options={[
              {
                value: "admin",
                label: "Admin",
              },
              {
                value: "member",
                label: "Member",
              },
            ]}
            // ref={initialRef}
          />
        </FormLayout>
      </FormDialog>
    </>
  );
};

export default Members;
