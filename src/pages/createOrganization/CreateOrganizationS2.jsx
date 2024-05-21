import React, { useContext, useState } from "react";
import rantirBlack from "../../assets/logos/rantirBlack.svg";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { useForm } from "react-hook-form";
import config from "../../config";

const CreateOrganizationS2 = () => {
  const [loading, setLoading] = useState(false);
  const {
    newOrgInfo,
    setNewOrgInfo,
    user,
    userDB,
    refetchList,
    setRefetchList,
  } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createOrgS2 = (data) => {
    setLoading(true);
    const newOrg = {
      ...newOrgInfo,
      members: [data?.members],
      orgEmail: user?.email || userDB?.email,
      orgOwnerId: userDB?._id,
      orgOwnerEmail: user?.email || userDB?.email,
    };

    fetch(`${config?.base_url}/organizations/create-organization`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrg),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data, newOrg });
        setLoading(false);
        setRefetchList(!refetchList);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-14 border-b shadow-sm">
        <div className="w-11/12 mx-auto flex  justify-start items-center gap-6 h-full">
          <Link to="/dashboard">
            <RiArrowLeftSLine className="text-2xl" />
          </Link>
          <div className="text-sm">
            <p className="text-gray-500">Logged in as</p>
            <p className="font-semibold">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-4/12 space-y-8 p-5 rounded-lg border shadow-sm">
        <div className="text-center">
          <div className="space-y-3 mb-3">
            <div className="flex  justify-center items-center gap-2">
              <img className="h-[20px]" src={rantirBlack} alt="" />
              <div className="p-1 bg-gray-100 shadow-lg rounded-lg font-semibold text-xs">
                CLOUD 1.2
              </div>
            </div>
            <h3 className="font-semibold">Invite your team</h3>
            <p className="text-gray-500 text-sm">
              Saas UI works better with your team.
            </p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(createOrgS2)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="orgName">Email address</label>
              <input
                className="border-2 p-1 rounded-lg w-full h-16"
                type="email"
                name="orgName"
                {...register("members")}
              />
            </div>

            <div className="w-full">
              <button
                // to={"/create-organization-s2"}
                type="submit"
                className="bg-violet-500 text-white w-full font-semibold text-sm p-2 rounded-lg inline-block text-center"
              >
                {loading ? "Creating..." : "Continue"}
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="size-2 rounded-full bg-violet-500"></div>
          <div className="size-2 rounded-full bg-violet-500"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrganizationS2;
