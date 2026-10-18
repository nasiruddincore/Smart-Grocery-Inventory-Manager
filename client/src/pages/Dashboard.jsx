import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1, minStock: 2 });

  useEffect(() => {
    if (user?.token) fetchItems();
  }, [user]);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/items', {
        headers: { 'x-auth-token': user.token }
      });
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching items', err);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/items', newItem, {
        headers: { 'x-auth-token': user.token }
      });
      setItems([...items, res.data]);
      setNewItem({ name: '', quantity: 1, minStock: 2 });
    } catch (err) {
      console.error('Error adding item', err);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Inventory Dashboard</h2>
      
      {/* Add Item Form */}
      <form onSubmit={handleAddItem} className="mb-8 flex gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <input 
          type="text" 
          placeholder="Grocery Item (e.g. Milk)" 
          value={newItem.name} 
          onChange={(e) => setNewItem({...newItem, name: e.target.value})} 
          className="border border-gray-300 p-3 flex-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />
        <input 
          type="number" 
          placeholder="Qty" 
          value={newItem.quantity} 
          onChange={(e) => setNewItem({...newItem, quantity: e.target.value})} 
          className="border border-gray-300 p-3 w-28 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />
        <input 
          type="number" 
          placeholder="Min Stock" 
          value={newItem.minStock} 
          onChange={(e) => setNewItem({...newItem, minStock: e.target.value})} 
          className="border border-gray-300 p-3 w-32 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />
        <button type="submit" className="bg-blue-600 text-white font-bold px-6 py-3 rounded hover:bg-blue-700 transition-colors">
          Add Item
        </button>
      </form>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length === 0 ? (
          <p className="text-gray-500 col-span-full">Your inventory is empty. Add items above!</p>
        ) : (
          items.map(item => (
            <div 
              key={item._id} 
              className={`p-6 border rounded-lg shadow-sm ${item.quantity <= item.minStock ? 'bg-red-50 border-red-300' : 'bg-white border-gray-200'}`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Current Qty: <strong className="text-gray-900">{item.quantity}</strong></span>
                <span>Alert At: <strong className="text-gray-900">{item.minStock}</strong></span>
              </div>
              
              {item.quantity <= item.minStock ? (
                <div className="bg-red-100 text-red-700 px-3 py-2 rounded text-sm font-bold text-center">
                  ⚠️ Low Stock Alert
                </div>
              ) : (
                <div className="bg-green-100 text-green-700 px-3 py-2 rounded text-sm font-bold text-center">
                  ✅ In Stock
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}