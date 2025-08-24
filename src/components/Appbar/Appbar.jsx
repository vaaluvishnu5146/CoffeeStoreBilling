import React from "react";
import logo from "../../assets/logo-sm.png";
import { Link } from "react-router";

export default function Appbar() {
  return (
    <div className="w-full h-[60px] bg-white px-3 flex box-border items-center">
      <div className="w-[50%]">
        <img className="w-[50px]" src={logo} />
      </div>
      <div className="w-[50%] flex justify-end">
        <ul className="flex gap-x-3">
          <li>
            <Link to={"/"}>Billing</Link>
          </li>
          <li>
            <Link to={"/orders"}>Orders</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/appSettings"}>App Settings</Link>
          </li>
          <li>
            <Link to={"/users"}>Users Management</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
