// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

interface Menu {
  id: number;
  path: string;
  component: string;
  subMenu: Menu[];
}

interface SubMenuProps {
  name: string;
  icon: string;
  subMenu: Menu[];
  toggleSubMenu: (e: React.MouseEventHandler<HTMLElement>, toggle: boolean) => void;
}

export default function SubMenu({ name, icon, subMenu, toggleSubMenu }: SubMenuProps) {
  return (
    <li className={subMenu.some((menu) => window.location.pathname === menu.path) ? "active" : ""}>
      <div className="icon-link pointer">
        <p>
          <i className={`mdi mdi-${icon}`} onClick={(e) => toggleSubMenu(e, true)} />
          <span className="link-name" onClick={(e) => toggleSubMenu(e, true)}>
            {name}
          </span>
        </p>
        <i className="mdi mdi-chevron-down arrow" onClick={(e) => toggleSubMenu(e, false)} aria-hidden="true" />
      </div>
      <ul className="sub-menu">
        {subMenu.map((menu) => (
          <li className={window.location.pathname === menu.path ? "active" : ""} key={menu.id}>
            <Link to={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
