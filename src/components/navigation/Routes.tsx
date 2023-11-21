// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

interface Menu {
  id: number;
  path: string;
  component: string;
  subMenu: Menu[];
}

interface RoutesProps {
  menu: Menu[];
  components: Object[];
}

export default function Routes({ menu, components }: RoutesProps) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        {menu.map((menuItem) =>
          menuItem.subMenu.length === 0 && menuItem.path !== "/" ? (
            <Route key={menuItem.id} path={menuItem.path} component={components[menuItem.component]} />
          ) : (
            menuItem.subMenu.map((subMenuItem) => (
              <Route key={subMenuItem.id} path={subMenuItem.path} component={components[subMenuItem.component]} />
            ))
          )
        )}
      </Switch>
    </Suspense>
  );
}

Routes.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired
};
