"use client";

import React, { useState } from "react";
import StudentList from "../components/StudentList";
import AddStudentForm from "../components/AddStudentForm";
import { Student } from "../types";
/**
 * HomePage component
 * This component manages the list of students displayed on the page.
 * It initializes with a default list of students, and allows adding new students
 * through the AddStudentForm component. The StudentList component renders the
 * current list of students.
 * 
 * Inputs: None (initializes with hardcoded student data)
 * Processing: Handles adding new student objects to state
 * Output: Renders a form to add students and a list displaying all students
 */

export default function HomePage() {
  const [students, setStudents] = useState<Student[]>([
    { firstName: "Anandjit", lastName: "Kaur", dob: "2007-05-12", grade: 10 },
    { firstName: "Mayur", lastName: "Tirkar", dob: "2006-11-23", grade: 11 },
    { firstName: "Kishan", lastName: "Patel", dob: "2008-01-03", grade: 9 },
    { firstName: "Emily", lastName: "Davis", dob: "2007-01-16", grade: 12 },
    { firstName: "Michael", lastName: "Brown", dob: "2006-09-30", grade: 10 },
  ]);

  function addStudent(newStudent: Student) {
    setStudents([...students, newStudent]);
  }

  return (
  <main style={{ paddingTop: "100px" }}>
    <h1 style={{ textAlign: "center", color: "#333" }}>Add New Student</h1>
    <AddStudentForm onAddStudent={addStudent} />
    <StudentList students={students} />
  </main>
 );
}
