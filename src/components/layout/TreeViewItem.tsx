import React from "react";

interface TreeViewItemProps {
  setSelection: (id: number | null) => void;
  selection?: number | null;
  id: number;
  name: string;
  text: string | React.ReactNode;
  level: number;
  endOfTree?: boolean;
  editItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

export default function TreeViewItem({
  setSelection,
  selection = null,
  id,
  name,
  text,
  level,
  endOfTree = false,
  editItem,
  deleteItem
}: TreeViewItemProps) {
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
          <i className={`mdi mdi-chevron-${selection === id ? "down" : "right"} mr-3 text-primary text-lg`} />
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
