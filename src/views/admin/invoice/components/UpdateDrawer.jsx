import React from "react";

const UpdateDrawer = ({
  isUpdateDrawerOpen,
  updateRef,
  idData,
  handleUpdateDrawerToggle,
  handleUpdateChange,
  handleAdjustmentChange,
  sendUpdate,
  clients,
  projects,
  managers,
  handleServiceChange,
  handleSubmit,
  selectedId,
}) => {
  return (
    isUpdateDrawerOpen && (
      <div
        ref={updateRef}
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
          Update Invoice
        </h5>
        <button
          type="button"
          onClick={handleUpdateDrawerToggle}
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
          <div className="mx-auto mb-6">
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Client Name
            </label>
            <select
              id="clientId"
              name="clientId"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
              value={idData.clientId}
              onChange={handleUpdateChange}
            >
              <option value="" disabled>
                Choose Client
              </option>
              {clients.map((client) => (
                <option key={client._id} value={client._id}>
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
              id="projectId"
              name="projectId"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
              value={idData.projectId}
              onChange={handleUpdateChange}
            >
              <option value="" disabled>
                Choose Project
              </option>
              {projects.map((project) => (
                <option key={project._id} value={project._id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="Phone Number"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Phone Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Phone Number"
              value={idData.number}
              onChange={handleUpdateChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Po Number"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Po Number
            </label>
            <input
              type="text"
              id="poNumber"
              name="poNumber"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Po Number"
              value={idData.poNumber}
              onChange={handleUpdateChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Date of Invoice "
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Date of Invoice
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
                id="date"
                name="date"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={idData.date}
                onChange={handleUpdateChange}
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
                id="serviceFromDate"
                name="serviceFromDate"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={idData.serviceFromDate}
                onChange={handleUpdateChange}
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
                id="serviceToDate"
                name="serviceToDate"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={idData.serviceToDate}
                onChange={handleUpdateChange}
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

            <div className="relative max-w-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
                <svg
                  className="h-4 w-4  text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
            </div>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={idData.dueDate}
              onChange={handleUpdateChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Prepared By"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              <span className="text-lg text-red-500">*</span>Prepared By
            </label>
            <select
              id="preparedBy"
              name="preparedBy"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={idData.preparedBy}
              onChange={handleUpdateChange}
              required
            >
              <option value="" disabled>
                Choose an admin
              </option>
              {managers.map((manager) => (
                <option key={manager._id} value={manager._id}>
                  {manager.displayName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="Reviewed By"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              <span className="text-lg text-red-500">*</span>Reviewed By
            </label>
            <select
              id="reviewedBy"
              name="reviewedBy"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={idData.reviewedBy}
              onChange={handleUpdateChange}
              required
            >
              <option value="" disabled>
                Choose a Manager
              </option>
              {managers.map((manager) => (
                <option key={manager._id} value={manager._id}>
                  {manager.displayName}
                </option>
              ))}
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
            Services
          </h5>
          {idData.services.map((service, index) => (
            <div key={index}>
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
                  placeholder="Name"
                  value={service.name}
                  onChange={(e) =>
                    handleServiceChange(index, "name", e.target.value)
                  }
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="projectName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="text-lg text-red-500">*</span>Milestones
                </label>
                <input
                  type="text"
                  id="mileStone"
                  name="mileStone"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Milestones"
                  value={service.mileStone}
                  onChange={(e) =>
                    handleServiceChange(index, "mileStone", e.target.value)
                  }
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
                  id="description"
                  name="description"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Description"
                  value={service.description}
                  onChange={(e) =>
                    handleServiceChange(index, "description", e.target.value)
                  }
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
                  id="hours"
                  name="hours"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Hours"
                  value={service.hours}
                  onChange={(e) =>
                    handleServiceChange(index, "hours", e.target.value)
                  }
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
                  id="rate"
                  name="rate"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Rate"
                  value={service.rate}
                  onChange={(e) =>
                    handleServiceChange(index, "rate", e.target.value)
                  }
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
                  id="discountPercent"
                  name="discountPercent"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Discount
                  Percent"
                  value={service.discountPercent}
                  onChange={(e) =>
                    handleServiceChange(
                      index,
                      "discountPercent",
                      e.target.value
                    )
                  }
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="projectName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="text-lg text-red-500">*</span>Discount Amount
                </label>
                <input
                  type="number"
                  id="discountAmount"
                  name="discountAmount"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Discount
                  Amount"
                  value={service.discountAmount}
                  onChange={(e) =>
                    handleServiceChange(index, "discountAmount", e.target.value)
                  }
                  required
                />
              </div>
              <div className="mx-auto mb-6">
                <label
                  htmlFor="defaultAllocation"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="text-lg text-red-500">*</span>SAC
                </label>
                <select
                  id="SAC"
                  name="SAC"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={service.SAC}
                  onChange={(e) =>
                    handleServiceChange(index, "SAC", e.target.value)
                  }
                  required
                >
                  <option value="">Choose a SAC</option>
                  {["998311", "998312", "998313", "998314", "9983"].map(
                    (value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="projectName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="text-lg text-red-500">*</span>Time tracker
                  report URL
                </label>
                <input
                  type="text"
                  id="timeTrackerReportUrl"
                  name="timeTrackerReportUrl"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Time tracker
                  report URL"
                  value={service.timeTrackerReportUrl}
                  onChange={(e) =>
                    handleServiceChange(
                      index,
                      "timeTrackerReportUrl",
                      e.target.value
                    )
                  }
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="projectName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="text-lg text-red-500">*</span>Taxable Amount
                </label>
                <input
                  type="number"
                  id="taxableAmount"
                  name="taxableAmount"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Taxable
                  Amount"
                  value={service.taxableAmount}
                  onChange={(e) =>
                    handleServiceChange(index, "taxableAmount", e.target.value)
                  }
                  required
                />
              </div>
              <div className="mx-auto mb-6">
                <label
                  htmlFor="defaultAllocation"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="text-lg text-red-500">*</span>SGST Rate
                </label>
                <select
                  id="sgstRate"
                  name="sgstRate"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={service.sgstRate}
                  onChange={(e) =>
                    handleServiceChange(index, "sgstRate", e.target.value)
                  }
                  required
                >
                  <option value="">Choose a SGST</option>
                  {["Nil", "9"].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
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
                  id="sgstAmount"
                  name="sgstAmount"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="SGST Amount"
                  value={service.sgstAmount}
                  onChange={(e) =>
                    handleServiceChange(index, "sgstAmount", e.target.value)
                  }
                  required
                />
              </div>
              <div className="mx-auto mb-6">
                <label
                  htmlFor="defaultAllocation"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="text-lg text-red-500">*</span>CGST Rate
                </label>
                <select
                  id="cgstRate"
                  name="cgstRate"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={service.cgstRate}
                  onChange={(e) =>
                    handleServiceChange(index, "cgstRate", e.target.value)
                  }
                  required
                >
                  <option value="">Choose a CGST</option>
                  {["Nil", "9"].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
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
                  id="cgstAmount"
                  name="cgstAmount"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Project Name"
                  value={service.cgstAmount}
                  onChange={(e) =>
                    handleServiceChange(index, "cgstAmount", e.target.value)
                  }
                  required
                />
              </div>
              <div className="mx-auto mb-6">
                <label
                  htmlFor="defaultAllocation"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="text-lg text-red-500">*</span>IGST Rate
                </label>
                <select
                  id="igstRate"
                  name="igstRate"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={service.igstRate}
                  onChange={(e) =>
                    handleServiceChange(index, "igstRate", e.target.value)
                  }
                  required
                >
                  <option value="">Choose a IGST</option>
                  {["Nil", "9"].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
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
                  id="igstAmount"
                  name="igstAmount"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="IGST Amount"
                  value={service.igstAmount}
                  onChange={(e) =>
                    handleServiceChange(index, "igstAmount", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          ))}

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
            Adjustments
          </h5>
          {idData.adjustments.map((adjustment, index) => (
            <div key={index}>
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
                  placeholder="Name"
                  value={adjustment.name}
                  onChange={(e) =>
                    handleAdjustmentChange(index, "name", e.target.value)
                  }
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
                  id="amount"
                  name="amount"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Amount"
                  value={adjustment.amount}
                  onChange={(e) =>
                    handleAdjustmentChange(index, "amount", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          ))}
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
              value={idData.status}
              onChange={handleUpdateChange}
              required
            >
              <option value="">Choose a Status</option>
              {[
                "DRAFT",
                "FINALIZED",
                "DUE",
                "PAID",
                "PART_PAID_PART_DUE",
                "PART_PAID_PART_FORGIVEN",
                "FORGIVEN",
                "CANCELLED_OR_VOID",
              ].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="paidAmount"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Paid Amount
            </label>
            <input
              type="number"
              id="paidAmount"
              name="paidAmount"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Paid Amount"
              value={idData.paidAmount}
              onChange={handleUpdateChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="forgivenAmount"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Forgiven Amount
            </label>
            <input
              type="number"
              id="forgivenAmount"
              name="forgivenAmount"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Forgiven Amount"
              value={idData.forgivenAmount}
              onChange={handleUpdateChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="forgivenAmount"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Paid Amount (INR)
            </label>
            <input
              type="number"
              id="paidAmountINR"
              name="paidAmountINR"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Paid Amount (INR)"
              value={idData.paidAmountINR}
              onChange={handleUpdateChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="forgivenReason"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Forgive Reason
            </label>
            <input
              type="text"
              id="forgivenReason"
              name="forgivenReason"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Forgive Reason"
              value={idData.forgivenReason}
              onChange={handleUpdateChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="cancellationReason"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Cancellation Reason
            </label>
            <input
              type="text"
              id="cancellationReason"
              name="cancellationReason"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Cancellation
              Reason"
              value={idData.cancellationReason}
              onChange={handleUpdateChange}
              required
            />
          </div>
          <div className="mx-auto mb-6">
            <label
              htmlFor="paymentChannel"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-lg text-red-500">*</span>Payment Channel
            </label>
            <select
              id="paymentChannel"
              name="paymentChannel"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={idData.paymentChannel}
              onChange={handleUpdateChange}
              required
            >
              <option value="">Choose a Payment Channel</option>
              {[
                "WISE",
                "WISE_ACH",
                "XE",
                "UPWORK",
                "AIRWALLEX",
                "PAYPAL",
                "INTERNATIONAL_WIRE",
                "NEFT/UPI",
                "CHEQUE_INR",
                "CASH_INR",
                "CASH_USD",
              ].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            onClick={sendUpdate}
            className="mb-2 block w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </form>
      </div>
    )
  );
};

export default UpdateDrawer;
