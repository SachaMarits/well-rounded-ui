// @ts-ignore
import { Collapse, List } from "well-rounded-ui";

export default function ListTests() {
  return (
    <Collapse title="List" className="mb-3">
      <div style={{ backgroundColor: "whitesmoke", padding: 16 }}>
        <List
          actions={[
            {
              action: "edit",
              iconOnly: true,
              onClick: () => {}
            },
            {
              action: "delete",
              iconOnly: true,
              onClick: () => {}
            }
          ]}
          data={[
            { id: 1, picture: "https://picsum.photos/36", name: "Sacha", active: true },
            { id: 2, picture: "https://picsum.photos/37", name: "Jax", active: false },
            { id: 3, picture: "https://picsum.photos/38", name: "Vayne", active: true },
            { id: 4, picture: "https://picsum.photos/39", name: "Morgana", active: true }
          ]}
          keyColumn="id"
          layout={[
            {
              column: "Picture",
              size: "sm",
              type: "image"
            },
            {
              column: "Name",
              size: "lg",
              type: "raw"
            },
            {
              column: "Active",
              size: "sm",
              type: "boolean"
            }
          ]}
        />
      </div>
    </Collapse>
  );
}
