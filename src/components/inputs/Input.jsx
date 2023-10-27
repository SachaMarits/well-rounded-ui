import React from "react"
import PropTypes from "prop-types";

export default function Input({
   className,
   name,
   label,
   type,
   placeholder,
   register,
   errors,
   required,
   minLength,
   maxLength,
   ...props
}) {
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
               maxLength: { value: maxLength },
            }),
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
               maxLength: { value: maxLength },
            }),
         })}
         {...props}
      />
   );

   const field = type === "textarea" ? textarea : input;

   return (
      <>
         {label ? (
            <label
               htmlFor={name}
               className={`${className}${type === "checkbox" ? " checkbox" : ""} d-block mb-3`}
            >
               {label}
               {field}
            </label>
         ) : (
            field
         )}

         {errors && (
            <div className="mt-1 mb-1 text-danger">
               {errors.type === "required" && `${label || placeholder} is required.`}
               {errors.type === "maxLength" &&
                  `${label || placeholder} must have at least ${maxLength} characters`}
               {errors.type === "minLength" &&
                  `${label || placeholder} must be at least ${minLength} caracters long`}
            </div>
         )}
      </>
   );
}

Input.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   type: PropTypes.string,
   placeholder: PropTypes.string,
   register: PropTypes.func,
   errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
   required: PropTypes.bool,
   minLength: PropTypes.number,
   maxLength: PropTypes.number,
};

Input.defaultProps = {
   className: "",
   label: undefined,
   placeholder: "",
   register: () => {},
   type: "text",
   errors: undefined,
   required: false,
   minLength: undefined,
   maxLength: undefined,
};
