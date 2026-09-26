import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    position: "",
    employerName: "",
    profilePhoto: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getEmployees = () => {
    // Standardized to lowercase '/employees'
    fetch("http://localhost:3000/employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Employee data not found");
        }
        return res.json();
      })
      .then((data) => {
        // Handle whether the API returns a direct array or an object wrapper { employees: [...] }
        const employeeArray = Array.isArray(data) ? data : data.employees;
        setEmployees(employeeArray || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Employee data load error");
        setLoading(false);
      });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.employeeName ||
      !formData.employeeId ||
      !formData.position ||
      !formData.employerName ||
      !formData.profilePhoto
    ) {
      alert("Please fill all fields");
      return;
    }

    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Employee add failed");
        }
        return res.json();
      })
      .then((newEmployee) => {
        setEmployees([...employees, newEmployee]);
        setFormData({
          employeeName: "",
          employeeId: "",
          position: "",
          employerName: "",
          profilePhoto: "",
        });
        alert("Employee added successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("Employee add error");
      });
  };

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Employee Management</h1>
      <div className="form-container">
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={formData.employeeName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Employee Position"
            value={formData.position}
            onChange={handleChange}
          />
          <input
            type="text"
            name="employerName"
            placeholder="Employer Name"
            value={formData.employerName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="profilePhoto"
            placeholder="Profile Photo URL"
            value={formData.profilePhoto}
            onChange={handleChange}
          />
          <button type="submit">Add Employee</button>
        </form>
      </div>

      <h2 className="list-title">Employee List</h2>
      <div className="employee-grid">
        {employees.map((employee) => (
          <div className="employee-card" key={employee.id || employee.employeeId}>
            <img
              src={employee.profilePhoto}
              alt={employee.employeeName}
              className="profile-image"
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
    </div>
  );
}

export default App;