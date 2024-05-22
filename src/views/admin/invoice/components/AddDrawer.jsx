import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AddDrawer = ({
  isDrawerOpen,
  handleDrawerToggle,
  formData,
  handleInputChange,
  handleSubmit,
  drawerRef,
  clients,
  projects,
  managers,
  acquisitionPeople,
  handleResourceChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {isDrawerOpen && (
        <div
          ref={drawerRef}
          id="drawer-contact"
          className="fixed top-0 right-0 z-40 h-screen w-80 -translate-x-0 overflow-y-auto bg-gray-100 p-4 transition-transform dark:bg-gray-800"
          tabIndex="-1"
        >
          <h5 className="mb-6 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400">
            <svg
              className="h-4 w-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            Add Invoice
          </h5>
          <button
            type="button"
            onClick={handleDrawerToggle}
            className="bg-transparent absolute top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-400 end-2.5 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <form className="mb-6">
            {/* <div className="mb-6">
           <label
             htmlFor="projectName"
             className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
           >
             <span className="text-lg text-red-500">*</span>Client Name
           </label>
           <input
             type="text"
             id="name"
             name="name"
             className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
             placeholder="Project Name"
             value={formData.name}
             onChange={handleInputChange}
             required
           />
         </div> */}
            <div className="mx-auto mb-6">
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-lg text-red-500">*</span>Client Name
              </label>
              <select
                id="status"
                name="status"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Choose Client
                </option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.primaryContactPerson}
                  </option>
                ))}
              </select>
            </div>
            <div className="mx-auto mb-6">
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-lg text-red-500">*</span>Project Name
              </label>
              <select
                id="status"
                name="status"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Choose Project
                </option>
                {pro.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.primaryContactPerson}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="projectName"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-lg text-red-500">*</span>Serial Number
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Project Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="projectName"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-lg text-red-500">*</span>Phone Number
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Project Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="projectName"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-lg text-red-500">*</span>Po Number
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Project Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="start-date"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-lg text-red-500">*</span>Billing Date
              </label>
              <div className="relative max-w-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="start-date"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-lg text-red-500">*</span>Service from Date
              </label>
              <div className="relative max-w-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="start-date"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-lg text-red-500">*</span> Service End Date
              </label>
              <div className="relative max-w-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mx-auto mb-6">
              <label
                htmlFor="clientId"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                <span className="text-lg text-red-500">*</span>Due Date
              </label>
              <select
                id="clientId"
                name="clientId"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
                value={formData.clientId}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Choose Client
                </option>
                {/* {clients.map((client) => (
               <option key={client.id} value={client.primaryContactPerson}>
                 {client.primaryContactPerson}
               </option>
             ))} */}
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="managerId"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                <span className="text-lg text-red-500">*</span>Manager
              </label>
              <select
                id="managerId"
                name="managerId"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={formData.managerId}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Choose a Manager
                </option>
                {/* {managers.map((person) => (
               <option key={person.id} value={person.id}>
                 {person.displayName}
               </option>
             ))} */}
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="start-date"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-lg text-red-500">*</span>Due Date
              </label>
              <div className="relative max-w-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <h5 className="mb-6 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400">
              <svg
                className="h-4 w-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              Milestone
            </h5>
            {formData.resources.map((resource, index) => (
              <div key={index}>
                {/* <div className="mb-6" key={index}>
                     <label
                       htmlFor="personId"
                       className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                     >
                       <span className="text-lg text-red-500">*</span>Person
                       Id
                     </label>
                     <input
                       type="text"
                       id="personId"
                       name="personId"
                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                       placeholder="Person's Id"
                       value={resource.personId}
                       onChange={(e) =>
                         handleResourceChange(
                           index,
                           "personId",
                           e.target.value
                         )
                       }
                       required
                     />
                   </div> */}

                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Description
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="resource-start-date"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Start Date
                  </label>
                  <div className="relative max-w-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      id="resource-start-date"
                      name="resource-start-date"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={resource.startDate}
                      // onChange={(e) =>
                      //   handleResourceChange(index, "startDate", e.target.value)
                      // }
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="resource-end-date"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    End Date
                  </label>
                  <div className="relative max-w-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      id="resource-end-date"
                      name="resource.end-date"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={resource.endDate}
                      // onChange={(e) =>
                      //   handleResourceChange(index, "endDate", e.target.value)
                      // }
                    />
                  </div>
                </div>

                {/* <div className="mb-6">
                     <label
                       htmlFor="acquisitionPersonId"
                       className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                     >
                       <span className="text-lg text-red-500">*</span>Acquisition Person Id
                     </label>
                     <input
                       type="text"
                       id="acquisitionPersonId"
                       name="acquisitionPersonId"
                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                       placeholder="Acquisition Person's Id"
                       value={resource.acquisitionPersonId}
                       onChange={(e) =>
                         handleResourceChange(
                           index,
                           "acquisitionPersonId",
                           e.target.value
                         )
                       }
                     />
                   </div> */}
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>MileStone
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Hours
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Rate
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Discount
                    Percent
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Discount
                    Amount
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>SAC
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>998311</option>
                    <option value="In Progress">998312</option>
                    <option value="Cancelled">998313</option>
                    <option value="Completed">998314</option>
                    <option value="Yet to Start">9983</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Time Tracking
                    Report Url
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Taxable
                    Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>SGST Rate
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>0</option>
                    <option value="In Progress">9</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>SGST Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>CGST Rate
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>0</option>
                    <option value="In Progress">9</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>CGST Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>IGST Rate
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>0</option>
                    <option value="In Progress">18</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>IGST Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="start-date"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Due Date
                  </label>
                  <div className="relative max-w-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Payment Link
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>User
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>0</option>
                    <option value="In Progress">18</option>
                  </select>
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Reviewed By
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>0</option>
                    <option value="In Progress">18</option>
                  </select>
                </div>
                <h5 className="mb-6 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400">
                  <svg
                    className="h-4 w-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                  SERVICES
                </h5>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Services
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Name
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Description
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="start-date"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Service End
                    Date
                  </label>
                  <div className="relative max-w-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Milestone
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Hours
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Rate
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Discount
                    Percent
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Discount
                    Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>SAC
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>998311</option>
                    <option value="In Progress">998312</option>
                    <option value="In Progress">998312</option>
                    <option value="In Progress">998313</option>
                    <option value="In Progress">998314</option>
                    <option value="In Progress">9983</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Time Tracker
                    Report Url
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Taxable
                    Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>SGST Rate
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>0</option>
                    <option value="In Progress">9</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>SGST Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>CGST Rate
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>0</option>
                    <option value="In Progress">9</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>CGST Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>IGST Rate
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option selected>0</option>
                    <option value="In Progress">18</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>IGST Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <h5 className="mb-6 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400">
                  <svg
                    className="h-4 w-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                  ADJUSTMENT
                </h5>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="DRAFT">Draft</option>
                    <option value="FINALIZED">Finalized</option>
                    <option value="DUE">Due</option>
                    <option value="PAID">Paid</option>
                    <option value="PART_PAID_PART_DUE">
                      Part Paid, Part Due
                    </option>
                    <option value="PART_PAID_PART_FORGIVEN">
                      Part Paid, Part Forgiven
                    </option>
                    <option value="FORGIVEN">Forgiven</option>
                    <option value="CANCELLED_OR_VOID">Cancelled/Void</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Paid Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Forgive
                    Amount
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Paid Amount
                    (INR)
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Forgive
                    Reason
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Cancellation
                    Reason
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mx-auto mb-6">
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Payment
                    Channel
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="WISE">Wise</option>
                    <option value="WISE_ACH">Wise ACH</option>
                    <option value="XE">XE</option>
                    <option value="UPWORK">Upwork</option>
                    <option value="AIRWALLEX">Airwallex</option>
                    <option value="PAYPAL">PayPal</option>
                    <option value="INTERNATIONAL_WIRE">
                      International Wire
                    </option>
                    <option value="NEFT/UPI">NEFT/UPI</option>
                    <option value="CHEQUE_INR">Cheque INR</option>
                    <option value="CASH_INR">Cash INR</option>
                    <option value="CASH_USD">Cash USD</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="projectName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="text-lg text-red-500">*</span>Lost Amount
                    (INR)
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            ))}

            <button
              type="submit"
              onClick={handleSubmit}
              className="mb-2 block w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddDrawer;
