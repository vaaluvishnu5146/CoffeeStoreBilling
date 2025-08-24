import React, { useEffect } from "react";

export default function TableSelectableRows({ data = {} }) {
  function handleUserDeletion(id = "") {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="w-4 p-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-search-1" class="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.id}
      </th>
      <td class="px-6 py-4">{data.name}</td>
      <td class="px-6 py-4">{data.email}</td>
      <td class="px-6 py-4">{data.phone}</td>
      <td class="px-6 py-4">{data.website}</td>
      <td class="px-6 py-4">{data.company.name}</td>
      <td class="flex items-center px-6 py-4">
        <a
          href="#"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
        <a
          onClick={() => handleUserDeletion(data.id)}
          href="#"
          class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
        >
          Remove
        </a>
      </td>
    </tr>
  );
}
