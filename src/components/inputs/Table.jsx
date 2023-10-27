import React from "react"
import PropTypes from "prop-types";
import NoDataPlaceholder from "../utils/NoDataPlaceholder";

export default function Table({ keyColumn, columns, data, layout, actions }) {
   if (data.length === 0) return <NoDataPlaceholder icon="table-off" text="Nothing to show !" />;

   const keys = Object.keys(data[0]);

   return (
      <table className="table">
         <thead>
            <tr className="columns">
               {columns.map((column) => (
                  <th key={column}>{column}</th>
               ))}
               {actions.length > 0 && <th>{actions.length === 1 ? "Action" : "Actions"}</th>}
            </tr>
         </thead>
         <tbody className="rows">
            {data.map((row) => (
               <tr className="mt-3 p-2" key={row[keyColumn]}>
                  {keys.map(
                     (item, index) =>
                        layout[index].type !== "hidden" && (
                           <td
                              key={item}
                              className={
                                 layout[index].type === "image"
                                    ? "d-flex align-items-center justify-content-center"
                                    : ""
                              }
                           >
                              {layout[index].type === "image" && (
                                 <img
                                    className="rounded-circle square36"
                                    src={`/${row[item]}.jpg`}
                                    alt="profileImg"
                                 />
                              )}
                              {layout[index].type === "text" && <p>{row[item]}</p>}
                              {layout[index].type === "boolean" && (
                                 <i
                                    className={`text-xl ${
                                       row[item]
                                          ? "mdi mdi-check text-success"
                                          : "mdi mdi-close text-danger"
                                    }`}
                                 />
                              )}
                              {layout[index].type === "raw" && row[item]}
                           </td>
                        ),
                  )}
                  <td>
                     {actions.map((item) => (
                        <div className="actions" key={item.action}>
                           {item.action === "edit" && (
                              <p
                                 className="text-primary px-2 pointer"
                                 onClick={() => item.onClick(row[keyColumn])}
                              >
                                 <i className="mdi mdi-pencil" /> {!item.iconOnly && "Edit"}
                              </p>
                           )}
                           {item.action === "delete" && (
                              <p
                                 className="text-danger px-2 pointer"
                                 onClick={() => item.onClick(row[keyColumn])}
                              >
                                 <i className="mdi mdi-delete" /> {!item.iconOnly && "Delete"}
                              </p>
                           )}
                        </div>
                     ))}
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}

Table.propTypes = {
   keyColumn: PropTypes.string.isRequired,
   columns: PropTypes.arrayOf(PropTypes.string).isRequired,
   data: PropTypes.arrayOf(PropTypes.object).isRequired,
   layout: PropTypes.arrayOf(PropTypes.object).isRequired,
   actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
