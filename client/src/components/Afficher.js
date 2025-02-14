import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const Afficher = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/")
      .then(response => setUsers(response.data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(search.toLowerCase()) ||
    user.lastName.toLowerCase().includes(search.toLowerCase())
  );

  const deleteUser = (id) => {
    axios.delete(`http://127.0.0.1:8999/api/leo/name/${id}`)
      .then(() => {
        setUsers(users.filter(user => user._id !== id)); // Filter by ID
        alert("User deleted successfully");
      })
      .catch(err => {
        console.error("Error deleting user:", err);
        alert("Failed to delete user");
      });
  }

  return (
    <div className='w-full h-screen flex justify-center items-center p-4 bg-black mb-5 ' id="Afficher">
      <h1 >PAGE ADMIN</h1>
      <div className='w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden'>
        <input
          type='text'
          placeholder='Rechercher...'
          className='w-full p-2 mb-4 border border-gray-300 rounded'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className='w-full table-auto border-collapse border border-gray-300'>
          <thead className='bg-gray-200'>
            <tr className='text-left'>
              <th className='border border-gray-300 px-4 py-2 text-black'>First Name</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>Last Name</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>Email</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>Phone</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>Message</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id} className='hover:bg-gray-100'>
                <td className='border border-gray-300 px-4 py-2 text-black'>{user.firstName}</td>
                <td className='border border-gray-300 px-4 py-2 text-black'>{user.lastName}</td>
                <td className='border border-gray-300 px-4 py-2 text-black'>{user.email}</td>
                <td className='border border-gray-300 px-4 py-2 text-black'>{user.phone}</td>
                <td className='border border-gray-300 px-4 py-2 text-black'>{user.message}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  <button
                    className='bg-black text-white px-3 py-1 rounded hover:bg-gray-700' // Changer bg-red-500 à bg-black
                    onClick={() => deleteUser(user._id)} // Utiliser l'ID ici
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Afficher;