import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore(
    (state) => state.toggleCourseStatus
  );

  return (
    <ul>
      {courses.map((course) => (
        <li
          key={course.id}
          className="course-item"
          style={{
            backgroundColor: course.completed ? "#121412ff" : "#e1e2e0e5",
          }}
        >
          <span className="course-item-col-1">
            <input
              type="checkbox"
              checked={course.completed}
              onChange={() => toggleCourseStatus(course.id)}
            />
          </span>
          <span>{course.title}</span>
          <button
            onClick={() => removeCourse(course.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
