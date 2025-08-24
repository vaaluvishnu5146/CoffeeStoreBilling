"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import TextInput from "../../elements/TextInput/TextInput";

export default function CreateUserModal({
  isOpen,
  closeModal,
  onChange,
  formData,
}) {
  return (
    <>
      <Modal show={isOpen} onClose={closeModal}>
        <ModalHeader>Creating new user</ModalHeader>
        <ModalBody>
          <TextInput
            id="name"
            placeholder="Enter user name..."
            label="Username"
            type="text"
            value={formData["name"]}
            onChange={onChange}
          />
          <TextInput
            id="email"
            placeholder="Enter user email..."
            label="Email"
            type="email"
            value={formData["email"]}
            onChange={onChange}
          />
          <TextInput
            id="phone"
            placeholder="Enter user phone number..."
            label="Phone Number"
            type="phone"
            value={formData["phone"]}
            onChange={onChange}
          />
          <TextInput
            id="website"
            placeholder="Enter website addres..."
            label="Website Link"
            type="text"
            value={formData["website"]}
            onChange={onChange}
          />
          <TextInput
            id="company"
            placeholder="Enter user company..."
            label="Company"
            type="text"
            value={formData["company"]}
            onChange={onChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={closeModal}
          >
            Create
          </Button>
          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            color="alternative"
            onClick={closeModal}
          >
            Clear
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
