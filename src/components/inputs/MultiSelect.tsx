import React, { useEffect, useState } from "react";
import { Option } from "src/types/Options";

interface MultiSelectProps {
  className?: string;
  name: string;
  label: string;
  options?: Option[];
  onChange: (ids: number[]) => void;
}

export default function MultiSelect({ className = "", name, label, options = [], onChange }: MultiSelectProps) {
  const [isListOpen, openList] = useState<boolean>(false);
  const [selection, setSelection] = useState<number[]>([]);

  const resizeObserver = new ResizeObserver((entries) => {
    const rect = entries[0].contentRect;
    const { height } = rect;
    const select = document.getElementById(name);
    if (select) select.style.top = `${height + 6}px`;
  });

  useEffect(() => {
    const nameSelection = document.querySelector(`#${name}-selection`);
    if (nameSelection) resizeObserver.observe(nameSelection);
  }, []);

  const applyChanges = (changes: number[]) => {
    setSelection(changes);
    onChange(changes);
  };

  const addItem = (id: number) => applyChanges([...selection, id]);
  const deleteItem = (id: number) => applyChanges(selection.filter((s) => s !== id));

  window.addEventListener(
    "click",
    (e) => {
      const { target } = e;
      if ((target as HTMLElement)?.classList.contains("multi-select")) return;
      if ((target as HTMLElement)?.tagName !== "LI") openList(false);
    },
    false
  );

  return (
    <div className={`input-with-label mb-3 ${className}`}>
      <label htmlFor={name}>
        {label}
        <div className="multi-select-container">
          <div
            id={`${name}-selection`}
            className="multi-select form-control"
            role="alertdialog"
            onClick={() => openList(true)}
          >
            {selection.map((id) => (
              <div key={id} className="multi-select-item">
                <p>{options.find((option) => option.id === id)?.text}</p>
                <i className="mdi mdi-close" role="navigation" onClick={() => deleteItem(id)} />
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
