import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ManageProductRow = ({ product, index }) => {
  const { role } = JSON.parse(localStorage.getItem('currentUser'));

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `https://mern-authentication.onrender.com/api/v1/product/${id}`;
      fetch(url, {
        method: 'DELETE',
      }).then((res) => res.json());
      window.location.reload();
    }
  };

  return (
    <tr
      key={product._id}
      className="bg-gray-100 text-center border-b text-sm text-gray-600"
    >
      <td className="p-2 border-r">{index}</td>
      <td className="p-2 border-r">{product.name}</td>
      <td className="p-2 border-r">{product.description}</td>
      <td className="p-2 border-r">{product.price}</td>
      <td className="p-2 border-r">{product.quantity}</td>
      <td>
        <span className="bg-blue-600 p-2 text-white hover:bg-blue-700 hover:shadow-lg text-xs font-thin mx-2 px-4">
          <Link to={`/dashboard/product/${product._id}`}>Edit</Link>
        </span>
        {role == 'admin' ? (
          <span
            onClick={() => handleDelete(product._id)}
            className="cursor-pointer bg-red-600 hover:bg-red-700 p-2 text-white hover:shadow-lg text-xs font-thin mx-2 px-4"
          >
            Remove
          </span>
        ) : (
          ''
        )}
      </td>
    </tr>
  );
};

export default ManageProductRow;
