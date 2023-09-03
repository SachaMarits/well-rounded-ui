import React, { useEffect, useState } from "react";
import TabPane from "./TabPane";

export default function Tabs(props) {
   const { children } = props;
   const [tabHeader, setTabHeader] = useState([]);
   const [childContent, setChildContent] = useState({});
   const [active, setActive] = useState("");
   useEffect(() => {
      const headers = [];
      const childCnt = {};
      React.Children.forEach(children, (element) => {
         if (!React.isValidElement(element)) return;
         const { name, disabled } = element.props;
         headers.push({ name, disabled: disabled || false });
         childCnt[name] = element.props.children;
      });
      setTabHeader(headers);
      if (active === "") setActive(headers[0].name);
      setChildContent({ ...childCnt });
   }, [props, children]);

   const changeTab = (name) => {
      setActive(name);
   };

   return (
      <div className="tabs">
         <ul className="tab-header">
            {tabHeader.map(({ name, disabled }) => (
               <li
                  onClick={() => changeTab(name)}
                  key={name}
                  className={`${name === active ? "active" : ""} ${disabled && "disabled"}`}
               >
                  {name}
               </li>
            ))}
         </ul>
         <div className="tab-content">
            {Object.keys(childContent).map(
               (key) =>
                  key === active && (
                     <div className="tab-child" key={key}>
                        {childContent[key]}
                     </div>
                  ),
            )}
         </div>
      </div>
   );
}

Tabs.propTypes = {
   children(props, propName, componentName) {
      const prop = props[propName];

      let error = null;
      React.Children.forEach(prop, (child) => {
         if (child.type !== TabPane) {
            error = new Error(`\`${componentName}\` children should be of type \`TabPane\`.`);
         }
      });
      return error;
   },
};

Tabs.defaultProps = {
   children: [],
};
