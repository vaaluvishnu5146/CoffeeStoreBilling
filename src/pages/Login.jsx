import React from "react";
import logo from "../assets/logo-lg.png";
import TextInput from "../elements/TextInput/TextInput";

export default function Login({ handleLogin = () => {} }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[50%] h-[50%] bg-white rounded-sm grid grid-cols-2 gap-2 px-8 items-center">
        <div className="flex items-center justify-center">
          <img src={logo} />
        </div>
        <div id="form-Section">
          <TextInput
            label={"Email Address"}
            type={"email"}
            placeholder={"Enter Email address"}
            id={"email"}
          />
          <div className="h-[10px]"></div>
          <TextInput
            label={"Password"}
            type={"password"}
            placeholder={"Enter Password"}
            id={"password"}
          />

          <div className="h-[30px]"></div>
          <button
            onClick={() => {
              handleLogin();
            }}
            type="button"
            className="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  );
}
