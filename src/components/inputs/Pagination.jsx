/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types";

export default function Pagination({ itemsPerPage, totalItems, activePage, onChange }) {
   const numberOfPages = Math.ceil(totalItems / itemsPerPage);

   return (
      <ul className="page">
         {activePage > 1 && (
            <li className="page__btn" onClick={() => onChange(activePage - 1)}>
               <i className="mdi mdi-chevron-left" />
            </li>
         )}
         {Array(3)
            .fill(1)
            .map((_, index) => {
               let i = activePage > 1 ? index - 1 : index;
               i = activePage === numberOfPages ? i - 1 : i;
               return (
                  <li
                     key={activePage + i}
                     className={`page__numbers ${activePage === activePage + i ? "active" : ""}`}
                     onClick={() => onChange(activePage + i)}
                  >
                     {activePage + i}
                  </li>
               );
            })}
         {activePage < numberOfPages && (
            <li className="page__btn" onClick={() => onChange(activePage + 1)}>
               <i className="mdi mdi-chevron-right" />
            </li>
         )}
      </ul>
   );
}

Pagination.propTypes = {
   itemsPerPage: PropTypes.number.isRequired,
   totalItems: PropTypes.number.isRequired,
   activePage: PropTypes.number.isRequired,
   onChange: PropTypes.func.isRequired,
};
