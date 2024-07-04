import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

const PurchaseitemTable = () => {
  return (
    <div className="min-h-fit bg-white">
      <div className="relative m-4 overflow-x-auto p-8 shadow-md sm:rounded-lg">

        <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-800">New Entry</h2>
          <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded text-xs focus:outline-none focus:shadow-outline">Draft</button>
        </div>
        <div class="bg-white shadow rounded-md p-4">

          <div class="flex gap-4">
            <div class="w-1/2">
              <div class="mb-4 flex justify-start">
                <label for="image-upload">
                  <div class="w-32 h-32  border border-dashed border-gray-300 rounded flex justify-center items-center text-2xl cursor-pointer">
                    <i class="fas fa-camera text-gray-300"></i>
                  </div>
                </label>
                <input type="file" id="image-upload" accept="image/*" hidden/>
              </div>
            </div>

            <div class="w-1/2">
              <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
              <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Item Name" required="" />
              {/* <span class="text-sm text-red-500" id="item-name-error">Item Name is required</span> */}

              <div class="w-full mt-4">
                <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Purpose</label>
                <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Purchases" required="" />
              </div>
            </div>
          </div>

          <div class="w-1/2">
            <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
            <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product" required="" />
          </div>

          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold">Details</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700" for="unit-type">
                Unit Type
              </label>
              <input
                type="text"
                name="unit-type"
                id="unit-type"
                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Unit"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700" for="rate">
                Rate
              </label>
              <input
                type="text"
                name="rate"
                id="rate"
                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="₹ 0.00"
              />
            </div>
            <div class="col-span-2">
              <label
                class="block text-sm font-medium text-gray-700"
                for="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                class="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Item Description"
              ></textarea>
            </div>
          </div>

          <div class="p-4">
            <h2 class="text-lg font-bold mb-4">Accounts</h2>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="text-sm font-medium mb-2">Sales Acc.</h3>
                <div class="relative">
                  <input type="text" placeholder="Income" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <div class="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-sm font-medium mt-4 mb-2">Tax</h3>
                <div class="relative">
                  <input type="text" placeholder="Tax" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <div class="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <h3 class="text-sm font-medium mb-2">Purchase Acc.</h3>
                <div class="relative">
                  <input type="text" placeholder="Expense" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <div class="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PurchaseitemTable
