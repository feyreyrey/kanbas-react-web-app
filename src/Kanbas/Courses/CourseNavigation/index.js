import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
    const links = [
      "Home", "Modules", "Piazza", "Zoom Meetings",
      "Assignments", "Qizzes", "Grades", "People",
      "Panopto Video", "Discussions", "Announcments",
      "Pages", "Files", "Rubics", "Outcomes",
      "Collaboration", "Syllabus", "Settings"
    ];
  
    const { courseId } = useParams();
    const { pathname } = useLocation();
  
    return (
      <td valign="middle" style={{paddingRight: '70em'}}>
        <ul style={{ padding: '0', marginLeft: '25px' }}>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={`/Kanbas/Courses/${courseId}/${link}`}
                className={`wd-fg-color-red text-decoration-none ${pathname.includes(link) && "wd-active"}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </td>
    );
  }

export default CourseNavigation;

