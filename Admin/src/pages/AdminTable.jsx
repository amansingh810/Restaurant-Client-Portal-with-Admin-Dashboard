import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const AdminTable = () => {
  const [reservations, setReservations] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/reservations/delete/${id}`)
      toast.success('Reservation removed')
      // Remove deleted item from state
      setReservations(prev => prev.filter(res => res._id !== id))
    } catch (error) {
      console.log("Error deleting reservation", error)
      toast.error("Failed to delete reservation.")
    }
  }

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/reservations/get`)
        setReservations(response.data)
      } catch (error) {
        console.log("Error fetching reservations")
        toast.error("Failed to fetch reservations.")
      }
    }
    fetchReservations()
  }, [])

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">Restaurant Reservations</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full text-sm text-gray-600">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-xs leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Time</th>
              <th className="py-3 px-6 text-left">Guests</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="7" className="py-6 px-4 text-center text-gray-500">
                  No reservations found.
                </td>
              </tr>
            ) : (
              reservations.map((res, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition-all">
                  <td className="py-3 px-6">{res.name}</td>
                  <td className="py-3 px-6">{res.email}</td>
                  <td className="py-3 px-6">{res.phone}</td>
                  <td className="py-3 px-6">{res.date}</td>
                  <td className="py-3 px-6">{res.time}</td>
                  <td className="py-3 px-6">{res.guests}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => handleDelete(res._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminTable
