import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

const PurchaseItemTable = () => {
  const [purchaseItems, setPurchaseItems] = useState([]);

  useEffect(() => {
    const fetchPurchaseItems = async () => {
      try {
        const response = await fetch('http://localhost:4500/purchaseItems/purchase-items');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPurchaseItems(data);
      } catch (error) {
        console.error('Error fetching purchase items:', error);
      }
    };

    fetchPurchaseItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4500/purchaseItems/purchase-items/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setPurchaseItems(purchaseItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting purchase item:', error);
    }
  };

  return (
    <div className="min-h-fit bg-white">
      <div className="relative m-4 overflow-x-auto p-8 shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-800">Purchase Items</h2>
        </div>

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Type</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales Account</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchaseItems.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.itemName}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.purpose}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.unitType}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.rate}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.salesAccount}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{item.tax}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <MdDelete
                          className="cursor-pointer text-lg text-red-500 hover:text-red-300"
                          onClick={() => handleDelete(item._id)}
                        />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseItemTable;
