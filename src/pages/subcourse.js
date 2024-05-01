import React, { useState, useEffect } from "react";
import { push, ref } from "firebase/database";
import { db } from "./api/firebase";

function Subcourse() {
  const [Course, setCourse] = useState("");
  const [courseBody, setCourseBody] = useState("");
  const [courseBodyTitle, setCourseBodyTitle] = useState("");

  const addAttendance = () => {
    const studentRef = ref(db, `/courses/-NwoT_elmZHLLyX3XQ5I/SubCourses`);
    const newAttendance = {
      Course: Course,
      courseBody: courseBody,
      courseBodyTitle: courseBodyTitle,
    };

    push(studentRef, newAttendance)
      .then(() => {
        console.log("Attendance added successfully.");
      })
      .catch((error) => {
        console.error("Error adding attendance:");
      });
  };

  return (
    <div>
      <input
        value={Course}
        placeholder="Course number"
        name="CourseTitle"
        onChange={(e) => setCourse(e.target.value)}
      />

      <input
        value={courseBody}
        placeholder="Course Tutor"
        name="Course Body"
        onChange={(e) => setCourseBody(e.target.value)}
      />

      <input
        value={courseBodyTitle}
        placeholder="Course title"
        name="courseBodyTitle"
        onChange={(e) => setCourseBodyTitle(e.target.value)}
      />
      <button type="submit" onClick={addAttendance}>
        Submit
      </button>
    </div>
  );
}

export default Subcourse;
