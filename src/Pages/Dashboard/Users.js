import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState();

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    fetch('https://mern-authentication.onrender.com/api/v1/user')
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div className="mt-2">
      <h2 className="max-w-lg mb-6 font-sans text-xl font-semibold leading-none tracking-tight text-gray-700 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative">Admin, Editor & User</span>
        </span>{' '}
        List
      </h2>
      {currentUser.role == 'admin' ? (
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Link to={'/dashboard/user/register'}>Add User</Link>
        </button>
      ) : (
        ''
      )}

      <table className="max-w-5xl mx-auto table-auto">
        <thead className="justify-between">
          <tr className="bg-gray-50 border-b">
            <th className="px-16 py-2">
              <span className="text-gray-500 font-semibold">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-500 font-semibold">Email</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-500 font-semibold">Role</span>
            </th>

            <th className="px-16 py-2">
              <span className="text-gray-500 font-semibold">Edit Role</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {users?.map((user) => (
            <tr
              key={user._id}
              className="bg-white text-gray-500 border-b-2 border-gray-200"
            >
              <td>
                <span className="text-center ml-2 ">{user.name}</span>
              </td>
              <td>
                <span className="text-center ml-2 ">{user.email}</span>
              </td>
              <td className="text-center ml-2">
                <span>{user.role == '' ? 'user' : user.role}</span>
              </td>

              <td className="px-16 py-2">
                <span className="cursor-pointer text-yellow-500 flex">
                  <Link to={`/dashboard/user/role/${user._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-700 mx-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
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
