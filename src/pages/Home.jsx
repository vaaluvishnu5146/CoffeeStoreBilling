import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center gap-x-10">
      <div
        onClick={() => navigate("/billing")}
        className="w-[150px] cursor-pointer h-[100px] rounded-sm bg-white  flex items-center justify-center hover:bg-stone-50"
      >
        <p className="text-black">Billing</p>
      </div>
      <div
        onClick={() => navigate("/orders")}
        className="w-[150px] cursor-pointer h-[100px] rounded-sm bg-white  flex items-center justify-center hover:bg-stone-50"
      >
        <p className="text-black">Orders</p>
      </div>
      <div
        onClick={() => navigate("/appSettings")}
        className="w-[150px] cursor-pointer h-[100px] rounded-sm bg-white  flex items-center justify-center hover:bg-stone-50"
      >
        <p className="text-black">App Settings</p>
      </div>
      <div
        onClick={() => navigate("/profile")}
        className="w-[150px] cursor-pointer h-[100px] rounded-sm bg-white  flex items-center justify-center hover:bg-stone-50 "
      >
        <p className="text-black">Profile</p>
      </div>
    </div>
  );
}
