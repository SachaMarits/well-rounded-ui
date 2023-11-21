import React, { useEffect, useState } from "react";
import TabPane from "./TabPane";

interface Tab {
  name: string;
  disabled?: boolean;
}

interface TabsProps {
  className?: string;
  children: typeof React.Children;
}

const Tabs: React.FC<TabsProps> = ({ className = "", children }) => {
  const [tabHeader, setTabHeader] = useState<Tab[]>([]);
  const [childContent, setChildContent] = useState<{ [key: string]: React.ReactElement }>({});
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const headers: Tab[] = [];
    const childCnt: { [key: string]: React.ReactElement } = {};

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const { name, disabled } = element.props as Tab;
      headers.push({ name, disabled: disabled || false });
      // @ts-ignore
      childCnt[name] = element.props.children;
    });

    setTabHeader(headers);

    if (active === "") {
      setActive(headers[0].name);
    }

    setChildContent({ ...childCnt });
  }, [children]);

  const changeTab = (name: string) => setActive(name);

  return (
    <div className={`tabs ${className}`}>
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
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
