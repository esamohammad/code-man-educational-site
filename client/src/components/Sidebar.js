import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ course }) => {
  const { _id, title } = course;
  return (
    <div className="text-lg font-bold tracking-wide static">
      <Link to={`/courses/${_id}`} className="hover:text-white">
        {title}
      </Link>
    </div>
  );
};

export default Sidebar;
