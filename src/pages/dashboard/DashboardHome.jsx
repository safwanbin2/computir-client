import React, { useContext } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiBox, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import StatusDot from "../../components/ui/StatusDot";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const DashboardHome = () => {
  const { user, userDB } = useContext(AuthContext);
  return <div className="w-11/12 mx-auto mt-6">dashboard content</div>;
};

export default DashboardHome;
