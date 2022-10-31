import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const UpdateUserRole = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedRole, setSelectedRole] = useState('');

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleUpdate = () => {
    const url = `https://mern-authentication.onrender.com/api/v1/user/${id}`;
    axios
      .patch(
        url,
        { role: selectedRole },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          navigate('/dashboard/users');
          // toast.success('Data Updated');
        }
      })
      .catch((error) => {
        // toast.error('Data Updated');
      });
  };

  return (
    <div className="ml-10">
      <h1 className="text-2xl font-semibold my-10 text-gray-600">
        Update User Role
      </h1>
      <label class="block">
        <span class="text-gray-700">Please select a role</span>
        <select onChange={handleChange} class="form-select block w-96 mt-1">
          <option value={'admin'}>admin</option>
          <option value={'editor'}>editor</option>
        </select>
      </label>
      {currentUser.role === 'admin' ? (
        <button
          onClick={handleUpdate}
          className="text-center text-white font-bold rounded py-2 w-2/12 bg-blue-600 hover:bg-blue-700 my-14"
        >
          Update
        </button>
      ) : (
        <h1 className="text-red-600 my-10 font-semibold">
          Your not authorized to change the user role
        </h1>
      )}
    </div>
  );
};

export default UpdateUserRole;
