import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");
  console.log("course form Rendered");

  const handleCourseubmit = () => {
    if (!courseTitle) return alert("please enter course here");
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
    });
    setCourseTitle("");
  };
  return (
    <div className="form-conatiner">
      <input
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button
        onClick={() => {
          handleCourseubmit();
        }}
        className="form-submit-btn"
      >
        add course
      </button>
    </div>
  );
};

export default CourseForm;
