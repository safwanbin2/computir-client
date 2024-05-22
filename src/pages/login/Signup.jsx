import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import rantirBlack from "../../assets/logos/rantirBlack.svg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import config from "../../config";
import iPadPro from "../../assets/iPadPro.jpg";
import { toast } from "sonner";

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
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-11/12 md:w-[450px]">
          <div>
            <div className="space-y-5 mb-3">
              <div className="flex items-center gap-2">
                <img className="h-[25px]" src={rantirBlack} alt="" />
                <div className="p-1 bg-gray-100 shadow-lg rounded-lg font-semibold text-xs">
                  CLOUD 1.2
                </div>
              </div>
              <h3 className="font-semibold text-2xl">Sign up for free</h3>
            </div>
            <div className="space-y-4">
              <button
                onClick={handleLogInWithGoogle}
                className="p-2 border text-sm font-semibold w-full flex justify-center items-center gap-2"
              >
                {googleLoading ? (
                  "Loading..."
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
            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3">
              <div className="space-y-2">
                <label htmlFor="email" className="text-[14px]">
                  Email
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
              <div className="space-y-2">
                <label htmlFor="password" className="text-[14px]">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Can not be empty",
                  })}
                  className="border-2 p-1 rounded-lg w-full"
                  type="password"
                  name="password"
                />
              </div>
              <button className="bg-black text-white font-semibold text-sm w-full p-2 rounded-lg">
                {loading ? "Loading..." : "Sign up"}
              </button>
              <div className="text-center text-sm text-gray-500">
                Already have an account?
                <Link className="text-gray-700" to="/login">
                  {" "}
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden md:block relative ">
        <img className="max-h-[100vh] w-full" src={iPadPro} alt="" />
        {/* <div className="absolute bottom-10 left-10 bg-black/70 backdrop-blur-sm text-white w-6/12 p-4 rounded-lg space-y-2">
          <div>Computir</div>
          <p className="text-xs font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit
            temporibus nesciunt saepe delectus eos eius fuga quas itaque
            perspiciatis! Lorem ipsum dolor sit amet.
          </p>
          <p className="text-xs font-extralight">
            <span className="text-sm font-normal">Computir, Inc.</span> Parent
            Company of Rantir
          </p>
          <h2>Logos</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
