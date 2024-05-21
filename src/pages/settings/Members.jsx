import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Field, FormDialog, FormLayout, useModals } from "@saas-ui/react";
import { FiUsers, FiTag, FiArchive } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import config from "../../config";
import { useParams } from "react-router-dom";

const Members = () => {
  const { activeOrg, activeOrgId, setActiveOrgId } = useContext(AuthContext);
  const [refetch, setRefetch] = useState(false);
  const [members, setMembers] = useState([]);
  const [membershipId, setMembershipId] = useState(null);
  const { orgId } = useParams();

  const disclosure = useDisclosure();
  const disclosureRole = useDisclosure();
  const modals = useModals();
  const initialRef = useRef();

  const onAddSubmit = async (data) => {
    disclosure.onClose();
    const newInvite = {
      email: data?.email,
      orgId: activeOrg?._id || activeOrgId,
      orgName: activeOrg?.orgName,
      role: data?.role,
    };

    fetch(`${config?.base_url}/organizations/membership/invite`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInvite),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefetch(!refetch);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onRoleSubmit = async (data) => {
    disclosureRole.onClose();
    if (membershipId && data?.role) {
      fetch(
        `${config?.base_url}/organizations/membership/update-role?membershipId=${membershipId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRefetch(!refetch);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    fetch(
      `${config?.base_url}/organizations/membership/list?orgId=${activeOrgId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMembers(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeOrgId, refetch]);

  useEffect(() => {
    if (!activeOrgId) {
      setActiveOrgId(orgId);
    }
  }, [activeOrgId, setActiveOrgId, orgId]);

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
            <div className="col-span-5 p-5 rounded-lg border shadow-sm space-y-5">
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
              <div className="flex flex-col gap-6 md:gap-4">
                {members?.length
                  ? members?.map((member) => (
                      <div
                        key={member?._id}
                        className="flex flex-col md:flex-row justify-between items-start  md:items-center gap-2 md:gap-0"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <div className="rounded-full bg-green-300 h-8 w-8 flex justify-center items-center">
                            <span className="text-xs font-semibold ">
                              {member?.memberId?.firstName
                                ? member?.memberId?.firstName[0]
                                : "N/A"}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold">
                              {member?.memberId?.firstName
                                ? member?.memberId?.firstName
                                : "N/A"}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {member?.memberEmail}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                          <div className="flex items-center justify-center gap-2">
                            <div className="bg-gray-300 text-xs px-2 py-1 rounded-full">
                              {member?.role}
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
                                <button
                                  onClick={() => {
                                    setMembershipId(member?._id);
                                    disclosureRole.onOpen();
                                  }}
                                >
                                  Change role
                                </button>
                              </MenuItem>
                              <MenuItem>
                                {/* <button>Remove member</button> */}
                                <button
                                  onClick={() =>
                                    modals.confirm({
                                      title: "Remove member",
                                      body: `Are you sure you want to remove ${member?.memberEmail} from ${activeOrg?.orgName}?`,
                                      confirmProps: {
                                        colorScheme: "red",
                                        label: "Remove",
                                      },
                                      onConfirm: () => {
                                        fetch(
                                          `${config?.base_url}/organizations/membership/remove?membershipId=${member?._id}`,
                                          {
                                            method: "DELETE",
                                          }
                                        )
                                          .then((res) => res.json())
                                          .then((data) => {
                                            console.log(data);
                                            setRefetch(!refetch);
                                          })
                                          .catch((err) => {
                                            console.log(err);
                                          });
                                      }, // action
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
                    ))
                  : ""}
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
        // initialFocusRef={initialRef}
      >
        <FormLayout>
          <Field
            name="email"
            type="email"
            label=""
            className="!h-16"
            rules={{ required: "Add an email address" }}
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
            // ref={initialRef}
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
