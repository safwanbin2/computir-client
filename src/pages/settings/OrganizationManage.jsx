import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { useForm } from "react-hook-form";
import config from "../../config";
import { useParams } from "react-router-dom";

const OrganizationManage = () => {
  const {
    activeOrg,
    refetchActiveOrg,
    setRefetchActiveOrg,
    setActiveOrgId,
    activeOrgId,
  } = useContext(AuthContext);
  const { orgId } = useParams();
  const { orgName, _id, orgEmail } = activeOrg ?? {};
  const { register, handleSubmit } = useForm({ activeOrg });

  const updateOrg = (data) => {
    fetch(
      `${config?.base_url}/organizations/update-organization?orgId=${activeOrg?._id}`,
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
        setRefetchActiveOrg(!refetchActiveOrg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!activeOrgId) {
      setActiveOrgId(orgId);
    }
  }, [activeOrgId, setActiveOrgId, orgId]);

  return (
    <div className="w-11/12 mx-auto mt-6 pb-4">
      <div className="space-y-8">
        <div>
          <h1 className="text-xl font-semibold">Overview</h1>
          <p className="text-sm gap-1 text-gray-500">
            Manage your organization settings
          </p>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Organization details</h1>
            <p className="text-sm gap-1 text-gray-500">
              Basic details about your organization.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(updateOrg)}
            className="col-span-5 w-full p-5 rounded-lg border shadow-sm space-y-2"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="orgName" className="text-sm font-semibold">
                Organization name
              </label>
              <input
                defaultValue={orgName ?? orgName}
                type="text"
                className="p-1 border rounded-lg"
                {...register("orgName", { required: "Org name is required" })}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="orgName" className="text-sm font-semibold">
                Email address
              </label>
              <input
                defaultValue={orgEmail ?? orgEmail}
                type="email"
                className="p-1 border rounded-lg"
                {...register("orgEmail", { required: "Org email is required" })}
              />
            </div>
            <div>
              <button className="py-2 px-4 bg-violet-500 text-white font-semibold text-sm rounded-lg">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrganizationManage;
