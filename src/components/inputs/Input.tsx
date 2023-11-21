import React from "react";

interface Error {
  type: string;
}

interface InputProps {
  className?: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  register?: any;
  errors?: Error;
  required?: boolean;
  minLength?: number | undefined;
  maxLength?: number | undefined;
}

export default function Input({
  className = "",
  label = "",
  placeholder = "",
  register = () => {},
  type = "text",
  errors = undefined,
  required = false,
  minLength = undefined,
  maxLength = undefined,
  name,
  ...props
}: InputProps) {
  const input = (
    <input
      id={name}
      name={name}
      type={type}
      className={`form-control${errors ? " error-input" : ""}${!label ? ` ${className}` : ""}`}
      placeholder={placeholder}
      {...(register && {
        ...register(name, {
          required: { value: required },
          minLength: { value: minLength },
          maxLength: { value: maxLength }
        })
      })}
      {...props}
    />
  );
  const textarea = (
    <textarea
      id={name}
      name={name}
      type={type}
      className={`form-control${errors ? " error-input" : ""}${!label ? ` ${className}` : ""}`}
      placeholder={placeholder}
      {...(register && {
        ...register(name, {
          required: { value: required },
          minLength: { value: minLength },
          maxLength: { value: maxLength }
        })
      })}
      {...props}
    />
  );

  const field = type === "textarea" ? textarea : input;

  return (
    <>
      {label ? (
        <label htmlFor={name} className={`${className}${type === "checkbox" ? " checkbox" : ""} d-block mb-3`}>
          {label}
          {field}
        </label>
      ) : (
        field
      )}

      {errors && (
        <div className="mt-1 mb-1 text-danger">
          {errors.type === "required" && `${label || placeholder} is required.`}
          {errors.type === "maxLength" && `${label || placeholder} must have at least ${maxLength} characters`}
          {errors.type === "minLength" && `${label || placeholder} must be at least ${minLength} caracters long`}
        </div>
      )}
    </>
  );
}
