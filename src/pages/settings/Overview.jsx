import React, { useContext, useEffect } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiBox, FiGithub } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import config from "../../config";

const Overview = () => {
  const { activeOrg, activeOrgId, setActiveOrgId } = useContext(AuthContext);
  const { orgId } = useParams();
  useEffect(() => {
    if (!activeOrgId) {
      setActiveOrgId(orgId);
    }
  }, [activeOrgId, setActiveOrgId, orgId]);

  return (
    <div className="mt-8 pb-4 min-h-[90vh] w-11/12 md:max-w-[1000px] mx-auto pt-16 md:pt-0">
      <div className="space-y-8">
        <div className="pb-8">
          <h1 className="text-2xl font-semibold">Overview</h1>
          <p className="text-sm gap-1 text-gray-500">
            Manage your organization settings
          </p>
        </div>
        {/* <div className="h-[2px] w-full bg-gray-100"></div> */}
        <div>
          <h1 className="text-base font-semibold mb-2">
            Organization Settings
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col border shadow-sm rounded-lg">
              <div className="p-3 border-b flex items-center justify-start gap-2">
                <IoBagHandleOutline className="text-3xl" />
                <div>
                  <h3 className="font-semibold">Billing</h3>
                  <p className="text-sm text-gray-500">
                    Manage your subscription
                  </p>
                </div>
              </div>
              <div className="p-3 border-b ">
                <div className="w-8/12">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">Billing plan</p>
                    <h4 className="font-semibold">Professional</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">Trial ends</p>
                    <h4 className="font-semibold">31.05.2023</h4>
                  </div>
                </div>
              </div>
              <div className="p-3 text-end">
                <button className="p-2 bg-violet-500 text-white rounded-lg font-semibold text-sm">
                  Upgrade
                </button>
              </div>
            </div>
            <div className="flex flex-col border shadow-sm rounded-lg">
              <div className="p-3 border-b flex items-center justify-start gap-2">
                <div className="size-8 rounded-full bg-green-400 text-white font-semibold text-sm flex justify-center items-center">
                  {activeOrg?.orgName ? activeOrg?.orgName[0] : "N/A"}
                </div>
                <div>
                  <h3 className="font-semibold">Organization</h3>
                  <p className="text-sm text-gray-500">
                    Manage your subscription
                  </p>
                </div>
              </div>
              <div className="p-3 border-b ">
                <div className="w-8/12">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">Name: </p>
                    <h4 className="font-semibold">{activeOrg?.orgName}</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">Email: </p>
                    <h4 className="font-semibold">{activeOrg?.orgEmail}</h4>
                  </div>
                </div>
              </div>
              <div className="p-3 text-end">
                <Link
                  to={`/${activeOrg?._id}/settings/organization`}
                  className="p-2 border shadow-sm rounded-lg font-semibold text-sm"
                >
                  Upgrade
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="mb-3">
          <h1 className="text-base font-semibold mb-2">Your account</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col border shadow-sm rounded-lg">
              <div className="p-3 border-b flex items-center justify-start gap-2">
                <LuShield className="text-3xl" />
                <div>
                  <h3 className="font-semibold">Security recommendations</h3>
                  <p className="text-sm text-gray-500">
                    Improve your account security by enabling two-factor
                    authentication.
                  </p>
                </div>
              </div>

              <div className="p-3 text-end">
                <button className="p-2 border shadow-sm rounded-lg font-semibold text-sm">
                  Enable two-factor authentication
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="mb-3">
          <h1 className="text-base font-semibold mb-2">More</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link className="flex flex-col border shadow-sm rounded-lg">
              <div className="p-3 border-b flex items-start justify-start gap-2">
                <FaRegCircleQuestion className="text-2xl" />
                <div>
                  <h3 className="font-semibold">Start guide</h3>
                  <p className="text-sm text-gray-500">
                    Read how to get started with Saas UI Pro.
                  </p>
                </div>
              </div>
            </Link>
            <Link className="flex flex-col border shadow-sm rounded-lg">
              <div className="p-3 border-b flex items-start justify-start gap-2">
                <FiBox className="text-2xl" />
                <div>
                  <h3 className="font-semibold">Components</h3>
                  <p className="text-sm text-gray-500">
                    See all components and how they work
                  </p>
                </div>
              </div>
            </Link>
            <Link className="flex flex-col border shadow-sm rounded-lg">
              <div className="p-3 border-b flex items-start justify-start gap-2">
                <FiGithub className="text-2xl" />
                <div>
                  <h3 className="font-semibold">Roadmap</h3>
                  <p className="text-sm text-gray-500">
                    post feedback, bugs and feature requrests
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
