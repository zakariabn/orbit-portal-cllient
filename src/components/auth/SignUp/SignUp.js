import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const SignUp = () => {
  // react form hooks methods
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  async function onSubmit(data) {
    const displayName = data.name;
    const photoURL =
      data.image || "https://i.ibb.co/xL8gGf7/user-account-img-placeholder.png";

    try {
      await createUserWithEmailAndPassword(data.email, data.password, {
        sendEmailVerification: true,
      });
      await updateProfile({ displayName, photoURL });
    } catch (error) {
      toast.error("Error accord! Request failed.");
      console.log(error);
    }
  }

  function handelGoogleSignUp() {
    signInWithGoogle();
  }

  useEffect(() => {
    switch (error?.code || googleError?.code) {
      case "auth/email-already-in-use":
        toast.error(
          "A user found with this email. Try login or forgot password."
        );
        break;

      default:
        // toast.error("Error accord! Request failed, try again");
        break;
    }
  }, [error, googleError]);

  if (user) {
    reset();
    toast.success("Account create successfully");
    toast.info("Please verify your email");
    console.log(user);
  }

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone"
            />
          </div>

          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name input */}
              <div className="mb-6">
                <input
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="User name"
                />
                <span className="text-red-500">
                  {errors.name?.type === "required" && (
                    <small>{errors.name.message}</small>
                  )}
                </span>
              </div>

              {/* email input */}
              <div className="mb-6">
                <input
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Provide a valid email",
                    },
                  })}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
                <span className="text-red-500">
                  {errors.email?.type === "require" && (
                    <small>{errors.email.message}</small>
                  )}
                  {errors.email?.type === "pattern" && (
                    <small>{errors.email.message}</small>
                  )}
                </span>
              </div>

              {/* password input */}
              <div className="mb-6">
                <input
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    pattern: {
                      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
                      message:
                        "Password should contain uppercase lowercase and number",
                    },
                    minLength: {
                      value: 6,
                      message: "Minimum 6 length password require",
                    },
                  })}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
                <span className="text-red-500">
                  {errors.password?.type === "require" && (
                    <small>{errors.password.message}</small>
                  )}
                  {errors.password?.type === "pattern" && (
                    <small>{errors.password.message}</small>
                  )}
                  {errors.password?.type === "minLength" && (
                    <small>{errors.password.message}</small>
                  )}
                </span>
              </div>

              {/* photo input */}
              <div className="mb-6">
                <input
                  type="text"
                  {...register("image", {
                    required: false,
                    pattern: {
                      value: /(https?:\/\/.*\.(?:png|jpg))/,
                      message: "Url is not valid",
                    },
                  })}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Photo url"
                />
                <span className="text-red-500">
                  {errors.image?.type === "pattern" && (
                    <small>{errors.image.message}</small>
                  )}
                </span>
              </div>

              {/* remember me forgot password */}
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2">
                    Remember me
                  </label>
                </div>
                <Link
                  to={""}
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                  Forgot password?
                </Link>
              </div>

              {/* action button  */}
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                Sign Up
              </button>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              {/* social login */}
            </form>

            <button
              onClick={handelGoogleSignUp}
              className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center bg-[#DB4437]">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
