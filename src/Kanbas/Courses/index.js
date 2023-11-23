import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
function Courses() {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div>
        
        <link href="../labs/a2/index.css" rel="stylesheet"/>
        <link href="../vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="../vendors/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet"/>
        <a class = " wd-fg-color-red text-decoration-none "href="https://northeastern.instructure.com/courses/152736/assignments#:~:text=Help-,CS4550.12631.202410,-Assignments"><i className="fa fa-bars wd-fg-color-red"></i> Course {course.name}</a><hr/>
        <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;

