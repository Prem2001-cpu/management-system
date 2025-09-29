

import React, { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Your users
  const users = [
    { id: 1, name: "Shivam", email: "shivam@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Aman", email: "aman@example.com", role: "Manager", status: "Inactive" },
    { id: 3, name: "MSD", email: "msd@example.com", role: "Staff", status: "Active" },
    { id: 4, name: "Goat", email: "goat@example.com", role: "Staff", status: "Active" },
    { id: 5, name: "King", email: "king@example.com", role: "Manager", status: "Inactive" },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Management System</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Tasks</li>
            <li>Reports</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main stacked">
        {/* Dashboard */}
        <div className="card dashboard">
          <h2>📊 Dashboard</h2>
          <p>Total Users: {users.length} | Tasks Completed: 85 | Pending Tasks: 15</p>
        </div>

        {/* Users */}
        <div className="card users">
          <h2>👥 Users</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td className={user.status === "Active" ? "status-active" : "status-inactive"}>
                      {user.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tasks */}
        <div className="card tasks">
          <h2> Tasks</h2>
          {loading ? (
            <p>Loading tasks...</p>
          ) : todo ? (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? " Yes" : " No"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>

        {/* Reports */}
        <div className="card reports">
          <h2>📑 Reports</h2>
          <p>Reports section will contain generated reports or summaries.</p>
        </div>
      </main>
    </div>
  );
}