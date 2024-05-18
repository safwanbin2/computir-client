import React, { useContext, useState } from "react";
import UploadImage from "../../components/ui/UploadImage";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { useForm } from "react-hook-form";
import config from "../../config";

const Profile = () => {
  const { user, userDB, setRefetchUserDB, refetchUserDB } =
    useContext(AuthContext);
  const [updateLoading, setUpdateLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateProfile = (data) => {
    setUpdateLoading(true);
    fetch(`${config?.base_url}/users/update?email=${user?.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdateLoading(false);
        setRefetchUserDB(!refetchUserDB);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setUpdateLoading(false);
      });
  };

  return (
    <div className="w-11/12 mx-auto mt-6 pb-4">
      <div className="space-y-8">
        <div>
          <h1 className="text-xl font-semibold">Profile</h1>
          <p className="text-sm gap-1 text-gray-500">Manage your profile</p>
        </div>
        <div className="h-[2px] w-full bg-gray-100"></div>
        <div className="grid md:grid-cols-7 gap-5">
          <div className="col-span-2">
            <h1 className="text-base font-semibold">Basic details</h1>
            <p className="text-sm gap-1 text-gray-500">
              Update your personal information.
            </p>
          </div>
          <div className="col-span-5 w-full p-5 rounded-lg border shadow-sm text-sm">
            <form onSubmit={handleSubmit(updateProfile)} className="space-y-3">
              <div className="space-y-3">
                <label htmlFor="profile">Profile picture</label>
                <UploadImage />
              </div>
              <div className="space-y-3">
                <label htmlFor="firstName">First name</label>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="border-2 p-1 rounded-lg w-full"
                  type="text"
                  name="firstName"
                  defaultValue={userDB?.firstName}
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  {...register("lastName", {})}
                  defaultValue={userDB?.lastName}
                  type="text"
                  name="lastName"
                  id=""
                  className="p-1 rounded-lg border w-full"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email">Email</label>
                <input
                  disabled
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                  id=""
                  className="p-1 rounded-lg border w-full"
                />
              </div>
              <button className="px-2 py-1 bg-violet-500 text-white rounded-lg font-semibold text-sm">
                {updateLoading ? "Loading..." : "Update"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
