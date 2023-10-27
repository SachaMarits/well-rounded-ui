import React from "react"
import PropTypes from "prop-types";

export default function Select({
   className,
   name,
   label,
   register,
   required,
   defaultOption,
   children,
   defaultValue,
   ...props
}) {
   const returnSelectInput = () => (
      <select
         id={name}
         name={name}
         className="form-control"
         defaultValue={defaultValue}
         {...(register && {
            ...register(name, { required }),
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

Select.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   register: PropTypes.func,
   options: PropTypes.arrayOf(PropTypes.object),
   required: PropTypes.bool,
   children: PropTypes.arrayOf(PropTypes.object).isRequired,
   defaultOption: PropTypes.string,
   defaultValue: PropTypes.string,
};

Select.defaultProps = {
   className: "",
   label: null,
   register: () => {},
   options: null,
   required: false,
   defaultOption: "Select...",
   defaultValue: "-1",
};
