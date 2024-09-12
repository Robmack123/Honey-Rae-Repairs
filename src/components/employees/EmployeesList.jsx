import { useState, useEffect } from "react";
import "./Employees.css";
import { User } from "../../users/User";
import { Link } from "react-router-dom";
import { getStaffUser } from "../../services/userService";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUser().then((employeeArray) => {
      setEmployees(employeeArray);
      console.log("Employee set");
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
            <User user={employeeObj} />;
          </Link>
        );
      })}
    </div>
  );
};
