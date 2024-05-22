import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import rantirBlack from "../../assets/logos/rantirBlack.svg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { toast } from "sonner";

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
        toast.success("Check mail", { id: "forget" });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err?.message || "Something went wrong", { id: "forget" });
      });
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="space-y-5 w-11/12 md:w-[450px]">
        <div>
          <div className="space-y-5 mb-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <img className="h-[25px]" src={rantirBlack} alt="" />
              <div className="p-1 bg-gray-100 shadow-lg rounded-lg font-semibold text-xs">
                CLOUD 1.2
              </div>
            </div>
            <h3 className="font-semibold text-2xl">Forgot password</h3>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleForgetPassword)}
            className="space-y-3"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-[14px]">
                Your email address
              </label>
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
