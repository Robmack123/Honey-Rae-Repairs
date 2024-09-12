import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../../services/employeesService";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email : </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty : </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate : $</span>
        {employee.rate}
      </div>
      <div>
        <h4 className="italic">
          Currently working on {employee.employeeTickets?.length || 0}{" "}
          {employee.employeeTickets?.length === 1 ? "ticket" : "tickets"}{" "}
        </h4>
      </div>
    </section>
  );
};
