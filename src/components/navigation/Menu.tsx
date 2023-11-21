import React from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  name: string;
  path: string;
  icon: string;
}

export default function Menu({ name, path, icon }: MenuProps) {
  return (
    <li className={window.location.pathname === path ? "active" : ""}>
      <Link to={path}>
        <i className={`mdi mdi-${icon}`} />
        <span className="link-name">{name}</span>
      </Link>
      <ul className="sub-menu blank">
        <li>
          <Link className="link-name" to={path}>
            {name}
          </Link>
        </li>
      </ul>
    </li>
  );
}
