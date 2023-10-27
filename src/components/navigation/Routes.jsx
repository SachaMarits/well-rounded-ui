import React from "react"
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const components = {
   Login: lazy(() => import("../../pages/Login")),
   Home: lazy(() => import("../../pages/Home")),
   Components: lazy(() => import("../../pages/Components/Components")),
   CrudTable: lazy(() => import("../../pages/CrudTable/CrudTable")),
   TreeView: lazy(() => import("../../pages/TreeView")),
};

export default function Routes(props) {
   const { menu } = props;

   return (
      <Suspense fallback={<p>Loading...</p>}>
         <Switch>
            {menu.map((menuItem) =>
               menuItem.subMenu.length === 0 && menuItem.path !== "/" ? (
                  <Route
                     key={menuItem.id}
                     path={menuItem.path}
                     component={components[menuItem.component]}
                  />
               ) : (
                  menuItem.subMenu.map((subMenuItem) => (
                     <Route
                        key={subMenuItem.id}
                        path={subMenuItem.path}
                        component={components[subMenuItem.component]}
                     />
                  ))
               ),
            )}
         </Switch>
      </Suspense>
   );
}

Routes.propTypes = {
   menu: PropTypes.arrayOf(PropTypes.object).isRequired,
};
