Name : Patadiya Mihir

Project Name : Add Data use for db.json

folder stucture : 

# Employee Management App

A simple, full-stack web application built using **React (Frontend)** and **JSON Server (Mock Backend)** to view, add, and manage employee records.

---

## 🚀 Features

* **View Employees**: Displays a responsive grid layout of current employees with profile photos, IDs, positions, and company names.
* **Add Employees**: A dynamic form validation system to submit new employees into the database.
* **Loading & Error Handling**: Built-in state alerts for smooth user experiences during API fetching anomalies.

---

## 🛠️ Tech Stack

* **Frontend**: React (Hooks, Context, Fetch API)
* **Backend**: `json-server` (REST API Mock)
* **Styling**: CSS3 (Responsive Grid & Flexbox)

---

## 📋 Prerequisites

Ensure you have **Node.js** and **npm** installed on your local machine.

---

## ⚙️ Getting Started

### 1. Clone & Setup the Project
Navigate to your project folder and ensure your files are structured correctly:
* `src/App.js` (Main application and Form setup)
* `src/Employee.js` (Standalone Employee component)
* `src/App.css` (Styles)
* `db.json` (Database file in the root)

### 2. Configure the Mock Database
Create a file named `db.json` in your project's root folder and paste the following baseline data:

```json
{
  "Employee": [
    {
      "id": "1",
      "employeeId": "EMP001",
      "employeeName": "Rahul Patel",
      "position": "Frontend Developer",
      "employerName": "ABC Company",
      "profilePhoto": "https://i.pravatar.cc/150?img=12"
    },
    {
      "id": "2",
      "employeeId": "EMP002",
      "employeeName": "Priya Shah",
      "position": "UI/UX Designer",
      "employerName": "XYZ Company",
      "profilePhoto": "https://i.pravatar.cc/150?img=47"
    }
  ]
}
```

### 3. Run the Mock Backend API Server
Launch the `json-server` tool to run on port `3000`. If you don't have it installed globally, you can run it via `npx`:

```bash
npx json-server --watch db.json --port 3000
```

### 4. Run the React Application
Open a separate terminal window, navigate to your React project directory, and start the development server:

```bash
npm start
```
The application will usually load automatically at `http://localhost:3001` (or `3000` if free).

---

## 🔌 API Endpoints

The React front-end connects to the mock backend via these specific endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `http://localhost:3000/Employee` | Fetches all employees from the database. |
| **POST** | `http://localhost:3000/Employee` | Saves a new employee profile to the server. |

---

## ⚠️ Notes & Troubleshooting
* **URL Typing Discrepancy**: Keep in mind that `App.js` requests data from `/Employee` (Capitalized), while your independent `Employee.js` requests from `/employees` (Lowercase). For consistent data matching, ensure your API routes mirror your `db.json` keys exactly.
* **Port Sharing**: If React tries to use port `3000`, let it automatically configure to another open slot (like `3001`) so it doesn't conflict with your `json-server`.




