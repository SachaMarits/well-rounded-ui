import React, { Fragment, useState } from "react";
import { NoDataPlaceholder } from "../layout";

interface Layout {
  column: string;
  type: string;
  key?: string;
  size?: "sm" | "md" | "lg" | "xl";
  detailsLayout?: Layout[];
}

interface TableProps {
  keyColumn: string;
  data: any;
  layout: Layout[];
  actions: any;
}

export default function List({ keyColumn, data, layout, actions }: TableProps) {
  const [openedDetails, setOpenedDetails] = useState(-1);

  if (data.length === 0) return <NoDataPlaceholder icon="table-off" text="Nothing to show !" />;
  const hasDetails = layout.some((l) => l.type === "details");
  const hasDetailsData = (row: any) => {
    const layoutDetails = layout.find((l) => l.type === "details");
    if (!layoutDetails) return false;
    return row[layoutDetails.key || layoutDetails.column.toLowerCase()].length > 0;
  };

  function normalizedData(array: any) {
    return array.map((o: any) =>
      Object.keys(o).reduce((newObject: { [key: string]: any }, key) => {
        newObject[key.toLowerCase().replace(/[_-]/g, "")] = o[key];
        return newObject;
      }, {})
    );
  }

  return (
    <div className="list">
      <div className="columns list-row">
        {layout
          .filter((l) => l.type !== "details")
          .map(({ column, size }) => (
            <div className={`col-${size || "md"}`} key={column}>
              {column}
            </div>
          ))}
        {(actions.length > 0 || hasDetails) && (
          <div className="col-sm">{actions.length === 1 ? "Action" : "Actions"}</div>
        )}
      </div>
      <div className="rows">
        {normalizedData(data).map((row: any) => (
          <Fragment key={row[keyColumn]}>
            <div className="list-row">
              {layout
                .map((l) => ({ ...l, key: l.key || l.column.toLowerCase() }))
                .filter((l) => l.key in row && l.type !== "details")
                .map(({ key, type, size }) => (
                  <div key={key} className={`col-${size || "md"}`}>
                    {type === "image" && (
                      <img
                        className="rounded-circle square36"
                        src={
                          row[key].includes("http")
                            ? row[key]
                            : /\.(jpg|jpeg|png|gif)$/i.test(row[key])
                            ? `/${row[key]}`
                            : `/${row[key]}.jpg`
                        }
                      />
                    )}
                    {(type === "text" || type === "price") && (
                      <p>
                        {row[key]} {type === "price" && "€"}
                      </p>
                    )}
                    {type === "boolean" && (
                      <i
                        className={`text-xl  ${row[key] ? "mdi mdi-check text-success" : "mdi mdi-close text-danger"}`}
                      />
                    )}
                    {type === "raw" && row[key]}
                  </div>
                ))}
              {(actions || hasDetails) && (
                <div className="col-sm">
                  <div className="actions">
                    {actions.map((item: any) => (
                      <Action
                        key={item.action || item.icon}
                        action={item.action}
                        iconOnly={item.iconOnly}
                        icon={item.icon}
                        text={item.text}
                        color={item.color}
                        onClick={() => item.onClick(row[keyColumn])}
                      />
                    ))}
                    {hasDetails && hasDetailsData(row) && (
                      <Action
                        color="primary"
                        icon={`mdi-chevron-${openedDetails === row[keyColumn] ? "up" : "down"}`}
                        iconOnly
                        onClick={() => setOpenedDetails(openedDetails === row[keyColumn] ? null : row[keyColumn])}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
            <Details
              opened={openedDetails === row[keyColumn]}
              layout={layout.find((l) => l.type === "details")}
              parentRow={row}
              keyColumn={keyColumn}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

interface ActionProps {
  action?: string;
  iconOnly: boolean;
  icon: string;
  color: string;
  text?: string;
  onClick: () => void;
}

function Action({ action = "", iconOnly, icon, color, text = "", onClick }: ActionProps) {
  const actionDetails = () => {
    if (action === "edit")
      return {
        icon: "mdi-pencil",
        color: "primary",
        text: "Edit"
      };
    if (action === "delete")
      return {
        icon: "mdi-delete",
        color: "danger",
        text: "Delete"
      };
    return {
      icon,
      color,
      text
    };
  };

  return (
    <p className={`text-${actionDetails().color} px-2 pointer`} onClick={onClick}>
      <i className={`mdi ${actionDetails().icon}`} /> {!iconOnly && actionDetails().text}
    </p>
  );
}

interface DetailsProps {
  opened: boolean;
  layout: Layout | undefined;
  parentRow: any;
  keyColumn: string;
}

function Details({ opened, layout, parentRow, keyColumn }: DetailsProps) {
  if (!opened) return null;
  if (!layout?.detailsLayout) return null;

  const detailsData = parentRow[layout.key || layout.column.toLowerCase()];

  return (
    <div className="list-rows-details">
      {detailsData.map((row: any) => (
        <div className="list-row-detail" key={row[keyColumn]}>
          {layout.detailsLayout &&
            layout.detailsLayout
              .map((l) => ({ ...l, key: l.key || l.column.toLowerCase() }))
              .filter((l) => l.key in row)
              .map(({ key, type }) => (
                <div className="col-md" key={key}>
                  {type === "image" && <img className="rounded-circle square36" src={`/${row[key]}.jpg`} />}
                  {(type === "text" || type === "price") && (
                    <p>
                      {row[key]} {type === "price" && "€"}
                    </p>
                  )}
                  {type === "boolean" && (
                    <i className={`text-xl ${row[key] ? "mdi mdi-check text-success" : "mdi mdi-close text-danger"}`} />
                  )}
                  {type === "raw" && row[key]}
                </div>
              ))}
        </div>
      ))}
    </div>
  );
}
