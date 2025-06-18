import React from "react";
import { Student } from "../types";

export default function StudentCard({ firstName, lastName, grade, dob }: Student) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem", color: "#0070f3" }}>
        {firstName} {lastName}
      </h3>
      <p style={{ margin: "0.25rem 0" }}>Grade: {grade}</p>
      <p style={{ margin: "0.25rem 0" }}>DOB: {dob}</p>
    </div>
  );
}
