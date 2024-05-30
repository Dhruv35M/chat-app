import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <h1 className="text-gray-300">
            Login
            <span className="text-blue-500"> ChatApp</span>
          </h1>

          <form>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
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
                placeholder="Enter password"
                className="w-full input input-bordered h-10"
              ></input>
            </div>
            <div className="text-left">
              <a
                href="#"
                className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                {"Don't have an account?"}
              </a>
            </div>
            <div>
              <button className="btn btn-block btn-primary btn-sm mt-2">
                Login
              </button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default Login;
