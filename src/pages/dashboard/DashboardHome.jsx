import React, { useContext } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiBox, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import StatusDot from "../../components/ui/StatusDot";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const DashboardHome = () => {
  const { user, userDB } = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto mt-6">
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            Welcome Back, {userDB?.firstName}{" "}
            {userDB?.lastName ?? userDB?.lastName}
          </h1>
          <p className="text-sm gap-1 w-full md:w-8/12">
            <span className="font-semibold ">Rantir Cloud </span>
            is a remote management software platform that provides the essential
            foundation for an easily managed and successful AI applications.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-base font-semibold">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-3">
            <Link>
              <div className="text-white bg-black p-5 rounded-lg flex items-start gap-2 border shadow-sm">
                <FaRegPlusSquare className="text-2xl" />
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold">Start a New Porject</h3>
                  <p className="text-[12px] gap-1 font-semibold text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, enim!
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="p-5 rounded-lg flex items-start gap-2 border shadow-sm">
                <FiBox className="text-2xl" />
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold">
                    Overview of Rantir's AI & Builder
                  </h3>
                  <p className="text-[12px] gap-1 font-semibold text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, enim!
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="p-5 rounded-lg flex items-start gap-2 border shadow-sm">
                <FiGithub className="text-2xl" />
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold">
                    Rantir Roadmap & Starting a Project
                  </h3>
                  <p className="text-[12px] gap-1 font-semibold text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, enim!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-base font-bold">Active Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-3">
            <Link>
              <div className="border shadow-sm p-3 rounded-lg">
                <img
                  className="rounded-lg h-[100px] w-full"
                  src="https://img.freepik.com/free-photo/dark-geometric-background-with-copy-space_24972-1816.jpg"
                  alt=""
                />
                <h2 className="my-1">Project Element Service</h2>
                <p className="text-sm text-gray-500 mb-3">Edited 2 hours ago</p>
                <div className="flex items-center  gap-2">
                  <div className="bg-gray-200 flex items-center justify-center rounded-full px-2 text-sm gap-1 font-semibold">
                    <StatusDot type="active" />
                    <span>Active</span>
                  </div>
                  <div className="bg-gray-200 flex items-center justify-center rounded-full px-2 text-sm gap-1 font-semibold">
                    <StatusDot type="violet" />
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
