// @ts-ignore
import { Collapse, List } from "well-rounded-ui";

export default function ListTests() {
  const handleOrder = (id: number) => {
    console.log(id);
  };

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
            },
            {
              icon: "mdi-arrow-up",
              color: "secondary",
              iconOnly: true,
              onClick: (id: number) => handleOrder(id)
            },
            {
              icon: "mdi-arrow-down",
              color: "secondary",
              iconOnly: true,
              onClick: (id: number) => handleOrder(id)
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
