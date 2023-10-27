import React from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Menu({ name, path, icon }) {
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

Menu.propTypes = {
   name: PropTypes.string.isRequired,
   path: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
};
