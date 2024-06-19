import React from "react";
import { useAuthContext } from "hooks/useAuthContext";

import AddInvoice from "./components/CreateInvoice.jsx";

const CreateInvoice = () => {
  const { user } = useAuthContext();

  return (
    <div className="mt-3 grid">
      {user && <AddInvoice />}

      {!user && (
        <div className="text-xl">You Must Login first to view records</div>
      )}
    </div>
  );
};

export default CreateInvoice;
