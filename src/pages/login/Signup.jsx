import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import rantirBlack from "../../assets/logos/rantirBlack.svg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import config from "../../config";
import iPadPro from "../../assets/iPadPro.jpg";
import { toast } from "sonner";
import { PasswordInput } from "@saas-ui/react";

import logo from "../../assets/images/logo.png";
import signUpBg from "../../assets/images/signUp-bg.png";
import google from "../../assets/svgs/google-black.svg";
import github from "../../assets/svgs/github-black.svg";
import { Input } from "@chakra-ui/react";

const Signup = () => {
  const {
    createUserWithEmail,
    logInWithGoogle,
    setRefetchUserDB,
    logInWithGithub,
  } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    setLoading(true);
    createUserWithEmail(data.email, data.password)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          let newUser = {
            email: user?.email || data?.email,
            firstName: user?.displayName,
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
              setLoading(false);
              setRefetchUserDB((prev) => !prev);
              return navigate("/");
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
              toast.error(err?.message || "Something went wrong", {
                id: "signup",
              });
            });
        }
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.error(err?.message || "Something went wrong", {
          id: "signup",
        });
      });
  };

  const handleLogInWithGoogle = () => {
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
              setRefetchUserDB((prev) => !prev);
              return navigate("/");
            })
            .catch((err) => {
              setGoogleLoading(false);
              console.log(err);
              toast.error(err?.message || "Something went wrong", {
                id: "signup",
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
        toast.error(err?.message || "Something went wrong", {
          id: "signup",
        });
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

  return (
    <div className="flex items-center justify-center md:justify-between overflow-hidden h-screen">
      <div className="flex items-center justify-center w-full md:w-[55%] lg:w-[60%]">
        <div className="w-11/12 md:w-[450px]">
          <div>
            <div className="flex items-center">
              <img src={logo} alt={"logo"} />
              <div className="ms-[10.89px] font-bold bg-[#FBFBFB] text-[10.608px] rounded-[3.201px] drop-shadow-md">
                CLOUD 1.2
              </div>
            </div>
            <div className="mt-[25px] mb-[28px] text-[20px] font-semibold">
              Welcome Back
            </div>
            <div className="space-y-4 mb-3">
              <button
                onClick={handleLogInWithGoogle}
                className="p-2 border text-sm font-semibold w-full flex justify-center items-center gap-2 bg-transparent rounded-[6px]"
              >
                {googleLoading ? (
                  "Loading..."
                ) : (
                  <>
                    <span>
                      <img src={google} />
                    </span>{" "}
                    Continue with Google
                  </>
                )}
              </button>
              <button
                onClick={handleGithubSignin}
                className="p-2 border text-sm font-semibold w-full flex justify-center items-center gap-2 bg-transparent rounded-[6px]"
              >
                {githubLoading ? (
                  "Loading..."
                ) : (
                  <>
                    <span>
                      <img src={github} />
                    </span>{" "}
                    Continue with Github
                  </>
                )}
              </button>
            </div>
            <div className="flex items-center justify-center mb-[36px]">
              <span className="w-[100%] h-[1px] bg-[#E7E7E8]"></span>
              <span className="text-gray-500 w-[100%] text-center">
                or continue with
              </span>
              <span className="w-[100%] h-[1px] bg-[#E7E7E8]"></span>
            </div>
            <div>
              <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[14px]">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    {...register("email", {
                      required: "Can not be empty",
                    })}
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
                  {loading ? "Loading..." : "Sign up"}
                </button>
                <div className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link className="text-gray-700" to="/login">
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:w-[45%] lg:w-[40%] overflow-hidden md:flex md:justify-end">
        <img src={signUpBg} className="w-full h-screen" />
      </div>
    </div>
  );
};

export default Signup;
