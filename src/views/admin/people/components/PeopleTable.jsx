import { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import Pagination from "./Pagination";
import { useAuthContext } from "hooks/useAuthContext";
import DeletePeopleConfirm from "./DeletePeopleConfirm";
import Spinner from "./Spinner";

const PeopleTable = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isUpdateDrawerOpen, setIsUpdateDrawerOpen] = useState(false);
  const { user } = useAuthContext();

  const [peopleData, setPeopleData] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [spin, setSpin]=useState(false)
  

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (event, id) => {
    event.preventDefault();
    setDeleteId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    if (!deleteId) return;
    handleDeleteRow(deleteId);
    setShowModal(false);
    setDeleteId(null);
  };

  const [formData, setFormData] = useState({
    nature: "",
    workEmail: "",
    mobile: "",
    displayName: "",
    department: "",
    employeeId: "",
    hourlyRate: 0,
    tdsRate: 0,
    gstRate: 0,
    pan: "",
    bankAccountNumber: "",
    ifscCode: "",
    paymentChannel: "",
    paymentMode: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const parsedValue = !isNaN(value) ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: parsedValue });
    // setFormData({ ...formData, [name]: value });
  };

  const handleUpdateChange = (event) => {
    const { name, value } = event.target;
    const parsedValue = !isNaN(value) ? parseFloat(value) : value;
    setIdData({ ...idData, [name]: parsedValue });
  };

  const handleSubmit = (event) => {
    setSpin(true);
    event.preventDefault();
    console.log(formData);

    // Send data to the API endpoint
    fetch("https://i-crm-backend-6fqp.onrender.com/people/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setIsDrawerOpen(false);
        setSubmitted((prevSubmitted) => !prevSubmitted);
        setSpin(false);
        // Optionally, you can show a success message or redirect the user to another page
      })
      .catch((error) => {
        console.error("Error:", error);
        // Optionally, you can show an error message to the user
      });
  };

  useEffect(() => {
    setSpin(true);
    fetch("https://i-crm-backend-6fqp.onrender.com/people/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPeopleData(data.data.people);
        setSpin(false);
        // setPeopleData((prevData) => [...data.data.people, ...prevData]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [deleted, submitted, updated]);

  const handleDeleteRow = (id) => {
    setSpin(true);
    fetch(`https://i-crm-backend-6fqp.onrender.com/people/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete row");
        }
        setPeopleData((prevData) => prevData.filter((row) => row.id !== id));
        setDeleted((prevDeleted) => !prevDeleted);
        setSpin(false);
      })
      .catch((error) => console.error("Error deleting row:", error));
  };

  const drawerRef = useRef(null);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  //update functions and states

  const [selectedId, setSelectedId] = useState(null);

  const [idData, setIdData] = useState({
    nature: "",
    workEmail: "",
    mobile: "",
    displayName: "",
    department: "",
    employeeId: "",
    hourlyRate: 0,
    tdsRate: 0,
    gstRate: 0,
    pan: "",
    bankAccountNumber: "",
    ifscCode: "",
    paymentChannel: "",
    paymentMode: "",
  });

  const handleUpdate = async (event, id) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://i-crm-backend-6fqp.onrender.com/people/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setIdData({
        nature: data.nature || "",
        workEmail: data.workEmail || "",
        mobile: data.mobile || "",
        displayName: data.displayName || "",
        department: data.department || "",
        employeeId: data.employeeId || "",
        hourlyRate: data.hourlyRate || 0,
        tdsRate: data.tdsRate || 0,
        gstRate: data.gstRate || 0,
        pan: data.pan || "",
        bankAccountNumber: data.bankAccountNumber || "",
        ifscCode: data.ifscCode || "",
        paymentChannel: data.paymentChannel || "",
        paymentMode: data.paymentMode || "",
      });
      setSelectedId(id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdateDrawerToggle = () => {
    setIsUpdateDrawerOpen(!isUpdateDrawerOpen);
  };

  const sendUpdate = (event) => {
    setSpin(true);
    event.preventDefault();
    console.log(idData);

    // Send data to the API endpoint
    fetch(`https://i-crm-backend-6fqp.onrender.com/people/${selectedId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(idData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setIsUpdateDrawerOpen(false);
        setUpdated((prevUpdated) => !prevUpdated);
        setSpin(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateRef = useRef(null);

  const handleClickOutsideUpdate = (event) => {
    if (updateRef.current && !updateRef.current.contains(event.target)) {
      setIsUpdateDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isUpdateDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutsideUpdate);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideUpdate);
    };
  }, [isUpdateDrawerOpen]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = peopleData.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div className="min-h-fit bg-white">
      <div className="relative m-4 overflow-x-auto p-8 shadow-md sm:rounded-lg">
        <div className="flex-column flex flex-wrap items-center justify-between space-y-4 pb-4 sm:flex-row sm:space-y-0">
          <div>
            <button
              id="dropdownRadioButton"
              onClick={handleDropdownToggle}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              type="button"
            >
              {/* Icons and text here */}
              <svg
                className="h-3 w-3 text-gray-500 me-3 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
              </svg>
              Recents
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showDropdown && (
              <div
                id="dropdownRadio"
                className="absolute z-10 w-48 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul
                  className="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownRadioButton"
                >
                  <li>
                    <div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-1"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                      />
                      <label
                        for="filter-radio-example-1"
                        className="w-full rounded text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                      >
                        Last day
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        checked=""
                        id="filter-radio-example-2"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                      />
                      <label
                        for="filter-radio-example-2"
                        className="w-full rounded text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                      >
                        Last 7 days
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-3"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                      />
                      <label
                        for="filter-radio-example-3"
                        className="w-full rounded text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                      >
                        Last 30 days
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-4"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                      />
                      <label
                        for="filter-radio-example-4"
                        className="w-full rounded text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                      >
                        Last month
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-5"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                      />
                      <label
                        for="filter-radio-example-5"
                        className="w-full rounded text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                      >
                        Last year
                      </label>
                    </div>
                  </li>
                  {/* Other list items */}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-row justify-between gap-4">
            <div className="relative">
              <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3 rtl:right-0">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="w-76 block rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search for people"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              id="dropdownRadioButton"
              onClick={handleDrawerToggle}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-blue-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              type="button"
            >
              ADD NEW PERSON
            </button>
            {/* Drawer starts */}
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
                  Add Person
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
                  <div className="mb-6">
                    <label
                      htmlFor="displayName"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Full Name
                    </label>
                    <input
                      type="text"
                      id="displayName"
                      name="displayName"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Name"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mx-auto mb-6">
                    <label
                      htmlFor="department"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                    >
                      <option selected>Choose a department</option>
                      <option value="Engineering">Engineering</option>
                      {/* <option value="Wise">Wise</option>
                      <option value="NEFT">NEFT</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Cash">Cash</option> */}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Phone
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      name="mobile"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your phone number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="workEmail"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your email"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mx-auto mb-6">
                    <label
                      htmlFor="nature"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Nature
                    </label>
                    <select
                      id="nature"
                      name="nature"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={formData.nature}
                      onChange={handleInputChange}
                      required
                    >
                      <option selected>Choose a nature</option>
                      <option value="REFERRAL_PARTNER">REFERRAL_PARTNER</option>
                      {/* <option value="Wise">Wise</option>
                      <option value="NEFT">NEFT</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Cash">Cash</option> */}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="employeeId"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      External ID
                    </label>
                    <input
                      type="text"
                      id="employeeId"
                      name="employeeId"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Optional for Referral Partner"
                      value={formData.employeeId}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* <div className="mb-6">
                    <label
                      htmlFor="department"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Engineering, Sales or Outside Inzint..."
                    />
                  </div> */}

                  <div className="mb-6">
                    <label
                      htmlFor="hourly rate"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Hourly Rate
                    </label>
                    <input
                      type="number"
                      id="hourly-rate"
                      name="hourlyRate"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your hourly rate"
                      value={formData.hourlyRate}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="tds rate"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      TDS Rate
                    </label>
                    <input
                      type="text"
                      id="tds-rate"
                      name="tdsRate"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your TDS Rate"
                      value={formData.tdsRate}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="gst rate"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gst Rate
                    </label>
                    <input
                      type="text"
                      id="gst-rate"
                      name="gstRate"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Gst Rate"
                      value={formData.gstRate}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="pan"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      PAN Number
                    </label>
                    <input
                      type="text"
                      id="pan"
                      name="pan"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Pan Card no."
                      value={formData.pan}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="a/c"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bank Account Number
                    </label>
                    <input
                      type=""
                      id="a/c"
                      name="bankAccountNumber"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Bank Account Number"
                      value={formData.bankAccountNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="ifsc"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      id="ifsc"
                      name="ifscCode"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Bank's IFSC code"
                      value={formData.ifscCode}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mx-auto mb-6">
                    <label
                      htmlFor="payment-channel"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Payment
                      Channel
                    </label>
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={formData.paymentChannel}
                      onChange={handleInputChange}
                      name="paymentChannel"
                    >
                      <option selected>Choose a channel</option>
                      <option value="Domestic Bank Transfer">
                        Domestic Bank Transfer
                      </option>
                      <option value="International Bank Transfer">
                        International Bank Transfer
                      </option>
                      <option value="Via Third Party">Via Third Party</option>
                    </select>
                    {/* <input
                      type="text"
                      id="payment-channel"
                      name="paymentChannel"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Preferred Channel Partner"
                      value={formData.paymentChannel}
                      onChange={handleInputChange}
                    /> */}
                  </div>

                  <div className="mx-auto mb-6">
                    <label
                      htmlFor="payment-mode"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Payment
                      Mode
                    </label>
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={formData.paymentMode}
                      onChange={handleInputChange}
                      name="paymentMode"
                    >
                      <option selected>Choose a mode</option>
                      <option value="International Wire">
                        International Wire
                      </option>
                      <option value="Wise">Wise</option>
                      <option value="NEFT">NEFT</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Cash">Cash</option>
                    </select>
                  </div>

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
            {/* Drawer ends */}
            {/* Update Drawer starts */}
            {isUpdateDrawerOpen && (
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
                  Update Person
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
                  <div className="mb-6">
                    <label
                      htmlFor="displayName"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Full Name
                    </label>
                    <input
                      type="text"
                      id="displayName"
                      name="displayName"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Name"
                      value={idData.displayName}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>
                  <div className="mx-auto mb-6">
                    <label
                      htmlFor="department"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={idData.department}
                      onChange={handleUpdateChange}
                    >
                      <option selected>Choose a department</option>
                      <option value="Engineering">Engineering</option>
                      {/* <option value="Wise">Wise</option>
                      <option value="NEFT">NEFT</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Cash">Cash</option> */}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Phone
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      name="mobile"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your phone number"
                      value={idData.mobile}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="workEmail"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your email"
                      value={idData.workEmail}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>

                  <div className="mx-auto mb-6">
                    <label
                      htmlFor="nature"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Nature
                    </label>
                    <select
                      id="nature"
                      name="nature"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={idData.nature}
                      onChange={handleUpdateChange}
                    >
                      <option selected>Choose a nature</option>
                      <option value="REFERRAL_PARTNER">REFERRAL_PARTNER</option>
                      {/* <option value="Wise">Wise</option>
                      <option value="NEFT">NEFT</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Cash">Cash</option> */}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="employeeId"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      External ID
                    </label>
                    <input
                      type="text"
                      id="employeeId"
                      name="employeeId"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Optional for Referral Partner"
                      value={idData.employeeId}
                      onChange={handleUpdateChange}
                    />
                  </div>

                  {/* <div className="mb-6">
                    <label
                      htmlFor="department"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Engineering, Sales or Outside Inzint..."
                    />
                  </div> */}

                  <div className="mb-6">
                    <label
                      htmlFor="hourly rate"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Hourly Rate
                    </label>
                    <input
                      type="number"
                      id="hourly-rate"
                      name="hourlyRate"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your hourly rate"
                      value={idData.hourlyRate}
                      onChange={handleUpdateChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="tds rate"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      TDS Rate
                    </label>
                    <input
                      type="text"
                      id="tds-rate"
                      name="tdsRate"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your TDS Rate"
                      value={idData.tdsRate}
                      onChange={handleUpdateChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="gst rate"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gst Rate
                    </label>
                    <input
                      type="text"
                      id="gst-rate"
                      name="gstRate"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Gst Rate"
                      value={idData.gstRate}
                      onChange={handleUpdateChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="pan"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      PAN Number
                    </label>
                    <input
                      type="text"
                      id="pan"
                      name="pan"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Pan Card no."
                      value={idData.pan}
                      onChange={handleUpdateChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="a/c"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bank Account Number
                    </label>
                    <input
                      type=""
                      id="a/c"
                      name="bankAccountNumber"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Bank Account Number"
                      value={idData.bankAccountNumber}
                      onChange={handleUpdateChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="ifsc"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      id="ifsc"
                      name="ifscCode"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Bank's IFSC code"
                      value={idData.ifscCode}
                      onChange={handleUpdateChange}
                    />
                  </div>

                  <div className="mx-auto mb-6">
                    <label
                      htmlFor="payment-channel"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Payment
                      Channel
                    </label>
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={idData.paymentChannel}
                      onChange={handleUpdateChange}
                      name="paymentChannel"
                    >
                      <option selected>Choose a channel</option>
                      <option value="Domestic Bank Transfer">
                        Domestic Bank Transfer
                      </option>
                      <option value="International Bank Transfer">
                        International Bank Transfer
                      </option>
                      <option value="Via Third Party">Via Third Party</option>
                    </select>
                    {/* <input
                      type="text"
                      id="payment-channel"
                      name="paymentChannel"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Your Preferred Channel Partner"
                      value={formData.paymentChannel}
                      onChange={handleInputChange}
                    /> */}
                  </div>

                  <div className="mx-auto mb-6">
                    <label
                      htmlFor="payment-mode"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <span className="text-lg text-red-500">*</span>Payment
                      Mode
                    </label>
                    <select
                      id="countries"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      value={idData.paymentMode}
                      onChange={handleUpdateChange}
                      name="paymentMode"
                    >
                      <option selected>Choose a mode</option>
                      <option value="International Wire">
                        International Wire
                      </option>
                      <option value="Wise">Wise</option>
                      <option value="NEFT">NEFT</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Cash">Cash</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    onClick={(event) => sendUpdate(event)}
                    className="mb-2 block w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update
                  </button>
                </form>
              </div>
            )}
            {/* Update Drawer ends */}
          </div>
          {/* Add New Person */}
        </div>
        {showModal && (
          <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
            <div className="absolute top-0 h-full w-full bg-gray-900 opacity-50"></div>
            <div className="z-50 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <DeletePeopleConfirm
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
              />
            </div>
          </div>
        )}
        <table className="z-[-1]x w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4 items-center">
                {/* <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                  />
                  <label for="checkbox-all-search" 
                  className="sr-only">
                    checkbox
                  </label>
                </div> */}
                S.No.
              </th>
              <th scope="col" className="px-6 py-3">
                Full name
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems
              ?.filter((person) => {
                if (!searchQuery.trim()) return true;

                const query = searchQuery.toLowerCase();

                return (
                  person.displayName?.toLowerCase().includes(query) ||
                  person.department?.toLowerCase().includes(query) ||
                  person.mobile?.toLowerCase().includes(query) ||
                  person.workEmail?.toLowerCase().includes(query)
                );
              })
              ?.map((row, index) => (
                <tr
                  key={row.id}
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    {/* <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    /> */}
                    {((currentPage - 1) * itemsPerPage) + index + 1}.
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {/* {row.firstname+" "+row.lastname} */}
                    {row.displayName}
                  </th>
                  <td className="px-6 py-4">{row.department}</td>
                  <td className="px-6 py-4">{row.mobile}</td>
                  <td className="px-6 py-4">{row.workEmail}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-row items-center gap-3">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        onClick={(event) => {
                          handleUpdate(event, row._id);
                          handleUpdateDrawerToggle();
                        }}
                      >
                        Edit
                      </a>
                      <MdDelete
                        className="text-lg text-red-500 hover:text-red-300 cursor-pointer"
                        onClick={(event) => handleDeleteClick(event, row._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {spin && <Spinner />}

      {/* Pagination */}
      <div className="mr-6 mb-4 flex justify-end">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={peopleData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PeopleTable;
