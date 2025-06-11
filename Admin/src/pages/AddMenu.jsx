import React, { useState } from 'react';
import upload_img from '../assets/3886.jpg';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddMenu = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", desc);
      formData.append("category", category);
      formData.append("price", price);
      if (image) formData.append("image", image);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDesc('');
        setPrice('');
        setCategory('All');
        setImage(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Menu</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <div>
          <p className="font-medium mb-2">Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : upload_img}
              alt="Upload Preview"
              className="w-full h-48 object-cover cursor-pointer border rounded"
            />
            <input
              type="file"
              id="image"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Product Name */}
        <div>
          <p className="font-medium mb-1">Product Name</p>
          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <p className="font-medium mb-1">Product Description</p>
          <input
            type="text"
            placeholder="Enter product description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Category */}
        <div>
          <p className="font-medium mb-1">Product Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="All">All</option>
            <option value="Spaghetti">Spaghetti</option>
            <option value="Pizza">Pizza</option>
            <option value="Rice">Rice</option>
            <option value="Noodles">Noodles</option>
            <option value="Chicken">Chicken</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <p className="font-medium mb-1">Product Price (₹)</p>
          <input
            type="number"
            placeholder="e.g. 80"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          Add Menu
        </button>
      </form>
    </div>
  );
};

export default AddMenu;
