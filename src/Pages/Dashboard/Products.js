import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageProductRow from './ManageProductRow';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((resp) => {
        setProducts(resp.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchProducts = async () =>
    axios.get('https://mern-authentication.onrender.com/api/v1/product', {
      headers: { Authorization: localStorage.getItem('jwtToken') },
    });

  return (
    <div>
      <h2 className="max-w-lg mb-6 font-sans text-xl font-semibold leading-none tracking-tight text-gray-700 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative">Product</span>
        </span>{' '}
        List
      </h2>
      <div className="table w-full p-2">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-50 border-b ">
              <th className="p-2 border-r text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center font-semibold">
                  ID
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center font-semibold">
                  Product Name
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center font-semibold">
                  Description
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center font-semibold">
                  Price
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center font-semibold">
                  Quantity
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center font-semibold">
                  Actions
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map((product, index) => (
                <ManageProductRow
                  product={product}
                  index={index + 1}
                  key={product._id}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
