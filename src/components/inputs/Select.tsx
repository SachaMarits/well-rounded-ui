import React from "react";

interface SelectProps {
  className?: string;
  name: string;
  label?: string | null;
  register?: any;
  required?: boolean;
  children?: React.ReactNode;
  defaultOption?: string;
  defaultValue?: string;
}

export default function Select({
  className = "",
  label = null,
  register = () => {},
  required = false,
  defaultOption = "Select...",
  defaultValue = "-1",
  name,
  children,
  ...props
}: SelectProps) {
  const returnSelectInput = () => (
    <select
      id={name}
      name={name}
      className="form-control"
      defaultValue={defaultValue}
      {...(register && {
        ...register(name, { required })
      })}
      {...props}
    >
      <option value="-1" disabled>
        {defaultOption}
      </option>
      {children}
    </select>
  );

  return label ? (
    <label htmlFor={name} className={`${className} d-block mb-3`}>
      {label}
      {returnSelectInput()}
    </label>
  ) : (
    returnSelectInput()
  );
}
