// import { Route, Outlet, Routes } from "react-router-dom";
// import { NavBar } from "../components/nav/NavBar";
// import { Welcome } from "../components/welcome/Welcome";
// import { EmployeeDetails } from "../components/employees/EmployeeDetails";
// import { EmployeeList } from "../components/employees/EmployeesList";
// import { CustomerDetails } from "../components/customers/CustomerDetails";
// import { CustomerList } from "../components/customers/CustomersList";
// import { TicketList } from "../components/tickets/TicketList";
// import { EmployeeForm } from "../components/forms/EmployeeForm";
import { useState, useEffect } from "react";
import { EmployeeViews } from "./EmployeeViews";
import { CustomerViews } from "./CustomerViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);

  return currentUser.isStaff ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews />
  );
};
