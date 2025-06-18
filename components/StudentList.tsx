import React from "react";
import StudentCard from "./StudentCard";
import { Student } from "../types";

type StudentListProps = {
  students: Student[];
};

export default function StudentList({ students }: StudentListProps) {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#333" }}>Student List Details</h2>
      <div style={{ display: "grid", gap: "1rem", padding: "1rem" }}>
        {students.map((student: Student, index: number) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
}
