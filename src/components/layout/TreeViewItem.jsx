import PropTypes from "prop-types";

export default function TreeViewItem({
   setSelection,
   selection,
   id,
   name,
   text,
   level,
   endOfTree,
   editItem,
   deleteItem,
}) {
   const fonSizes = ["1.15rem", "1.07rem", "1rem"];
   const backgroundColors = ["#ffffff", "#f9f9f9", "#f4f4f4"];

   return (
      <div
         className="card-compact d-flex align-items-center justify-content-between pointer"
         onClick={() => setSelection(selection === id ? null : id)}
         style={{ marginLeft: `${level * 20}px`, background: backgroundColors[level] }}
      >
         <div className="d-flex">
            {!endOfTree && (
               <i
                  className={`mdi mdi-chevron-${
                     selection === id ? "down" : "right"
                  } mr-3 text-primary text-lg`}
               />
            )}
            <h3 style={{ fontSize: fonSizes[level] }}>{name}</h3>
            <p className="ml-3">{text}</p>
         </div>
         <div className="d-flex align-items-center">
            <i
               className="mdi mdi-pencil text-warning pointer text-lg px-2"
               onClick={(e) => {
                  e.stopPropagation();
                  editItem(id);
               }}
            />
            <i
               className="mdi mdi-delete text-danger pointer text-lg px-2"
               onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(id);
               }}
            />
         </div>
      </div>
   );
}

TreeViewItem.propTypes = {
   setSelection: PropTypes.func.isRequired,
   selection: PropTypes.number,
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
   level: PropTypes.number.isRequired,
   endOfTree: PropTypes.bool,
   editItem: PropTypes.func.isRequired,
   deleteItem: PropTypes.func.isRequired,
};

TreeViewItem.defaultProps = {
   selection: null,
   endOfTree: false,
};
