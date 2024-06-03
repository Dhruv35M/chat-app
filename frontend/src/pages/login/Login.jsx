import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const inputHander = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHander = async (e) => {
    e.preventDefault();
    await login(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <h1 className="text-gray-300">
            Login
            <span className="text-blue-500"> ChatApp</span>
          </h1>

          <form onSubmit={submitHander}>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={inputHander}
                placeholder="Enter username"
                className="w-full input input-bordered h-10"
              ></input>
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={inputHander}
                placeholder="Enter password"
                className="w-full input input-bordered h-10"
              ></input>
            </div>
            <div className="text-left">
              <Link
                to={"/signup"}
                className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                {"Don't have an account?"}
              </Link>
            </div>
            <div>
              <button
                className="btn btn-block btn-primary btn-sm mt-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default Login;
