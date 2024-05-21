import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import config from "../../config";

const AcceptInvitation = () => {
  const { orgId, email, role } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!/^[a-fA-F0-9]{24}$/.test(orgId)) {
      console.log("Invalid organization");
      navigate("/");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email address");
      navigate("/");
      return;
    }
  }, [orgId, email, navigate]);

  const handleAccept = async () => {
    if (email) {
      setLoading(true);
      const newMemeber = {
        email,
        orgId,
        role,
      };
      fetch(`${config?.base_url}/organizations/membership/accept-invite`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newMemeber),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          navigate("/");
        });
    }
  };
  return (
    <div className="flex gap-4 justify-center items-center min-h-screen">
      <Link
        to="/"
        className="py-2 px-4 rounded-sm shadow-sm bg-red-600 text-white"
      >
        Reject
      </Link>
      <button
        className="py-2 px-4 rounded-sm shadow-sm bg-green-600 text-white"
        onClick={handleAccept}
      >
        {loading ? "Accepting..." : "Accept"}
      </button>
    </div>
  );
};

export default AcceptInvitation;
