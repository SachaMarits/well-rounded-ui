import React, { Fragment, useState } from "react";
import { NoDataPlaceholder } from "../layout";

interface Layout {
  column: string;
  type: string;
  key?: string;
  detailsLayout?: Layout[];
}

interface TableProps {
  keyColumn: string;
  data: any;
  layout: Layout[];
  actions: any;
}

export default function Table2({ keyColumn, data, layout, actions }: TableProps) {
  const [openedDetails, setOpenedDetails] = useState(-1);

  if (data.length === 0) return <NoDataPlaceholder icon="table-off" text="Nothing to show !" />;
  const hasDetails = layout.some((l) => l.type === "details");

  return (
    <table className="table">
      <thead>
        <tr className="columns">
          {layout
            .filter((l) => l.type !== "details")
            .map(({ column }) => (
              <th key={column}>{column}</th>
            ))}
          {(actions.length > 0 || hasDetails) && <th>{actions.length === 1 ? "Action" : "Actions"}</th>}
        </tr>
      </thead>
      <tbody className="rows">
        {data.map((row: any) => (
          <Fragment key={row[keyColumn]}>
            <tr>
              {layout
                .map((l) => ({ ...l, key: l.key || l.column.toLowerCase() }))
                .filter((l) => l.key in row && l.type !== "details")
                .map(({ key, type }) => (
                  <td key={key} className={type === "image" ? "d-flex align-items-center justify-content-center" : ""}>
                    <div className="td-content">
                      {type === "image" && <img className="rounded-circle square36" src={`/${row[key]}.jpg`} />}
                      {(type === "text" || type === "price") && (
                        <p>
                          {row[key]} {type === "price" && "€"}
                        </p>
                      )}
                      {type === "boolean" && (
                        <i
                          className={`text-xl ${row[key] ? "mdi mdi-check text-success" : "mdi mdi-close text-danger"}`}
                        />
                      )}
                      {type === "raw" && row[key]}
                    </div>
                  </td>
                ))}
              {(actions || hasDetails) && (
                <td>
                  <div className="td-content">
                    <div className="actions">
                      {actions.map((item: any) => (
                        <Fragment key={item.action}>
                          {item.action === "edit" && (
                            <p className="text-primary px-2 pointer" onClick={() => item.onClick(row[keyColumn])}>
                              <i className="mdi mdi-pencil" /> {!item.iconOnly && "Edit"}
                            </p>
                          )}
                          {item.action === "delete" && (
                            <p className="text-danger px-2 pointer" onClick={() => item.onClick(row[keyColumn])}>
                              <i className="mdi mdi-delete" /> {!item.iconOnly && "Delete"}
                            </p>
                          )}
                        </Fragment>
                      ))}
                      {hasDetails && (
                        <p
                          className="text-primary px-2 pointer"
                          onClick={() => setOpenedDetails(openedDetails === row[keyColumn] ? null : row[keyColumn])}
                        >
                          <i className={`mdi mdi-chevron-${openedDetails === row[keyColumn] ? "up" : "down"}`} />
                        </p>
                      )}
                    </div>
                  </div>
                </td>
              )}
            </tr>
            <Details
              opened={openedDetails === row[keyColumn]}
              layout={layout.find((l) => l.type === "details")}
              parentRow={row}
              keyColumn={keyColumn}
              columnCount={
                layout.filter((l) => l.type !== "details").length + (actions.length > 0 || hasDetails ? 1 : 0)
              }
            />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

interface DetailsProps {
  opened: boolean;
  layout: Layout | undefined;
  parentRow: any;
  keyColumn: string;
  columnCount: number;
}

function Details({ opened, layout, parentRow, keyColumn, columnCount }: DetailsProps) {
  if (!opened) return null;
  if (!layout?.detailsLayout) return null;

  const detailsData = parentRow[layout.key || layout.column.toLowerCase()];

  return (
    <>
      {detailsData.map((row: any, i: number) => (
        <tr
          className={`table-row-details ${detailsData.length === i + 1 ? "table-row-details-last" : ""}`}
          key={row[keyColumn]}
        >
          <td colSpan={columnCount}>
            <div className="td-content d-flex align-items-center justify-content-around">
              {layout.detailsLayout &&
                layout.detailsLayout
                  .map((l) => ({ ...l, key: l.key || l.column.toLowerCase() }))
                  .filter((l) => l.key in row)
                  .map(({ key, type }) => (
                    <Fragment key={key}>
                      {type === "image" && <img className="rounded-circle square36" src={`/${row[key]}.jpg`} />}
                      {(type === "text" || type === "price") && (
                        <p>
                          {row[key]} {type === "price" && "€"}
                        </p>
                      )}
                      {type === "boolean" && (
                        <i
                          className={`text-xl ${row[key] ? "mdi mdi-check text-success" : "mdi mdi-close text-danger"}`}
                        />
                      )}
                      {type === "raw" && row[key]}
                    </Fragment>
                  ))}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
