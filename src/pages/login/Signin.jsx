import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import rantirBlack from "../../assets/logos/rantirBlack.svg";
import config from "../../config";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { PasswordInput } from "@saas-ui/react";
import { Input } from "@chakra-ui/react";

const Signin = () => {
  const { logInWithGoogle, logInWithEmail, logInWithGithub } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user?.uid) {
          setGoogleLoading(true);
          let newUser = {
            email: user?.email,
            firstName: user?.displayName,
            // photo: user?.photoURL,
          };

          fetch(`${config.base_url}/users/create-user`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setGoogleLoading(false);
              return navigate("/");
            })
            .catch((err) => {
              setGoogleLoading(false);
              console.log(err);
              toast.error(err?.message || "Something went wrong", {
                id: "signin",
              });
            });

          setGoogleLoading(false);
          navigate("/");
          console.log(user);
        }
      })
      .catch((err) => {
        console.error(err);
        setGoogleLoading(false);
        toast.error(err?.message || "Something went wrong", { id: "signin" });
      });
  };

  const handleGithubSignin = () => {
    setGithubLoading(true);
    logInWithGithub()
      .then((result) => {
        const user = result.user;
        if (user?.uid) {
          setGithubLoading(true);
          let newUser = {
            email: user?.email,
            firstName: user?.displayName,
            // photo: user?.photoURL,
          };

          fetch(`${config.base_url}/users/create-user`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setGithubLoading(false);
              return navigate("/");
            })
            .catch((err) => {
              setGithubLoading(false);
              console.log(err);
              toast.error(err?.message || "Something went wrong", {
                id: "signin",
              });
            });

          setGithubLoading(false);
          navigate("/");
          console.log(user);
        }
      })
      .catch((err) => {
        console.error(err);
        setGithubLoading(false);
        toast.error(err?.message || "Something went wrong", { id: "signin" });
      });
  };

  const handleLogin = (data) => {
    setEmailLoading(true);
    logInWithEmail(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        setEmailLoading(false);
        console.log(user);
        return navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setEmailLoading(false);
        toast.error(err?.message || "Something went wrong", { id: "signin" });
      });
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-11/12 md:w-[450px]">
        <div>
          <div className="space-y-5 mb-3">
            <div className="flex items-center gap-2">
              <img className="h-[25px]" src={rantirBlack} alt="" />
              <div className="p-1 bg-gray-100 shadow-lg rounded-lg font-semibold text-xs">
                CLOUD 1.2
              </div>
            </div>
            <h3 className="font-semibold text-2xl">Welcome Back</h3>
          </div>
          <div className="space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="p-2 border text-sm font-semibold w-full flex justify-center items-center gap-2"
            >
              {googleLoading ? (
                "loading..."
              ) : (
                <>
                  <FaGoogle />
                  <span>Continue with Google</span>
                </>
              )}
            </button>
            <button
              onClick={handleGithubSignin}
              className="p-2 border text-sm font-semibold w-full flex justify-center items-center gap-2"
            >
              {githubLoading ? (
                "Loading..."
              ) : (
                <>
                  <FaGithub />
                  <span>Continue with Github</span>
                </>
              )}
            </button>
          </div>
          <div className="or">
            <span className="text-gray-500">or wontinue with</span>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
            <div className="space-y-2">
              <label htmlFor="email" className="text-[14px]">
                Email
              </label>
              <Input
                {...register("email", {
                  required: "Can not be empty",
                })}
                className="border-2 p-1 rounded-lg w-full"
                type="email"
                name="email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-[14px]">
                Password
              </label>
              <PasswordInput
                name="password"
                {...register("password", {
                  required: "Can not be empty",
                })}
              />
              {/* <input
                {...register("password", {
                  required: "Can not be empty",
                })}
                className="border-2 p-1 rounded-lg w-full"
                type="password"
                name="password"
              /> */}
            </div>
            <div>
              <Link
                className="text-[13px] hover:underline text-gray-500"
                to="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <button className="bg-black text-white font-semibold text-sm w-full p-2 rounded-lg">
              {emailLoading ? "Loading..." : "Log in"}
            </button>
            <div className="text-center text-sm text-gray-500">
              No account yet?{" "}
              <Link className="text-gray-700" to="/signup">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
