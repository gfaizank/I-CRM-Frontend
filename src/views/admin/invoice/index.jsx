import React from "react";
import { useAuthContext } from "hooks/useAuthContext";
import InvoiceTable from "./components/InvoiceTable";
import InvoiceDrawer from "./components/InvoiceDrawer";

const Invoice = () => {
  const { user } = useAuthContext();

  return (
    <div className="mt-3 grid">
      {user && (
        <InvoiceTable />
        // <InvoiceDrawer />
      )}

      {!user && (
        <div className="text-xl">You Must Login first to view records</div>
      )}
    </div>
  );
};

export default Invoice;
