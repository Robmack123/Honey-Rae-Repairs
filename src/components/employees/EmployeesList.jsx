import { useState, useEffect } from "react";
import "./Employees.css";
import { User } from "../../users/User";
import { getEmployees } from "../../services/employeesService";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then((employeeArray) => {
      setEmployees(employeeArray);
      console.log("Employee set");
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return <User user={employeeObj} key={employeeObj.id} />;
      })}
    </div>
  );
};
