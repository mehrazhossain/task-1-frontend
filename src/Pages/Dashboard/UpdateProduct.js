import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    fetch(`https://mern-authentication.onrender.com/api/v1/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, []);

  // get all input data using onblur
  const handleProductBlur = (e) => {
    setName(e.target.value);
  };
  const handlePriceBlur = (e) => {
    setPrice(e.target.value);
  };
  const handleQuantityBlur = (e) => {
    setQuantity(e.target.value);
  };

  const handleDescBlur = (e) => {
    setDesc(e.target.value);
  };

  const updatedData = {
    name: name.length === 0 ? product?.name : name,
    price: price.length === 0 ? product?.price : price,
    quantity: quantity?.length === 0 ? product?.quantity : quantity,
    desc: desc.length === 0 ? product?.description : desc,
  };

  // Handle Form Submit
  const handleUpdateForm = (e) => {
    e.preventDefault();

    const url = `https://mern-authentication.onrender.com/api/v1/product/${product._id}`;

    axios
      .patch(url, updatedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status == 200) {
          // toast.success('Data Updated');
        }
      })
      .catch((error) => {
        // toast.error('Data Updated');
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-700 ml-10 my-4">
        Update Product Info
      </h1>
      <form onSubmit={handleUpdateForm} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mt-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Product Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nick"
              onBlur={handleProductBlur}
              defaultValue={product?.name}
              name="name"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id=""
              defaultValue={product?.price}
              onBlur={handlePriceBlur}
              name="price"
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Quantity
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id=""
              defaultValue={product?.quantity}
              onBlur={handleQuantityBlur}
              name="quantity"
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Product Description
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id=""
              defaultValue={product?.description}
              onBlur={handleDescBlur}
              name="description"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
