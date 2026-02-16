import React, { useState } from "react";
import "./Dashboard.css";

// Course List Component
function CourseList({ courses }) {
  return (
    <div className="card">
      <h3>📚 Courses</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

// Enrollment Status Component
function EnrollmentStatus({ status }) {
  return (
    <div className="card status-card">
      <h3>📌 Status</h3>
      <p>{status}</p>
    </div>
  );
}

// Main Dashboard
export default function Dashboard() {
  const [status, setStatus] = useState("Not Enrolled");

  const courses = ["React", "Java", "Python", "Node.js"];

  function enroll() {
    setStatus("Enrolled ✅");
  }

  function unenroll() {
    setStatus("Not Enrolled ❌");
  }

  return (
    <div className="container">
      <h1>🎓 Student Dashboard</h1>

      <div className="dashboard">
        <CourseList courses={courses} />
        <EnrollmentStatus status={status} />
      </div>

      <div className="btn-group">
        <button className="btn enroll" onClick={enroll}>
          Enroll
        </button>

        <button className="btn unenroll" onClick={unenroll}>
          Unenroll
        </button>
      </div>
    </div>
  );
}