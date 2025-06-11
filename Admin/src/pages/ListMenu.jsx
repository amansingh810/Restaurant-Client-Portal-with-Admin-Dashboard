import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { MdDeleteForever } from 'react-icons/md';

const ListMenu = ({ token }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`, {
        headers: { token },
      });
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message || 'Failed to fetch products');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'An error occurred while fetching products');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (!confirm) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { _id },
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success("Product deleted successfully");
        setList((prevList) => prevList.filter((item) => item._id !== _id));
      } else {
        toast.error(response.data.message || "Failed to delete product");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred while deleting product");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-4">Menu List</p>

      <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] font-semibold border-b pb-2">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span>Action</span>
      </div>

      {loading ? (
        <p className="mt-4 text-gray-500">Loading...</p>
      ) : list.length === 0 ? (
        <p className="mt-4 text-gray-500">No products found.</p>
      ) : (
        list.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center gap-4 py-3 border-b"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover rounded"
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <MdDeleteForever
              className="text-red-600 text-2xl cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleDelete(item._id)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ListMenu;
