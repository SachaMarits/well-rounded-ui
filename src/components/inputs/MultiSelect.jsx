import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function MultiSelect({ name, label, options, onChange }) {
   const [isListOpen, openList] = useState(false);
   const [selection, setSelection] = useState([]);

   const resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      const { height } = rect;
      const select = document.getElementById(name);
      if (select) select.style.top = `${height + 6}px`;
   });

   useEffect(() => {
      resizeObserver.observe(document.querySelector(`#${name}-selection`));
   });

   const applyChanges = (changes) => {
      setSelection(changes);
      onChange(changes);
   };

   const addItem = (id) => applyChanges([...selection, id]);
   const deleteItem = (id) => applyChanges(selection.filter((s) => s !== id));

   window.addEventListener(
      "click",
      (e) => {
         const { target } = e;
         if (target.classList.contains("multi-select")) return;
         if (target.tagName !== "LI") openList(false);
      },
      false,
   );

   return (
      <div className="input-with-label mb-3">
         <label htmlFor={name}>
            {label}
            <div className="multi-select-container">
               <div
                  id={`${name}-selection`}
                  className="multi-select form-control"
                  name={name}
                  role="alertdialog"
                  type="text"
                  onClick={() => openList(true)}
               >
                  {selection.map((id) => (
                     <div key={id} className="multi-select-item">
                        <p>{options.find((option) => option.id === id)?.text}</p>
                        <i
                           className="mdi mdi-close"
                           role="navigation"
                           onClick={() => deleteItem(id)}
                        />
                     </div>
                  ))}
               </div>
               <ul id={name} className={`select ${isListOpen ? "active" : ""} lg`}>
                  {options.map((option) => {
                     if (selection.findIndex((id) => id === option.id) === -1)
                        return (
                           <li key={option.id} onClick={() => addItem(option.id)}>
                              {option.text}
                           </li>
                        );
                     return null;
                  })}
               </ul>
            </div>
         </label>
      </div>
   );
}

MultiSelect.propTypes = {
   name: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   options: PropTypes.arrayOf(PropTypes.object),
   onChange: PropTypes.func.isRequired,
};

MultiSelect.defaultProps = {
   options: [],
};
