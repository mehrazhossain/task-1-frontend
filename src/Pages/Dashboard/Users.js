import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch('https://mern-authentication.onrender.com/api/v1/user')
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div class="mt-2">
      <h2 className="max-w-lg mb-6 font-sans text-xl font-semibold leading-none tracking-tight text-gray-700 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative">Admin, Editor & User</span>
        </span>{' '}
        List
      </h2>
      <table class="max-w-5xl mx-auto table-auto">
        <thead class="justify-between">
          <tr class="bg-gray-50 border-b">
            <th class="px-16 py-2">
              <span class="text-gray-500 font-semibold">Name</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-500 font-semibold">Email</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-500 font-semibold">Role</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-500 font-semibold">Edit Role</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          {users?.map((user) => (
            <tr
              key={user._id}
              class="bg-white text-gray-500 border-b-2 border-gray-200"
            >
              <td>
                <span class="text-center ml-2 ">{user.name}</span>
              </td>
              <td>
                <span class="text-center ml-2 ">{user.email}</span>
              </td>
              <td class="text-center ml-2">
                <span>{user.role == '' ? 'user' : user.role}</span>
              </td>

              <td class="px-16 py-2">
                <span class="cursor-pointer text-yellow-500 flex">
                  <Link to={`/dashboard/user/role/${user._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-blue-700 mx-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
