import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import rantirBlack from "../../assets/logos/rantirBlack.svg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const ForgetPassword = () => {
  const { sendResetPassword } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForgetPassword = (data) => {
    setLoading(true);
    sendResetPassword(data?.email)
      .then(() => {
        setMessage("Check mail");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="space-y-5 w-11/12 md:w-auto">
        <div>
          <div className="space-y-3 mb-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <img className="h-[20px]" src={rantirBlack} alt="" />
              <div className="p-1 bg-gray-100 shadow-lg rounded-lg font-semibold text-xs">
                CLOUD 1.2
              </div>
            </div>
            <h3 className="font-semibold">Forgot Password</h3>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleForgetPassword)}
            className="space-y-3"
          >
            <div className="space-y-2">
              <label htmlFor="email">Your email address</label>
              <input
                {...register("email", {
                  required: "Can not be empty",
                })}
                className="border-2 p-1 rounded-lg w-full"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-4">
              {message ? (
                <button
                  disabled
                  className="border text-gray-500 font-semibold text-sm w-full p-2 rounded-lg"
                >
                  {message}
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-black text-white font-semibold text-sm w-full p-2 rounded-lg"
                >
                  {loading ? "Loading..." : "Get reset link"}
                </button>
              )}

              <Link
                to="/login"
                className="bg-gray-200 text-black font-semibold text-sm w-full p-2 rounded-lg text-center"
              >
                Back to Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
