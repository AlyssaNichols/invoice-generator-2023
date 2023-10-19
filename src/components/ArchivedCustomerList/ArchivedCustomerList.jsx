import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ArchivedCutomerList({toggleArchived}) {

  const dispatch = useDispatch();
  const archivedList = useSelector((store) => store.archived);


  useEffect(() => {
    dispatch({ type: "FETCH_ARCHIVED_CUSTOMERS" });
  }, []);

  const handleReset = (customerId) => {
    // Dispatch an action to delete the invoice with the given ID
    dispatch({ type: "RESET_CUSTOMER", payload: customerId });
    dispatch({ type: "FETCH_CUSTOMERS" });
  };

  return (
<center>
      <h2>Archived Customers</h2>
      <button onClick={toggleArchived}>Collapse List</button>
      <br />
      <br />
      <br />
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Last, First Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>ZIP</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {archivedList?.map((customer, index) => {
            return (
              <tr key={index}>
                <td>{customer.last_name}, {customer.first_name} </td>
                <td>{customer.address}</td>
                <td>{customer.city}</td>
                <td>{customer.state}</td>
                <td>{customer.zip}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>              <button
                    onClick={() => handleReset(customer.id)}
                  >
                    Un-Archive Customer
                  </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </center>
  )
}

