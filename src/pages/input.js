import React, { useState, useEffect } from "react";
import { db } from "./api/firebase";
import "firebase/database";
import { push, ref } from "firebase/database";

function Input() {
  const [formData, setFormData] = useState({
    CourseTitle: "",
    CourseTutor: "",
    CoursePrice: "",
    SubCourses: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const newStudentRef = push(ref(db, "courses"), formData);
      const newStudentKey = newStudentRef.key;
      return newStudentKey;
    } catch (error) {
      console.error("Error submitting Student:");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleFormSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            margin: "10%",
          }}
        >
          <input
            value={formData.CourseTitle}
            placeholder="Course Title"
            name="CourseTitle"
            onChange={handleInputChange}
          />

          <input
            value={formData.CourseTutor}
            placeholder="Course Tutor"
            name="CourseTutor"
            onChange={handleInputChange}
          />

          <input
            value={formData.CoursePrice}
            placeholder="Course Price"
            name="CoursePrice"
            onChange={handleInputChange}
          />
          <input
            value={formData.SubCourses}
            placeholder="Course Sub"
            name="SubCourses"
            onChange={handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Input;
