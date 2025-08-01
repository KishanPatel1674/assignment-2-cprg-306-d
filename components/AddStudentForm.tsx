import React, { useState } from "react";
import { Student } from "../types";
/**
 * AddStudentForm component
 * This component provides a form for adding a new student.
 * It manages form inputs for first name, last name, date of birth, and grade.
 * It validates input before submitting the new student object to the parent component.
 * 
 * Inputs: User input via form fields (first name, last name, dob, grade)
 * Processing: Validates names (letters/spaces only), grade (1 to 12), then calls onAddStudent
 * Output: Calls onAddStudent callback with validated student data, clears form on submit
 */

type AddStudentFormProps = {
  onAddStudent: (student: Student) => void;
};

export default function AddStudentForm({ onAddStudent }: AddStudentFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    alert("Names should contain only letters and spaces. Numbers are not allowed.");
    return;
  }

  const parsedGrade = parseInt(grade);
  if (isNaN(parsedGrade) || parsedGrade < 1 || parsedGrade > 12) {
    alert("Grade must be a number between 1 and 12.");
    return;
  }

  onAddStudent({ firstName, lastName, dob, grade: parsedGrade });

  setFirstName("");
  setLastName("");
  setDob("");
  setGrade("");
}
return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
      </label>

      <label>
        Date of Birth:
        <input
          type="date"
          value={dob}
          onChange={e => setDob(e.target.value)}
          required
        />
      </label>

      <label>
        Grade (1–12):
        <input
          type="text"
          value={grade}
          onChange={e => setGrade(e.target.value)}
          placeholder="Grade"
          required
        />
      </label>

      <button type="submit">Add Student</button>
    </form>
  );
}
