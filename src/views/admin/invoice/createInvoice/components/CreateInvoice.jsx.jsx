import React, { useState, useRef, useEffect } from "react";
import { FaBuilding, FaUser } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaPlus, FaMinus } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const AddInvoice = ({
  onClose,
  handleInputChange,
  formData,
  handleSubmit,
  clients,
  managers,
  handleServiceChange,
  handleAdjustmentChange,
  drawerRef,
  isDrawerOpen,
  handleDrawerToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showmodalsender, setshowmodalsender] = useState(false);
  const [showmodalrecipeint, setshowmodalrecipent] = useState(false);
  const [spin, setSpin] = useState(false);

  const dropdownRef = useRef(null);

  const [isOpenaccor, setIsOpenaccor] = useState(false);

  useEffect(() => {
    console.log("Projects Create invoice", projects);
  });

  // Invoice Drawer
  const data = ["Apple", "Banana"];

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [projects, setProjects] = useState([]);

  const inputRef = useRef(null);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterData(searchTerm);
  };

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  const filterData = (searchTerm) => {
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleItemClick = (value) => {
    setSearchTerm(value);
    setShowDropdown(false);
  };

  // Invoice Drawer

  const toggleAccordion = () => {
    setIsOpenaccor(!isOpenaccor);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setSpin(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/project/`,
          { method: "GET" }
        );
        const data = await response.json();
        setProjects(data.data.projects);
        setSpin(false);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div
      className={`relative mx-auto mt-4 h-auto w-[70%] bg-white px-4 py-8 pb-16 ${
        showmodalsender || showmodalrecipeint ? "overflow-hidden" : ""
      }`}
    >
      {/* Overlay */}
      {(showmodalsender || showmodalrecipeint) && (
        <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-50"></div>
      )}

      {/* 1st row */}
      <div className="flex justify-between">
        {/* 1st col */}
        <div className=" mx-4 mt-4 flex h-[50px] w-[280px] items-center rounded-lg border  border-gray-300 bg-gray-100  px-2 hover:border-[3px] hover:border-blue-500">
          <div className="file_upload  relative rounded-lg">
            <div className="flex w-max items-center ">
              <label className="flex p-1">
                <input
                  className="hidden w-36 cursor-pointer text-sm"
                  type="file"
                  multiple
                />
                <GrGallery className="mt-1 h-4 w-8" />
                <div className="">Choose logo or drop it here</div>
              </label>
            </div>
          </div>
        </div>

        {/* 2nd col */}
        <div>
          <div
            className="relative mt-3 rounded-lg bg-gray-100 text-left hover:border-[3px] hover:border-blue-500"
            ref={dropdownRef}
          >
            <div>
              <button
                type="button"
                className="inline-flex  w-[136px] rounded-md border border-gray-300 px-4   py-2  text-sm font-medium text-gray-700"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                {spin ? <Spinner /> : "Projects"}
                <svg
                  className="-mr-1 ml-8 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.832.445l4.75 7a1 1 0 01-.832 1.555H5.25a1 1 0 01-.832-1.555l4.75-7A1 1 0 0110 3zm0 2.25L7.125 10h5.75L10 5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="absolute right-0 mt-2 w-[136px] origin-top-right rounded-md bg-white shadow-lg focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
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
                    value={formData.projectId}
                    onChange={handleInputChange}
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
              </div>
            )}
          </div>
        </div>
        {/* 3rd col */}
        <div className="mr-4">
          <input
            type="text"
            className="mt-[10px] rounded-lg border border-gray-300 bg-gray-200 py-[7px] hover:border-[3px] hover:border-blue-500 "
          />
        </div>
      </div>
      {/* 2nd row */}
      <div className=" mt-4 flex w-full items-center justify-end gap-4 pr-4">
        <div className="font-bold text-gray-600">Issue date</div>
        <div>
          <input
            type="date"
            name=""
            id=""
            className="border border-gray-300 bg-gray-200 p-1"
          />
        </div>
      </div>
      {/* 3rd row */}
      <div className="mt-6 flex w-full items-center justify-end gap-4 pr-4">
        <div className="font-bold text-gray-600">Due date</div>
        <div>
          <input
            type="date"
            name=""
            id=""
            className="border border-gray-300 bg-gray-200 p-1"
          />
        </div>
      </div>
      {/* 4th row */}
      <div className="mx-2 mt-12 flex ">
        <div className="relative flex items-start justify-between  gap-36 rounded-lg p-4">
          {/* From Section */}
          <div
            className="flex items-start space-x-3 rounded-lg p-3 shadow"
            onClick={() => setshowmodalsender(true)}
          >
            <div className="flex flex-col">
              <h1 className="font-semibold">From</h1>
              <FaBuilding className="h-6 w-6 text-gray-700" />
            </div>

            <div className="flex flex-col justify-start">
              <div className="font-semibold text-gray-700">Sender name</div>
              <div className="text-sm text-gray-500">
                Sender contact details
              </div>
            </div>
          </div>

          {showmodalsender && (
            <div className="absolute inset-0 z-50 flex  w-[700px] items-center justify-center">
              <div className="relative mx-4 ml-16 h-[600px] w-full overflow-y-scroll rounded-lg bg-white p-8">
                <button
                  className="absolute top-4 right-4"
                  onClick={() => setshowmodalsender(false)}
                >
                  ✖
                </button>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company / Sender name
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Tax Registration Number
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Address line 1
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Address line 2
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-blue-600"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 p-2 text-white"
                  >
                    Set sender data
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Bill To Section */}
          <div
            className="flex cursor-pointer items-start space-x-3 rounded-lg p-3 shadow"
            onClick={() => setshowmodalrecipent(true)}
          >
            <div className="flex flex-col">
              <h1 className="font-semibold">Bill to</h1>
              <FaUser className="h-6 w-6 text-gray-700" />
            </div>

            <div className="flex flex-col justify-start">
              <div className="font-semibold text-gray-700">Recipient name</div>
              <div className="text-sm text-gray-500">
                Recipient contact details
              </div>
            </div>
          </div>
          {showmodalrecipeint && (
            <div className="absolute inset-0 z-50 flex  w-[700px] items-center justify-center">
              <div className="relative mx-4 ml-16 h-[600px] w-full overflow-y-scroll rounded-lg bg-white p-8">
                <button
                  className="absolute top-4 right-4"
                  onClick={() => setshowmodalrecipent(false)}
                >
                  ✖
                </button>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company / Sender name
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Tax Registration Number
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Address line 1
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Address line 2
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Additional info
                    </label>
                    <textarea
                      className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-blue-600"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 p-2 text-white"
                  >
                    Set Recipient Data
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Item List Section */}
      {/* 5th row */}

      <div className="mx-auto mt-4 w-full max-w-4xl">
        <div className="rounded-lg ">
          {isOpenaccor && (
            <div className="border-b border-gray-100 bg-white p-4">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-lg border border-gray-300 p-2"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="w-full rounded-lg border border-gray-300 p-2"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    placeholder="Unit price"
                    className="w-full rounded-lg border border-gray-300 p-2"
                  />
                </div>
                <div className="col-span-1">
                  <select className="w-full rounded-lg border border-gray-300 p-2">
                    <option>Non Tax...</option>
                    <option>Taxable</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    placeholder="Subtotal"
                    className="w-full rounded-lg border border-gray-300 p-2"
                  />
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  placeholder="Description"
                  className="w-full rounded-lg border border-gray-300 p-2"
                ></textarea>
              </div>
            </div>
          )}
        </div>
        <div
          className="mt-8 flex cursor-pointer items-center justify-center border border-gray-300 p-4 hover:border-[3px] hover:border-blue-500"
          onClick={toggleAccordion}
        >
          {isOpenaccor ? (
            <FaMinus className="mr-2 text-gray-700" />
          ) : (
            <FaPlus className="mr-2 text-gray-700" />
          )}
          <span className="font-semibold text-gray-700">
            Add new invoice item
          </span>
        </div>
      </div>
      {/* 6th row */}
      <div className="flex justify-end">
        <div className="mt-8  max-w-xs rounded-md  bg-white p-4 px-8 shadow-md">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="font-medium text-gray-700">Invoice summary</span>
            <select className="rounded-md border p-1 px-4">
              <option value="USD">USD</option>
              {/* Add more currencies as needed */}
            </select>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-600">$0.00</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="text-gray-600">Tax</span>
            <span className="text-gray-600">$0.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span className="text-gray-800">Total</span>
            <span className="text-gray-800">$0.00</span>
          </div>
        </div>
      </div>
      {/* 7th row */}
      <hr className="my-8 border border-gray-200" />
      <div>
        <input
          type="text"
          className="mt-[10px] w-full rounded-lg border border-gray-300 bg-gray-200 py-[15px] px-4 hover:border-[3px] hover:border-blue-500"
          placeholder="Invoice terms"
        />
      </div>
    </div>
  );
};

export default AddInvoice;
