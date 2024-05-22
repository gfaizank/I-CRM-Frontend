import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import Pagination from "./Pagination";
import { useAuthContext } from "hooks/useAuthContext";
import DeleteClientConfirmation from "./DeleteClientConfirmation";
import Spinner from "./Spinner";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AddDrawer from "./AddDrawer";
import UpdateDrawer from "./UpdateDrawer";

export default function ClientTable() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isUpdateDrawerOpen, setIsUpdateDrawerOpen] = useState(false);
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const [clientData, setClientData] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [spin, setSpin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
  };

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
    primaryContactPerson: "",
    l2ContactPerson: "",
    billingContactPerson: "",
    businessName: "",
    customerDisplayName: "",
    email: "",
    password: "",
    primaryContactNumber: "",
    secondaryContactNumber: "",
    GSTTreatment: "Registered",
    placeOfSupply: "",
    taxPreference: "Taxable",
    currency: "USD",
    openingBalance: 0,
    enablePortal: "YES",
    nestedFields: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const numericFields = ["hourlyRate", "tdsRate", "gstRate"];
    const shouldParse = numericFields.includes(name) && value !== "";
    const parsedValue = shouldParse ? parseFloat(value) || "" : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parsedValue,
    }));
  };

  const handleUpdateChange = (event) => {
    const { name, value } = event.target;
    const numericFields = ["hourlyRate", "tdsRate", "gstRate"];
    const shouldParse = numericFields.includes(name) && value !== "";
    const parsedValue = shouldParse ? parseFloat(value) || "" : value;
    setIdData({ ...idData, [name]: parsedValue });
  };

  const handleSubmit = (event) => {
    setSpin(true);
    event.preventDefault();
    console.log(formData);

    // Send data to the API endpoint
    fetch(`${process.env.REACT_APP_API_URL}/client`, {
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
    fetch(`${process.env.REACT_APP_API_URL}/client/`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setClientData(data.data.clients);
        setSpin(false);
        // setClientData((prevData) => [...data.data.people, ...prevData]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [deleted, submitted, updated]);

  const handleDeleteRow = (id) => {
    setSpin(true);
    fetch(`${process.env.REACT_APP_API_URL}/client/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete row");
        }
        setClientData((prevData) => prevData.filter((row) => row.id !== id));
        setDeleted((prevDeleted) => !prevDeleted);
        setSpin(false);
      })
      .catch((error) => console.error("Error deleting row:", error));
  };

  const drawerRef = useRef(null);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsOpen(true);
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
    primaryContactPerson: "",
    l2ContactPerson: "",
    billingContactPerson: "",
    businessName: "",
    customerDisplayName: "",
    email: "",
    password: "",
    primaryContactNumber: "",
    secondaryContactNumber: "",
    GSTTreatment: "Registered",
    placeOfSupply: "",
    taxPreference: "Taxable",
    currency: "USD",
    openingBalance: 0,
    enablePortal: "YES",
    nestedFields: [],
  });

  const handleUpdate = async (event, id) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/client/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setIdData({
        primaryContactPerson: data.data.client.primaryContactPerson || "",
        l2ContactPerson: data.data.client.l2ContactPerson || "",
        billingContactPerson: data.data.client.billingContactPerson || "",
        businessName: data.data.client.businessName || "",
        customerDisplayName: data.data.client.customerDisplayName || "",
        email: data.data.client.email || "",
        primaryContactNumber: data.data.client.primaryContactNumber || "",
        secondaryContactNumber: data.data.client.secondaryContactNumber || "",
        GSTTreatment: data.data.client.GSTTreatment || "Registered",
        placeOfSupply: data.data.client.placeOfSupply || "",
        taxPreference: data.data.client.taxPreference || "Taxable",
        currency: data.data.client.currency || "USD",
        openingBalance: data.data.client.openingBalance || 0,
        enablePortal: data.data.client.enablePortal || "YES",
        nestedFields: data.data.client.nestedFields || [],
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
    fetch(`${process.env.REACT_APP_API_URL}/client/${selectedId}`, {
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
  const currentItems = clientData.slice(indexOfFirstItem, indexOfLastItem);
  const isCurrentPageEmpty = currentItems.length === 0 && currentPage > 1;

  const newPage = isCurrentPageEmpty ? currentPage - 1 : currentPage;

  const updatedIndexOfLastItem = newPage * itemsPerPage;
  const updatedIndexOfFirstItem = updatedIndexOfLastItem - itemsPerPage;
  const updatedCurrentItems = clientData.slice(
    updatedIndexOfFirstItem,
    updatedIndexOfLastItem
  );

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
              Recents
            </button>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <div className="relative">
              <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3 rtl:right-0"></div>
              <input
                type="text"
                id="table-search"
                className="w-76 block rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search for clients"
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
              ADD NEW CLIENT
            </button>
            {/* Drawer starts */}
            <AddDrawer
              isDrawerOpen={isDrawerOpen}
              handleDrawerToggle={handleDrawerToggle}
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              drawerRef={drawerRef}
            />

            {/* Drawer ends */}
            {/* Update Drawer starts */}
            <UpdateDrawer
              isUpdateDrawerOpen={isUpdateDrawerOpen}
              handleUpdateDrawerToggle={handleUpdateDrawerToggle}
              idData={idData}
              handleUpdateChange={handleUpdateChange}
              sendUpdate={sendUpdate}
              user={user}
              selectedId={selectedId}
            />
            {/* Update Drawer ends */}
          </div>
        </div>
        {showModal && (
          <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
            <div className="absolute top-0 h-full w-full bg-gray-900 opacity-50"></div>
            <div className="z-50 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <DeleteClientConfirmation
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
              />
            </div>
          </div>
        )}
        <table className="z-[-1]x w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="items-center p-4">
                S.No.
              </th>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Person
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" classNae="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {updatedCurrentItems
              ?.filter((client) => {
                if (!searchQuery.trim()) return true;

                const query = searchQuery.toLowerCase();

                return (
                  client.primaryContactPerson?.toLowerCase().includes(query) ||
                  client.businessName?.toLowerCase().includes(query) ||
                  client.primaryContactNumber?.toLowerCase().includes(query) ||
                  client.email?.toLowerCase().includes(query)
                );
              })
              ?.map((row, index) => (
                <tr
                  key={row.id}
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    {(newPage - 1) * itemsPerPage + index + 1}.
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {row.businessName}
                  </th>
                  <td className="px-6 py-4">{row.email}</td>
                  <td className="px-6 py-4">{row.primaryContactPerson}</td>
                  <td className="px-6 py-4">{row.primaryContactNumber}</td>
                  <td className="p-6 py-4">
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
                        className="cursor-pointer text-lg text-red-500 hover:text-red-300"
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
          totalItems={clientData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
