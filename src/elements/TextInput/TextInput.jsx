import React from "react";

export default function TextInput({
  type = "",
  id = "",
  placeholder = "",
  label = "",
  value = "",
  onChange = () => {},
}) {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-md text-black mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out shadow-sm text-gray-800 placeholder-gray-500"
        onChange={onChange}
      />
    </div>
  );
}
