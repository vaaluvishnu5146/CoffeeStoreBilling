import React, { useState, useEffect } from "react";
import SelectableTable from "../components/DataTables/SelectableTable";
import CreateUserModal from "../components/Modals/CreateUserModal";
import { Button } from "flowbite-react";
import Axios from "axios";
import VishnuAxios from "../AxiosConfig/VishnuAxios";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
  });

  useEffect(() => {
    /**
     * METHOD - GET
     */
    VishnuAxios.get("/users")
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data));
  }, []);

  function handleFormChange(e) {
    if (e) {
      const formDataCopy = {
        ...formData,
        [e.target.id]: e.target.value,
      };
      setFormData(formDataCopy);
    }
  }

  function handleCreateUser(e) {
    if (e) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setIsUserModalOpen(false);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="p-5">
      <div className="flex justify-between items-center py-3">
        <h1 className="text-xl text-bold my-5">User Management</h1>
        <Button
          onClick={() => setIsUserModalOpen(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add User
        </Button>
        <CreateUserModal
          isOpen={isUserModalOpen}
          closeModal={handleCreateUser}
          onChange={handleFormChange}
          formData={formData}
        />
      </div>
      <SelectableTable data={users} />
    </div>
  );
}
