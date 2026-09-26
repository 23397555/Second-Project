import React, { useEffect, useState } from "react";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((data) => {
        const employeeArray = Array.isArray(data) ? data : data.employees;
        setEmployees(employeeArray || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading employees...</p>;

  return (
    <div className="employee-container">
      {employees.map((employee) => (
        <div className="employee-card" key={employee.id || employee.employeeId}>
          <img
            src={employee.profilePhoto}
            alt={employee.employeeName}
            className="profile-photo"
          />
          <h2>{employee.employeeName}</h2>
          <p>
            <strong>Employee ID:</strong> {employee.employeeId}
          </p>
          <p>
            <strong>Position:</strong> {employee.position}
          </p>
          <p>
            <strong>Employer:</strong> {employee.employerName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Employee;